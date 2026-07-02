"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/animations";
import type { FAQData } from "@/lib/data";

export function FAQSection({ faqs }: { faqs: FAQData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <AnimatedSection>
      <div className="w-full space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-espresso/10 rounded-xl bg-white overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between px-6 py-4 text-left text-espresso font-medium hover:text-terracotta transition-colors"
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-espresso/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
