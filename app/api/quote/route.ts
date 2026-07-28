import { Resend } from "resend";
import { NextRequest } from "next/server";
import { verifyTurnstile } from "@/lib/turnstile";
import { escapeHtml } from "@/lib/escapeHtml";
import { rateLimit, getIp } from "@/lib/rateLimit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    // Rate limit: 5 submissions per 15 minutes per IP
    if (!rateLimit(getIp(req), 5, 15 * 60 * 1000)) {
      return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, company, email, phone, products, chemistry, cellFormat, channelCount, timeline, budget, projectDetails, turnstileToken } = body;

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
    if (!projectDetails || typeof projectDetails !== "string" || projectDetails.trim().length === 0) {
      return Response.json({ error: "Project details are required" }, { status: 400 });
    }
    if (!Array.isArray(products)) {
      return Response.json({ error: "Invalid products field" }, { status: 400 });
    }
    if (name.length > 100 || company.length > 100 || projectDetails.length > 8000) {
      return Response.json({ error: "Input exceeds maximum length" }, { status: 400 });
    }

    const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
    const salesEmails = (process.env.SALES_EMAIL ?? "").split(",").map((e) => e.trim()).filter(Boolean);

    if (salesEmails.length === 0) {
      return Response.json({ error: "No sales emails configured" }, { status: 500 });
    }

    // Escape all user input before injecting into HTML
    const eName = escapeHtml(name);
    const eCompany = escapeHtml(company);
    const eEmail = escapeHtml(email);
    const ePhone = escapeHtml(phone);
    const eChemistry = escapeHtml(chemistry);
    const eCellFormat = escapeHtml(cellFormat);
    const eChannelCount = escapeHtml(channelCount);
    const eBudget = escapeHtml(budget);
    const eTimeline = escapeHtml(timeline);
    const eProjectDetails = escapeHtml(projectDetails);
    const productList = Array.isArray(products) && products.length
      ? products.map((p: unknown) => escapeHtml(p)).join(", ")
      : "None selected";

    await Promise.all([
      resend.emails.send({
        from: `EnerTest Solutions <${fromEmail}>`,
        to: salesEmails,
        subject: `New Quote Request — ${company} (${name})`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#396548;padding:24px 32px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">New Quote Request</h2>
            </div>
            <div style="background:#f9f9f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5">
              <h3 style="margin:0 0 16px;color:#396548">Contact</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Name</td><td style="padding:6px 0;font-weight:600">${eName}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Company</td><td style="padding:6px 0;font-weight:600">${eCompany}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${eEmail}" style="color:#396548">${eEmail}</a></td></tr>
                <tr><td style="padding:6px 0;color:#555">Phone</td><td style="padding:6px 0">${ePhone || "—"}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
              <h3 style="margin:0 0 16px;color:#396548">Products of Interest</h3>
              <p style="font-size:14px;margin:0">${productList}</p>
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
              <h3 style="margin:0 0 16px;color:#396548">Technical Details</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Chemistry</td><td style="padding:6px 0">${eChemistry || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Cell Format</td><td style="padding:6px 0">${eCellFormat || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Channels / Positions</td><td style="padding:6px 0">${eChannelCount || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Budget</td><td style="padding:6px 0">${eBudget || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Timeline</td><td style="padding:6px 0">${eTimeline || "—"}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
              <h3 style="margin:0 0 12px;color:#396548">Project Details</h3>
              <p style="font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap">${eProjectDetails}</p>
            </div>
          </div>
        `,
      }),

      resend.emails.send({
        from: `EnerTest Solutions <${fromEmail}>`,
        to: [email],
        subject: "We received your quote request — EnerTest Solutions",
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#396548;padding:24px 32px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">Quote Request Received</h2>
            </div>
            <div style="background:#f9f9f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5">
              <p style="font-size:15px;margin:0 0 16px">Hi ${eName},</p>
              <p style="font-size:15px;margin:0 0 24px;line-height:1.6">
                Thank you for reaching out to EnerTest Solutions. Our engineering team has received your request
                and will follow up within <strong>1–2 business days</strong> with technical questions or a preliminary proposal.
              </p>
              <h3 style="margin:0 0 16px;color:#396548">Your Request Summary</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Company</td><td style="padding:6px 0">${eCompany}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Products</td><td style="padding:6px 0">${productList}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Budget</td><td style="padding:6px 0">${eBudget || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Timeline</td><td style="padding:6px 0">${eTimeline || "—"}</td></tr>
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
