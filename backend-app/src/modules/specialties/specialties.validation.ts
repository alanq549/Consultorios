import { z } from "zod";

export const createSpecialtySchema = z.object({
  name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre no debe superar los 50 caracteres")
    .regex(/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/, "El nombre solo debe contener letras y espacios")
    .refine(val => val.trim().length > 0, {
      message: "El nombre no puede estar vacío o solo contener espacios",
    }),

  description: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(300, "La descripción no debe superar los 300 caracteres")
    .refine(val => val.trim().length > 0, {
      message: "La descripción no puede estar vacía",
    })
    .optional(), // opcional, pero si está, que tenga sentido
});

export type CreateSpecialtyDTO = z.infer<typeof createSpecialtySchema>;
