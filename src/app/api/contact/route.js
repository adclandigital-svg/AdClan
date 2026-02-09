// export async function POST(req) {
//   try {
//     const { name, email, company, message } = await req.json();

//     if (!name || !email || !message) {
//       return Response.json(
//         { success: false, message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const res = await fetch("https://api.brevo.com/v3/smtp/email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "api-key": process.env.BREVO_API_KEY,
//       },
//       body: JSON.stringify({
//         sender: {
//           name: "Adclan Contact",
//           email: "9f4d47001@smtp-brevo.com",
//         },
//         to: [{ email: process.env.BREVO_RECEIVER }],
//         replyTo: { email },
//         subject: "New Contact Form Lead",
//         htmlContent: `
//           <h3>New Contact Lead</h3>
//           <p><b>Name:</b> ${name}</p>
//           <p><b>Email:</b> ${email}</p>
//           <p><b>Company:</b> ${company || "N/A"}</p>
//           <p><b>Message:</b><br/>${message}</p>
//         `,
//       }),
//     });

//     const data = await res.json();
//     console.log(data);
//     if (!res.ok) throw new Error(data.message || "Brevo API error");

//     return Response.json({ success: true });
//   } catch (error) {
//     return Response.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }




import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const senderEmail = process.env.BREVO_SENDER_EMAIL || "youraccount@brevo.com";
    const salesEmail = process.env.BREVO_RECEIVER_EMAIL || "sales@adclan.in";

    const host = req.headers.get("host");
    const protocol = host?.includes("localhost") ? "http" : "https";
    const websiteURL = `${protocol}://${host}`;

    const headers = {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    };

    // -------------------------
    // 1️⃣ Email to Sales Team
    // -------------------------
    const salesRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers,
      body: JSON.stringify({
        sender: { name: "Website Lead", email: senderEmail },
        to: [{ email: salesEmail, name: "Sales Team" }],
        subject: "New Website Enquiry",
        htmlContent: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;background:#fff;border:1px solid #000;">
            <div style="background:#000;color:#fff;padding:28px;text-align:center;">
              <h2 style="margin:0;font-size:22px;letter-spacing:1px;">NEW CONTACT LEAD</h2>
            </div>

            <div style="padding:28px;color:#000;line-height:1.7;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Message:</strong><br/>${message}</p>
            </div>

            <div style="border-top:1px solid #000;padding:16px;text-align:center;font-size:12px;color:#000;">
              <p style="margin:0;">${websiteURL} © 2026</p>
              <p style="margin:0;">Automated message · Do not reply</p>
            </div>
          </div>
        `,
      }),
    });

    if (!salesRes.ok) {
      const err = await salesRes.text();
      throw new Error("Failed to send to Sales: " + err);
    }

    // -------------------------
    // 2️⃣ Thank You Email to User
    // -------------------------
    const userRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers,
      body: JSON.stringify({
        sender: { name: "Website Team", email: senderEmail },
        to: [{ email, name }],
        subject: "Thank You for Contacting Us",
        htmlContent: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;background:#fff;border:1px solid #000;">
            <div style="background:#000;color:#fff;padding:34px;text-align:center;">
              <h1 style="margin:0;font-size:26px;letter-spacing:1px;">THANK YOU, ${name.toUpperCase()}</h1>
              <p style="margin:8px 0 0;font-size:14px;opacity:.9;">
                We’ve received your message
              </p>
            </div>

            <div style="padding:32px;color:#000;line-height:1.7;">
              <p>Hello <strong>${name}</strong>,</p>
              <p>
                Thank you for reaching out. Our team will review your message and
                get back to you shortly.
              </p>

              <div style="border:1px solid #000;padding:18px;margin:24px 0;">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Message:</strong><br/>${message}</p>
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

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
