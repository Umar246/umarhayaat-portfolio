// app/api/contact/route.js (Next.js 13+ /app router)
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 1) Transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g. yourname@yourdomain.com
        pass: process.env.EMAIL_PASS, // app password or OAuth token
      },
    });

    // 2) Email to site owner
    const mailOptions = {
      from: `${name} <${email}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message: ${subject}`,
      text: `
New Message Form Portfolio

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

(This is an automated notification.)
      `.trim(),
      html: `
 <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #CBACF9; border-bottom: 2px solid #CBACF9; padding-bottom: 10px;">
           
New Contact Form
Submission
         </h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;
margin: 20px 0;">
            <h1 style="color: #333; margin-top: 0;">Contact Details:</h1>
            <h2><strong>Name:</strong> ${name}</h2>
            <h2><strong>Email:</strong> ${email}</h2>
            <h2><strong>Subject:</strong> ${subject}</h2>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid
#CBACF9; margin: 20px 0;">
            <h1 style="color: #333; margin-top: 0;">Message:</h1>
            <h3 style="line-height: 1.6; color: #555;">${message}</h3>
          </div>
          <div style="text-align: center; margin-top: 30px; padding: 20px; backgroundcolor: #f0f0f0;
border-radius:
8px;">
            <p
style="margin: 0; color: #666; font-size:
14px;">
              This message was sent
from your portfolio contact
form.
           
</p>
         
</div>
       
</div>
      `,
      headers: {
        "Auto-Submitted": "auto-generated",
        Precedence: "bulk",
      },
    };

    // 3) Auto-reply to sender
    const autoReplyOptions = {
      from: `"Umar Hayaat" <${process.env.EMAIL_USER}>`,
      replyTo: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me",
      text: `
Hi ${name},

Thank you for reaching out through my portfolio website. I have received your message and will get back to you within 24 hours.

Your Message Summary:
Subject: ${subject}
Message: ${message}

Best regards,
Umar Hayaat
Contact: +923079728937

(This is an automated response; please do not reply.)
      `.trim(),
      html: `
 <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #CBACF9; border-bottom: 2px solid #CBACF9; paddingbottom:
10px;">
            Thank You for Your Message
          </h2>
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out through my portfolio website. I have received
your message and will get back to you within 24 hours.</p>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;
margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <p>In the meantime, feel free to check out my other projects or connect with
me on social media.</p>
          <p>Best regards,<br>
          <strong>Umar Hayaat</strong><br>
          Contact: +923079728937</p>
          <div style="text-align: center; margin-top: 30px; padding: 20px; backgroundcolor: #f0f0f0;
border-radius:
8px;">
            <p
style="margin: 0; color: #666; font-size:
14px;">
              This is an automated
response. Please do not
reply to this
email.
           
</p>
         
</div>
       
</div>
      `,
      headers: {
        "Auto-Submitted": "auto-generated",
        Precedence: "bulk",
      },
    };

    // 4) Send mails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
