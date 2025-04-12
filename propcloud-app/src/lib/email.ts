import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  body: string;
}

export async function sendEmail({ to, subject, body }: EmailOptions): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Replace with your email service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: `${to}, contact@propcloud.io`, // Add contact@propcloud.io to recipients
    subject,
    text: body,
  });
}