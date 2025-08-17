
import { randomBytes } from "crypto";

export const generateResetToken = () => {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutos
  return { token, expiresAt };
};
export const isTokenExpired = (expiresAt: Date) => {
  return new Date() > expiresAt;
};