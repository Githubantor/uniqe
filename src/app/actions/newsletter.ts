"use server";

import { z } from "zod";
import { connectToDatabase } from "@/lib/db";
import { Contact } from "@/lib/models/Contact";
import { updateTag } from "next/cache";

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email, smarty."),
});

export async function submitNewsletter(formData: FormData) {
  const email = formData.get("email");
  const validated = newsletterSchema.safeParse({ email });
  if (!validated.success) {
    return { error: validated.error.flatten().fieldErrors };
  }

  try {
    await connectToDatabase();
    await Contact.create({
      name: "Newsletter Subscriber",
      email: validated.data.email,
      subject: "Newsletter Signup",
      message: "Newsletter subscription",
    });
    updateTag("admin-stats");
    return { success: true, message: "You're in. No spam, just good vibes." };
  } catch (e) {
    console.error("Newsletter signup failed:", e);
    return { error: { _form: ["Something broke. Try again?"] } };
  }
}
