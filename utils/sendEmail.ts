// utils/sendEmail.ts
import nodemailer from 'nodemailer';

const sendEmail = async (to: string, subject: string, text: string) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Remplacez par votre SMTP
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'user@example.com', // Remplacez par votre email
      pass: 'password', // Remplacez par votre mot de passe
    },
  });

  let info = await transporter.sendMail({
    from: '"Car Show" <noreply@carshow.com>',
    to,
    subject,
    text,
  });

  console.log('Message sent: %s', info.messageId);
};

export default sendEmail;
