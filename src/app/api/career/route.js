export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const resumeFile = formData.get("resume");

    if (!name || !email || !resumeFile) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert file → base64
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Resume = buffer.toString("base64");

    // Send email via Brevo
    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Adclan Careers",
          email: "9f4d47001@smtp-brevo.com"
        },
        to: [
          { email: process.env.BREVO_RECEIVER }
        ],
        subject: "New Job Application — Adclan",
        htmlContent: `
          <h2>New Job Application</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "N/A"}</p>
          <p><b>Message:</b><br/>${message || "N/A"}</p>
        `,
        attachment: [
          {
            name: resumeFile.name,
            content: base64Resume
          }
        ]
      }),
    });

    const data = await brevoRes.json();
    console.log(data)

    if (!brevoRes.ok) {
      console.error(data);
      throw new Error(data.message || "Brevo API error");
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
