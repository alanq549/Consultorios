import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import ejs from "ejs";

export const transporter = nodemailer.createTransport({
  service: "gmail", // o el servicio que uses
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

type TemplateType = "confirmAppointment" | "cancelAppointment" | "verifyToken" | "custom";

interface EmailOptions {
  to: string;
  subject: string;
  templateType: TemplateType;
  templateData: Record<string, any>;
}

export const sendEmail = async ({ to, subject, templateType, templateData }: EmailOptions) => {
  try {
    const templatePath = path.join(__dirname, "..", "templates", `${templateType}.ejs`);
    const template = fs.readFileSync(templatePath, "utf-8");
    const html = ejs.render(template, templateData);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email enviado a ${to}`);
  } catch (error) {
    console.error("Error enviando correo:", error);
    throw error;
  }
};
