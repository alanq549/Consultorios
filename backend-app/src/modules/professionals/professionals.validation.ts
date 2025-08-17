import { z } from "zod";

export const updateProfessionalProfileSchema = z.object({
  name: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  phone: z.string().optional(),
  avatar: z.string().optional(),
  description: z.string().optional(),
  specialtyId: z.number().optional(),
  socialLinks: z.record(z.string(), z.string()).optional(), // por si mandás un objeto tipo { facebook: "url", linkedin: "url" }
 certificates: z.array(z.string()).optional(), // <- AGREGADO

});
