"use server";

import { z } from "zod";
import { connectToDatabase } from "@/lib/db";
import { Contact } from "@/lib/models/Contact";
import { updateTag } from "next/cache";

const membershipSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  membershipType: z.string().min(1, "Please select a membership type"),
  message: z.string().optional(),
});

export async function submitMembershipInquiry(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    membershipType: formData.get("membershipType"),
    message: formData.get("message"),
  };

  const validated = membershipSchema.safeParse(raw);
  if (!validated.success) {
    return { error: validated.error.flatten().fieldErrors };
  }

  try {
    await connectToDatabase();
    await Contact.create({
      ...validated.data,
      subject: `Membership Inquiry - ${validated.data.membershipType}`,
      message: validated.data.message || `Interested in ${validated.data.membershipType} membership.`,
    });
    updateTag("admin-stats");
    return { success: true, message: "Sweet! We've received your inquiry and will get back to you ASAP." };
  } catch (e) {
    console.error("Failed to save membership inquiry:", e);
    return { error: { _form: ["Something went wrong. Please try again."] } };
  }
}
