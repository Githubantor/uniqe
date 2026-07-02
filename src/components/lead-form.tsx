"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitMembershipInquiry } from "@/app/actions/membership";
import { submitContact } from "@/app/actions/contact";

function SubmitButton({ label = "Send Inquiry" }: { label?: string }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-full"
    >
      {pending ? "Sending..." : label}
    </Button>
  );
}

export function LeadForm({
  showMembership = true,
  onSuccess,
}: {
  showMembership?: boolean;
  onSuccess?: () => void;
}) {
  const ref = useRef<HTMLFormElement>(null);

  async function action(formData: FormData) {
    const result = showMembership
      ? await submitMembershipInquiry(formData)
      : await submitContact(formData);
    if (result.success) {
      ref.current?.reset();
      onSuccess?.();
      alert(result.message);
    }
  }

  return (
    <form ref={ref} action={action} className="space-y-4">
      {showMembership && (
        <div className="space-y-2">
          <Label htmlFor="membershipType" className="text-espresso">
            Membership Type
          </Label>
          <select
            name="membershipType"
            id="membershipType"
            required
            className="w-full h-10 px-3 rounded-lg border border-espresso/20 bg-white text-espresso text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            <option value="">Select a plan</option>
            <option value="Hot Desking">Hot Desking — $60/wk</option>
            <option value="Permanent Desk">Permanent Desk — $110/wk</option>
            <option value="Private Studio">Private Studio — Contact us</option>
          </select>
        </div>
      )}

      {!showMembership && (
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-espresso">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder="What's on your mind?"
            required
            className="border-espresso/20"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name" className="text-espresso">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="border-espresso/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-espresso">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          className="border-espresso/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-espresso">
          Phone
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your number"
          className="border-espresso/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-espresso">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us what you're after..."
          rows={3}
          className="border-espresso/20"
        />
      </div>

      <SubmitButton label={showMembership ? "Send Inquiry" : "Send Message"} />
    </form>
  );
}
