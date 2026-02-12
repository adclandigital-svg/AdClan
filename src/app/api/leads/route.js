import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, need, pageUrl } = await req.json();

    if (!email && !phone) {
      return NextResponse.json(
        { success: false, error: "Email or phone required" },
        { status: 400 }
      );
    }

    const senderEmail =
      process.env.BREVO_SENDER_EMAIL || "youraccount@brevo.com";
    const salesEmail =
      process.env.BREVO_RECEIVER_EMAIL || "sales@adclan.in";

    const host = req.headers.get("host");
    const protocol = host?.includes("localhost") ? "http" : "https";
    const websiteURL = `${protocol}://${host}`;

    const headers = {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    };

    /* -------------------------
       1️⃣ EMAIL TO SALES TEAM
    ------------------------- */
    const salesRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers,
      body: JSON.stringify({
        sender: { name: "Adclan Chatbot", email: senderEmail },
        to: [{ email: salesEmail, name: "Sales Team" }],
        subject: "🔥 New Chatbot Lead",
        htmlContent: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;background:#fff;border:1px solid #000;">
            <div style="background:#000;color:#fff;padding:28px;text-align:center;">
              <h2 style="margin:0;font-size:22px;letter-spacing:1px;">NEW CHATBOT LEAD</h2>
            </div>

            <div style="padding:28px;color:#000;line-height:1.7;">
              <p><strong>Name:</strong> ${name || "N/A"}</p>
              <p><strong>Email:</strong> ${email || "N/A"}</p>
              <p><strong>Phone:</strong> ${phone || "N/A"}</p>
              <p><strong>Requirement:</strong><br/>${need || "N/A"}</p>
              <p><strong>Page:</strong> ${pageUrl || websiteURL}</p>
            </div>

            <div style="border-top:1px solid #000;padding:16px;text-align:center;font-size:12px;color:#000;">
              <p style="margin:0;">${websiteURL} © 2026</p>
              <p style="margin:0;">Automated chatbot message</p>
            </div>
          </div>
        `,
      }),
    });

    if (!salesRes.ok) {
      const err = await salesRes.text();
      throw new Error("Failed to send to Sales: " + err);
    }

    /* -------------------------
       2️⃣ THANK YOU EMAIL TO USER
    ------------------------- */
    if (email) {
      const userRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers,
        body: JSON.stringify({
          sender: { name: "Adclan Team", email: senderEmail },
          to: [{ email, name: name || "Guest" }],
          subject: "Thanks for chatting with Adclan 👋",
          htmlContent: `
            <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;background:#fff;border:1px solid #000;">
              <div style="background:#000;color:#fff;padding:34px;text-align:center;">
                <h1 style="margin:0;font-size:26px;letter-spacing:1px;">
                  THANK YOU ${name ? name.toUpperCase() : ""}
                </h1>
                <p style="margin:8px 0 0;font-size:14px;opacity:.9;">
                  We’ve received your request
                </p>
              </div>

              <div style="padding:32px;color:#000;line-height:1.7;">
                <p>Hello <strong>${name || "there"}</strong>,</p>
                <p>
                  Thanks for chatting with us. Our team will contact you shortly.
                </p>

                <div style="border:1px solid #000;padding:18px;margin:24px 0;">
                  ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
                  ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
                  ${need ? `<p><strong>Requirement:</strong><br/>${need}</p>` : ""}
                </div>

                <div style="text-align:center;margin-top:28px;">
                  <a href="${websiteURL}"
                     style="background:#000;color:#fff;text-decoration:none;padding:12px 28px;border-radius:0;font-weight:600;display:inline-block;">
                    Visit Website
                  </a>
                </div>
              </div>

              <div style="border-top:1px solid #000;padding:18px;text-align:center;font-size:12px;color:#000;">
                <p style="margin:0;">Adclan Media © 2026</p>
                <p style="margin:0;">This is an automated email</p>
              </div>
            </div>
          `,
        }),
      });

      if (!userRes.ok) {
        const err = await userRes.text();
        console.warn("Failed to send Thank You email:", err);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Chatbot API error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
