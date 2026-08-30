import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
      console.error("[revalidate] SANITY_REVALIDATE_SECRET is not set");
      return NextResponse.json({ message: "Server misconfiguration" }, { status: 500 });
    }

    const { isValidSignature, body } = await parseBody(req, secret);

    if (isValidSignature === null) {
      console.error("[revalidate] Missing sanity-webhook-signature header");
      return NextResponse.json({ message: "Missing signature header" }, { status: 401 });
    }

    if (!isValidSignature) {
      console.error("[revalidate] Invalid signature");
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    const docType = (body as { _type?: string } | null)?._type;
    console.log("[revalidate] Valid webhook, docType:", docType);

    revalidateTag("sanity", "max");

    // revalidatePath works at the routing layer and propagates across all
    // serverless instances on Vercel, unlike revalidateTag which is in-memory only.
    switch (docType) {
      case "product":
        revalidatePath("/products", "layout");
        break;
      case "category":
        revalidatePath("/products");
        break;
      case "contactPage":
        revalidatePath("/contact");
        break;
      case "homePage":
        revalidatePath("/");
        break;
      case "aboutPage":
        revalidatePath("/about");
        break;
      case "caseStudy":
        revalidatePath("/case-studies", "layout");
        break;
      default:
        revalidatePath("/", "layout");
        break;
    }

    return NextResponse.json({ revalidated: true, docType, at: new Date().toISOString() });
  } catch (err) {
    console.error("[revalidate] Error:", err);
    return NextResponse.json(
      { message: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
