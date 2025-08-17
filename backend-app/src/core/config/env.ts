import dotenv from 'dotenv';
dotenv.config(); // Carga el .env en process.env

// Validación opcional pero recomendable
if (!process.env.JWT_SECRET) {
  throw new Error('Falta definir JWT_SECRET en el archivo .env');
}

export const JWT_SECRET = process.env.JWT_SECRET as string;
export const GMAIL_USER = process.env.GMAIL_USER as string;
export const GMAIL_PASS = process.env.GMAIL_PASS as string;
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
