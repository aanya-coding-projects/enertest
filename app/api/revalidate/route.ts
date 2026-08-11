import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature } = await parseBody(req, process.env.SANITY_REVALIDATE_SECRET);

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    revalidateTag("sanity", { expire: 0 });
    return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
