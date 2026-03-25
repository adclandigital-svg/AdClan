import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();


    const { notFoundUrl, referrer, userAgent, timestamp } = body;

    if (!notFoundUrl) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }


    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Adclan 404 Monitor",
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [{ email: process.env.BREVO_RECEIVER_EMAIL }],
        subject: "404 Error — Page Not Found",


        htmlContent: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;background:#fff;border:1px solid #000;">
            <div style="background:#dc2626;color:#fff;padding:26px;text-align:center;">
              <h2 style="margin:0;letter-spacing:1px;">404 PAGE NOT FOUND</h2>
            </div>

            <div style="padding:28px;color:#000;line-height:1.7;">
              <p><strong>URL Accessed:</strong> ${notFoundUrl}</p>
              <p><strong>Referrer:</strong> ${referrer || "Direct/Unknown"}</p>
              <p><strong>User Agent:</strong><br/><small>${userAgent || "Unknown"}</small></p>
              <p><strong>Timestamp:</strong> ${timestamp || "N/A"}</p>
            </div>

            <div style="border-top:1px solid #000;padding:16px;text-align:center;font-size:12px;">
              <p style="margin:0;">Adclan 404 Monitor © 2026</p>
              <p style="margin:0;">Automated notification · Review and fix broken links</p>
            </div>
          </div>
        `,
      }),
    });

    const data = await brevoRes.json();

    if (!brevoRes.ok) throw new Error(data.message || "Brevo API error");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("404 Notification Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}