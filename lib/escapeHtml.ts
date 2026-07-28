const MAP: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" };

export function escapeHtml(str: unknown): string {
  if (str == null) return "";
  return String(str).replace(/[&<>"']/g, (c) => MAP[c]);
}
