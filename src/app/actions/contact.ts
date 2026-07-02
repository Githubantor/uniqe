"use server";

import { z } from "zod";
import { connectToDatabase } from "@/lib/db";
import { Contact } from "@/lib/models/Contact";
import { updateTag } from "next/cache";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContact(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const validated = contactSchema.safeParse(raw);
  if (!validated.success) {
    return { error: validated.error.flatten().fieldErrors };
  }

  try {
    await connectToDatabase();
    await Contact.create(validated.data);
    updateTag("admin-stats");
    return { success: true, message: "Thanks for reaching out! We'll be in touch soon." };
  } catch (e) {
    console.error("Failed to save contact:", e);
    return { error: { _form: ["Something went wrong. Please try again."] } };
  }
}
