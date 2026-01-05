export async function POST(req) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Adclan Contact",
          email: "9f4d47001@smtp-brevo.com",
        },
        to: [{ email: process.env.BREVO_RECEIVER }],
        replyTo: { email },
        subject: "New Contact Form Lead",
        htmlContent: `
          <h3>New Contact Lead</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Company:</b> ${company || "N/A"}</p>
          <p><b>Message:</b><br/>${message}</p>
        `,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(data.message || "Brevo API error");

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
