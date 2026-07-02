"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitNewsletter } from "@/app/actions/newsletter";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-terracotta hover:bg-terracotta-dark text-white rounded-full shrink-0"
    >
      {pending ? "Sending..." : "Subscribe"}
    </Button>
  );
}

export function NewsletterForm() {
  const ref = useRef<HTMLFormElement>(null);

  async function action(formData: FormData) {
    const result = await submitNewsletter(formData);
    if (result.success) {
      ref.current?.reset();
      alert(result.message);
    }
  }

  return (
    <form
      ref={ref}
      action={action}
      className="flex gap-2 max-w-md mx-auto"
    >
      <Input
        type="email"
        name="email"
        placeholder="your@email.com"
        required
        className="border-espresso/20 bg-white h-11"
      />
      <SubmitBtn />
    </form>
  );
}
