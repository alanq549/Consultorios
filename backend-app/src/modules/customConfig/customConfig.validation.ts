import { z } from "zod";

export const updateConfigSchema = z.object({
  language: z.string().optional(),
  theme: z.string().optional(),
  layout: z.enum(["SIDEBAR", "TOPBAR"]).optional(),
  preferences: z.record(z.string(), z.any()).optional(),
  notificationsEnabled: z.boolean().optional(),
});
