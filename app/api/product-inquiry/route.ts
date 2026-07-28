import { Resend } from "resend";
import { NextRequest } from "next/server";
import { verifyTurnstile } from "@/lib/turnstile";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { name, company, email, phone, message, productName, turnstileToken } = body;

  if (!(await verifyTurnstile(turnstileToken))) {
    return Response.json({ error: "CAPTCHA verification failed" }, { status: 400 });
  }

  const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
  const salesEmails = (process.env.SALES_EMAIL ?? "").split(",").map((e) => e.trim()).filter(Boolean);

  if (salesEmails.length === 0) {
    return Response.json({ error: "No sales emails configured" }, { status: 500 });
  }

  try {
    await Promise.all([
      // Email to sales team
      resend.emails.send({
        from: `EnerTest Solutions <${fromEmail}>`,
        to: salesEmails,
        subject: `Product Inquiry — ${productName}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#396548;padding:24px 32px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">Product Inquiry</h2>
            </div>
            <div style="background:#f9f9f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5">

              <h3 style="margin:0 0 16px;color:#396548">Product of Interest</h3>
              <p style="font-size:15px;font-weight:600;margin:0 0 24px">${productName}</p>

              <hr style="border:none;border-top:1px solid #e5e5e5;margin:0 0 24px" />

              <h3 style="margin:0 0 16px;color:#396548">Contact Details</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Name</td><td style="padding:6px 0;font-weight:600">${name}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Company</td><td style="padding:6px 0;font-weight:600">${company}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#396548">${email}</a></td></tr>
                <tr><td style="padding:6px 0;color:#555">Phone</td><td style="padding:6px 0">${phone || "—"}</td></tr>
              </table>

              ${
                message
                  ? `<hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
                     <h3 style="margin:0 0 12px;color:#396548">Message</h3>
                     <p style="font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap">${message}</p>`
                  : ""
              }
            </div>
          </div>
        `,
      }),

      // Confirmation email to customer
      resend.emails.send({
        from: `EnerTest Solutions <${fromEmail}>`,
        to: [email],
        subject: `We received your inquiry about ${productName} — EnerTest Solutions`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#396548;padding:24px 32px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">Inquiry Received</h2>
            </div>
            <div style="background:#f9f9f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5">
              <p style="font-size:15px;margin:0 0 16px">Hi ${name},</p>
              <p style="font-size:15px;margin:0 0 24px;line-height:1.6">
                Thank you for your interest in the <strong>${productName}</strong>. Our team has received your inquiry
                and will follow up within <strong>1–2 business days</strong> with more information or to discuss your specific requirements.
              </p>

              <h3 style="margin:0 0 16px;color:#396548">Your Inquiry Summary</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Product</td><td style="padding:6px 0">${productName}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Company</td><td style="padding:6px 0">${company}</td></tr>
              </table>

              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
              <p style="font-size:13px;color:#777;margin:0">
                EnerTest Solutions · Smyrna, GA · enertestsolutions.com
              </p>
            </div>
          </div>
        `,
      }),
    ]);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ error: "Failed to send emails" }, { status: 500 });
  }
}
