import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, company, email, phone, subject, message } = body;

    const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
    const salesEmails = (process.env.SALES_EMAIL ?? "").split(",").map((e) => e.trim()).filter(Boolean);

    if (salesEmails.length === 0) {
      return Response.json({ error: "No sales emails configured" }, { status: 500 });
    }

    await Promise.all([
      // Notification to sales team
      resend.emails.send({
        from: `EnerTest Solutions <${fromEmail}>`,
        to: salesEmails,
        subject: `New Contact Message — ${subject || "General Inquiry"} (${name})`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#396548;padding:24px 32px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">New Contact Message</h2>
            </div>
            <div style="background:#f9f9f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5">
              <h3 style="margin:0 0 16px;color:#396548">Contact Details</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Name</td><td style="padding:6px 0;font-weight:600">${name}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Company</td><td style="padding:6px 0;font-weight:600">${company || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#396548">${email}</a></td></tr>
                <tr><td style="padding:6px 0;color:#555">Phone</td><td style="padding:6px 0">${phone || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Subject</td><td style="padding:6px 0">${subject || "—"}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
              <h3 style="margin:0 0 12px;color:#396548">Message</h3>
              <p style="font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap">${message}</p>
            </div>
          </div>
        `,
      }),

      // Confirmation to sender
      resend.emails.send({
        from: `EnerTest Solutions <${fromEmail}>`,
        to: [email],
        subject: "We received your message — EnerTest Solutions",
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#396548;padding:24px 32px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">Message Received</h2>
            </div>
            <div style="background:#f9f9f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5">
              <p style="font-size:15px;margin:0 0 16px">Hi ${name},</p>
              <p style="font-size:15px;margin:0 0 24px;line-height:1.6">
                Thank you for reaching out to EnerTest Solutions. We've received your message and will get back to you within <strong>1–2 business days</strong>.
              </p>
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
              <p style="font-size:13px;color:#777;margin:0">EnerTest Solutions · Smyrna, GA · enertestsolutions.com</p>
            </div>
          </div>
        `,
      }),
    ]);

    return Response.json({ success: true });
  } catch (err: any) {
    console.error("Contact error:", err);
    return Response.json({ error: "Failed to send message", detail: err?.message }, { status: 500 });
  }
}
