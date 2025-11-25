import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(1, { message: "El nombre es obligatorio" })
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  
  email: z.string()
    .min(1, { message: "El email es obligatorio" })
    .email({ message: "Debe ser un email válido" }),
  
  subject: z.string()
    .min(1, { message: "Por favor, selecciona un asunto" }),
  
  message: z.string()
    .min(1, { message: "El mensaje es obligatorio" })
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(500, { message: "El mensaje no puede exceder 500 caracteres" })
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;