import { z } from "zod";
import { BUSINESS_TYPES } from "@/lib/constants";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name"),
  businessType: z.enum(
    BUSINESS_TYPES as unknown as [string, ...string[]],
  ),
  whatsapp: z.string().trim().min(8, "Enter a valid WhatsApp number"),
  email: z.string().trim().email("Enter a valid email"),
  challenge: z.string().trim().min(10, "Share a bit more detail (10+ characters)"),
});

export type ContactPayload = z.infer<typeof contactSchema>;
