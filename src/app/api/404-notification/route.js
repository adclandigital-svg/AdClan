import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email via Brevo SMTP API using fetch
    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Adore Real Tech",
          email: process.env.BREVO_SENDER_EMAIL || "noreply@adorerealtech.com",
        },
        to: [
          { email: process.env.BREVO_RECEIVER_EMAIL || "enquiries@adorerealtech.com" }
        ],
        subject: "New Enquiry from Website",
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#fff;padding:20px;border:1px solid #ddd;">
            <h3 style="color:#c89b5b;">New Enquiry Received</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          </div>
        `,
      }),
    });

    const data = await brevoRes.json();

    if (!brevoRes.ok) throw new Error(data.message || "Brevo API error");

    return NextResponse.json({ success: true, messageId: data.messageId });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}