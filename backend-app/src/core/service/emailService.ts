// services/emailService.ts
import nodemailer from "nodemailer";
import { FRONTEND_URL } from "../config/env";
import ejs from "ejs";
import path from "path";
import { transporter } from "../lib/email";

export const sendVerificationEmail = async (email: string, code: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.GMAIL_USER}`,
      pass: `${process.env.GMAIL_PASS}`,
    },
  });

const verificationLink = `${FRONTEND_URL}/verify?code=${code}`;

  await transporter.sendMail({
    from: `"Tu App" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Verifica tu cuenta",
    html: `<h1>¡Gracias por registrarte!</h1>
           <p>Haz clic en el siguiente enlace para verificar tu cuenta:</p>
           <a href="${verificationLink}">${verificationLink}</a>
           <p>Este enlace expirará en 10 minutos.</p>`,
  });
};


export const sendTemplateEmail = async ({
  to,
  subject,
  templateName,
  templateData,
}: {
  to: string;
  subject: string;
  templateName: string;
  templateData: Record<string, any>;
}) => {
  const filePath = path.join(__dirname, `../../templates/${templateName}.ejs`);
  const html = await ejs.renderFile(filePath, templateData);

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html,
  });
};

