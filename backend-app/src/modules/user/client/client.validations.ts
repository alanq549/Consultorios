import { z } from "zod";

export const updateClientProfileSchema = z.object({
  name: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  phone: z.string().min(6).max(20).optional(),
    avatar: z.string().url().optional(), // ✅ ESTA ES LA CLAVE
  // avatar no lo validamos acá porque es file
});
