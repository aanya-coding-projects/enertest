// In-process rate limiter — resets on cold start, sufficient for low-traffic B2B use.
const store = new Map<string, number[]>();

export function rateLimit(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const hits = (store.get(ip) ?? []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) return false;
  hits.push(now);
  store.set(ip, hits);
  return true;
}

export function getIp(req: Request): string {
  return (
    (req.headers as Headers).get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}
