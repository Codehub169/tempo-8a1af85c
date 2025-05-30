import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  // Destructure environment variables for Nodemailer configuration
  const {
    NODEMAILER_HOST,
    NODEMAILER_PORT,
    NODEMAILER_USER,
    NODEMAILER_PASS,
    EMAIL_FROM,
    EMAIL_TO,
  } = process.env;

  // Basic check for essential environment variables
  if (!NODEMAILER_HOST || !NODEMAILER_PORT || !NODEMAILER_USER || !NODEMAILER_PASS || !EMAIL_FROM || !EMAIL_TO) {
    console.error('Missing Nodemailer configuration in environment variables.');
    return NextResponse.json(
      { message: 'Server configuration error. Could not send email.' },
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = await request.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields (name, email, message).' },
        { status: 400 }
      );
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter object
    const transporter = nodemailer.createTransport({
      host: NODEMAILER_HOST,
      port: parseInt(NODEMAILER_PORT, 10), // Ensure port is an integer
      secure: parseInt(NODEMAILER_PORT, 10) === 465, // true for 465, false for other ports
      auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS,
      },
      // Adding timeout options for robustness
      connectionTimeout: 5000, // 5 seconds
      greetingTimeout: 5000, // 5 seconds
      socketTimeout: 10000, // 10 seconds
    });

    // Email options
    const mailOptions = {
      from: `"${name} via hueneu.com" <${EMAIL_FROM}>`, // Display name and from address
      replyTo: email, // Set reply-to to the sender's email
      to: EMAIL_TO, // Recipient email address from .env
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; border-left: 3px solid #A6A39F; padding-left: 15px; margin-left: 5px;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 0.9em; color: #666;">This message was sent from the contact form on hueneu.com.</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully! We\'ll be in touch soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    // More specific error logging for Nodemailer issues
    if (error.code === 'EENVELOPE') {
        return NextResponse.json(
            { message: 'Error with recipient/sender email addresses. Please contact support.' }, 
            { status: 500 }
        );
    }
    if (error.code === 'EAUTH') {
        return NextResponse.json(
            { message: 'Email server authentication failed. Please contact support.' }, 
            { status: 500 }
        );
    }
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
