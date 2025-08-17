import { z } from "zod";

export const createServiceSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(5),
  durationMinutes: z.number().int().positive(),
  price: z.number().positive(),
});

export const updateServiceSchema = createServiceSchema.partial();
