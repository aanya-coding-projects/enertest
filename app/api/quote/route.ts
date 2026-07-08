import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { name, company, email, phone, products, chemistry, cellFormat, channelCount, timeline, budget, projectDetails } = body;

  const salesEmail = process.env.SALES_EMAIL;
  const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

  if (!salesEmail) {
    return Response.json({ error: "SALES_EMAIL not configured" }, { status: 500 });
  }

  const productList = products?.length ? products.join(", ") : "None selected";

  try {
    await Promise.all([
      // Email to sales team
      resend.emails.send({
        from: `EnerTest Solutions <${fromEmail}>`,
        to: [salesEmail],
        subject: `New Quote Request — ${company} (${name})`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#396548;padding:24px 32px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">New Quote Request</h2>
            </div>
            <div style="background:#f9f9f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5">

              <h3 style="margin:0 0 16px;color:#396548">Contact</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Name</td><td style="padding:6px 0;font-weight:600">${name}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Company</td><td style="padding:6px 0;font-weight:600">${company}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#396548">${email}</a></td></tr>
                <tr><td style="padding:6px 0;color:#555">Phone</td><td style="padding:6px 0">${phone || "—"}</td></tr>
              </table>

              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />

              <h3 style="margin:0 0 16px;color:#396548">Products of Interest</h3>
              <p style="font-size:14px;margin:0">${productList}</p>

              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />

              <h3 style="margin:0 0 16px;color:#396548">Technical Details</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Chemistry</td><td style="padding:6px 0">${chemistry || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Cell Format</td><td style="padding:6px 0">${cellFormat || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Channels / Positions</td><td style="padding:6px 0">${channelCount || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Budget</td><td style="padding:6px 0">${budget || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Timeline</td><td style="padding:6px 0">${timeline || "—"}</td></tr>
              </table>

              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />

              <h3 style="margin:0 0 12px;color:#396548">Project Details</h3>
              <p style="font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap">${projectDetails}</p>
            </div>
          </div>
        `,
      }),

      // Confirmation email to customer
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
              <p style="font-size:15px;margin:0 0 16px">Hi ${name},</p>
              <p style="font-size:15px;margin:0 0 24px;line-height:1.6">
                Thank you for reaching out to EnerTest Solutions. Our engineering team has received your request
                and will follow up within <strong>1–2 business days</strong> with technical questions or a preliminary proposal.
              </p>

              <h3 style="margin:0 0 16px;color:#396548">Your Request Summary</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:6px 0;color:#555;width:160px">Company</td><td style="padding:6px 0">${company}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Products</td><td style="padding:6px 0">${productList}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Budget</td><td style="padding:6px 0">${budget || "—"}</td></tr>
                <tr><td style="padding:6px 0;color:#555">Timeline</td><td style="padding:6px 0">${timeline || "—"}</td></tr>
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
  } catch (err: any) {
    console.error("Resend error:", err);
    return Response.json(
      { error: "Failed to send emails", detail: err?.message ?? String(err) },
      { status: 500 }
    );
  }
}
