import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Accept secret via Authorization header (preferred) or query param (legacy)
  const headerSecret = request.headers.get("authorization")?.replace("Bearer ", "") || null;
  const querySecret = request.nextUrl.searchParams.get("secret");
  const secret = headerSecret || querySecret;

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    revalidateTag("sanity", { expire: 0 });
    return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
  } catch {
    return NextResponse.json({ message: "Revalidation failed" }, { status: 500 });
  }
}
