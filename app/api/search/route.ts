import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { SEARCHABLE_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import type { SearchResult } from "@/sanity/lib/types";

// Simple in-process cache so repeated keystrokes don't hammer the Sanity API
let cache: SearchResult[] | null = null;
let cacheAt = 0;
const TTL = 5 * 60 * 1000;

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim().toLowerCase() ?? "";
  if (!q) return NextResponse.json([]);

  if (!cache || Date.now() - cacheAt > TTL) {
    cache = await client.fetch<SearchResult[]>(SEARCHABLE_PRODUCTS_QUERY);
    cacheAt = Date.now();
  }

  const results = cache
    .filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.model?.toLowerCase().includes(q)
    )
    .slice(0, 8);

  return NextResponse.json(results);
}
