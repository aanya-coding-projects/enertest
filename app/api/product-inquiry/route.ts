import { Resend } from "resend";
import { NextRequest } from "next/server";
import { verifyTurnstile } from "@/lib/turnstile";
import { escapeHtml } from "@/lib/escapeHtml";
import { rateLimit, getIp } from "@/lib/rateLimit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  // Rate limit: 5 submissions per 15 minutes per IP
  if (!rateLimit(getIp(req), 5, 15 * 60 * 1000)) {
    return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { name, company, email, phone, message, productName, turnstileToken } = body;

  if (!(await verifyTurnstile(turnstileToken))) {
    return Response.json({ error: "CAPTCHA verification failed" }, { status: 400 });
  }

  // Input validation
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return Response.json({ error: "Name is required" }, { status: 400 });
  }
  if (!company || typeof company !== "string" || company.trim().length === 0) {
    return Response.json({ error: "Company is required" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Valid email is required" }, { status: 400 });
  }
  if (!productName || typeof productName !== "string") {
    return Response.json({ error: "Invalid product" }, { status: 400 });
  }
  if (name.length > 100 || company.length > 100 || (message && message.length > 3000)) {
    return Response.json({ error: "Input exceeds maximum length" }, { status: 400 });
  }

  const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
  const salesEmails = (process.env.SALES_EMAIL ?? "").split(",").map((e) => e.trim()).filter(Boolean);

  if (salesEmails.length === 0) {
    return Response.json({ error: "No sales emails configured" }, { status: 500 });
  }

  const eName = escapeHtml(name);
  const eCompany = escapeHtml(company);
  const eEmail = escapeHtml(email);
  const ePhone = escapeHtml(phone);
  const eMessage = escapeHtml(message);
  const eProductName = escapeHtml(productName);

  try {
    await Promise.all([
      resend.emails.send({
        from: `EnerTest Solutions <${fromEmail}>`,
        to: salesEmails,
        subject: `Product Inquiry — ${eProductName}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#396548;padding:24px 32px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">Product Inquiry</h2>
            </div>
            <div style="background:#f9f9f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5">
              <h3 style="margin:0 0 16px;color:#396548">Product of Interest</h3>
              <p style="font-size:15px;font-weight:600;margin:0 0 24px">${eProductName}</p>
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:0 0 24px" />
              <h3 style="margin:0 0 16px;color:#396548">Contact Details</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Name</td><td style="padding:6px 0;font-weight:600">${eName}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Company</td><td style="padding:6px 0;font-weight:600">${eCompany}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${eEmail}" style="color:#396548">${eEmail}</a></td></tr>
                <tr><td style="padding:6px 0;color:#555">Phone</td><td style="padding:6px 0">${ePhone || "—"}</td></tr>
              </table>
              ${eMessage ? `
                <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
                <h3 style="margin:0 0 12px;color:#396548">Message</h3>
                <p style="font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap">${eMessage}</p>
              ` : ""}
            </div>
          </div>
        `,
      }),

      resend.emails.send({
        from: `EnerTest Solutions <${fromEmail}>`,
        to: [email],
        subject: `We received your inquiry about ${eProductName} — EnerTest Solutions`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#396548;padding:24px 32px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">Inquiry Received</h2>
            </div>
            <div style="background:#f9f9f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5">
              <p style="font-size:15px;margin:0 0 16px">Hi ${eName},</p>
              <p style="font-size:15px;margin:0 0 24px;line-height:1.6">
                Thank you for your interest in the <strong>${eProductName}</strong>. Our team has received your inquiry
                and will follow up within <strong>1–2 business days</strong> with more information or to discuss your specific requirements.
              </p>
              <h3 style="margin:0 0 16px;color:#396548">Your Inquiry Summary</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Product</td><td style="padding:6px 0">${eProductName}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Company</td><td style="padding:6px 0">${eCompany}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
              <p style="font-size:13px;color:#777;margin:0">EnerTest Solutions · Smyrna, GA · enertestsolutions.com</p>
            </div>
          </div>
        `,
      }),
    ]);

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send emails" }, { status: 500 });
  }
}
