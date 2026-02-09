// export async function POST(req) {
//   try {
//     const formData = await req.formData();

//     const name = formData.get("name");
//     const email = formData.get("email");
//     const phone = formData.get("phone");
//     const message = formData.get("message");
//     const resumeFile = formData.get("resume");

//     if (!name || !email || !resumeFile) {
//       return Response.json(
//         { success: false, message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // Convert file → base64
//     const arrayBuffer = await resumeFile.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     const base64Resume = buffer.toString("base64");

//     // Send email via Brevo
//     const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "api-key": process.env.BREVO_API_KEY,
//       },
//       body: JSON.stringify({
//         sender: {
//           name: "Adclan Careers",
//           email: "9f4d47001@smtp-brevo.com"
//         },
//         to: [
//           { email: process.env.BREVO_RECEIVER }
//         ],
//         subject: "New Job Application — Adclan",
//         htmlContent: `
//           <h2>New Job Application</h2>
//           <p><b>Name:</b> ${name}</p>
//           <p><b>Email:</b> ${email}</p>
//           <p><b>Phone:</b> ${phone || "N/A"}</p>
//           <p><b>Message:</b><br/>${message || "N/A"}</p>
//         `,
//         attachment: [
//           {
//             name: resumeFile.name,
//             content: base64Resume
//           }
//         ]
//       }),
//     });

//     const data = await brevoRes.json();
//     console.log(data)

//     if (!brevoRes.ok) {
//       console.error(data);
//       throw new Error(data.message || "Brevo API error");
//     }

//     return Response.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return Response.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const resumeFile = formData.get("resume");

    if (!name || !email || !resumeFile) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert file → base64
    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    const base64Resume = buffer.toString("base64");

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Adclan Careers",
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [{ email: process.env.BREVO_RECEIVER_EMAIL }],
        subject: "New Job Application — Adclan",
        htmlContent: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;background:#fff;border:1px solid #000;">
            <div style="background:#000;color:#fff;padding:26px;text-align:center;">
              <h2 style="margin:0;letter-spacing:1px;">NEW JOB APPLICATION</h2>
            </div>

            <div style="padding:28px;color:#000;line-height:1.7;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "N/A"}</p>
              <p><strong>Message:</strong><br/>${message || "N/A"}</p>
            </div>

            <div style="border-top:1px solid #000;padding:16px;text-align:center;font-size:12px;">
              <p style="margin:0;">Adclan Careers © 2026</p>
              <p style="margin:0;">Resume attached · Automated email</p>
            </div>
          </div>
        `,
        attachment: [
          {
            name: resumeFile.name,
            content: base64Resume,
          },
        ],
      }),
    });

    const data = await brevoRes.json();
    if (!brevoRes.ok) throw new Error(data.message || "Brevo API error");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
