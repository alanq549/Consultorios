import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Email inválido")
    .refine(val => val.length <= 255, "Email demasiado largo"),

  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(128, "La contraseña no debe superar los 128 caracteres")
    .refine(val => val.trim().length === val.length, "La contraseña no puede tener espacios al inicio o final")
    .refine(val => /[a-zA-Z]/.test(val), "La contraseña debe tener al menos una letra")
    .refine(val => /[0-9]/.test(val), "La contraseña debe tener al menos un número"),
});

export type LoginDTO = z.infer<typeof loginSchema>;

  const urlOrEmpty = z.string().url().or(z.literal("")).optional();

const professionalProfileSchema = z.object({

  specialtyId: z.number().int("Especialidad inválida").positive("Especialidad inválida"),
  description: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(300, "La descripción no debe superar los 300 caracteres"),
  certificates: z.array(z.string()).optional(),

socialLinks: z
  .object({
    portfolio: urlOrEmpty,
    whatsApp: urlOrEmpty,
    Instagram: urlOrEmpty,
    Facebook: urlOrEmpty,
    Telegram: urlOrEmpty,
  })
  .optional(),});

 export const registerSchema = z .object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    lastName: z.string().optional().default(""),
    phone: z.string().optional().default(""),
    avatar: z.string().url("Avatar debe ser una URL válida").optional().default(""),
    
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Email inválido")
      .max(255, "Email demasiado largo"),
      
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(128, "La contraseña no debe superar los 128 caracteres")
      .refine((val) => val.trim().length === val.length, "La contraseña no puede tener espacios al inicio o final")
      .refine((val) => /[a-zA-Z]/.test(val), "La contraseña debe tener al menos una letra")
      .refine((val) => /[0-9]/.test(val), "La contraseña debe tener al menos un número"),
      
    isProfessional: z.boolean(),

    professionalProfile: z.union([professionalProfileSchema, z.undefined()]).optional(),
  })
  .refine((data) => {
    if (data.isProfessional) {
      return data.professionalProfile !== undefined;
    }
    return true;
  }, {
    message: "El perfil profesional es obligatorio para usuarios profesionales",
    path: ["professionalProfile"],
  });


  export type RegisterDTO = z.infer<typeof registerSchema>;
