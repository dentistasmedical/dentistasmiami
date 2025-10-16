import { z } from "zod";

// Contact form validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "El nombre solo puede contener letras"),
  
  email: z
    .string()
    .email("Email inválido")
    .max(255, "Email demasiado largo"),
  
  phone: z
    .string()
    .regex(/^[\d\s\-\(\)\+]+$/, "Teléfono inválido")
    .min(10, "Teléfono debe tener al menos 10 dígitos")
    .max(20, "Teléfono demasiado largo")
    .optional(),
  
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje es demasiado largo"),
  
  // Honeypot field (security against bots)
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Search/filter validation
export const searchParamsSchema = z.object({
  q: z.string().max(100).optional(),
  neighborhood: z.string().max(50).optional(),
  insurance: z.enum(["medicaid", "private", "none"]).optional(),
  specialty: z.string().max(50).optional(),
});

export type SearchParams = z.infer<typeof searchParamsSchema>;