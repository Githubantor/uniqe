"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { MemberData } from "@/lib/data";

export function TestimonialCarousel({ testimonials }: { testimonials: MemberData[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!testimonials.length) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, testimonials.length]);

  if (!testimonials.length) {
    return (
      <div className="bg-cream-dark rounded-2xl p-8 md:p-12 text-center">
        <Quote className="mx-auto text-terracotta/20" size={60} />
        <p className="mt-4 text-espresso/60">No testimonials yet. Check back soon!</p>
      </div>
    );
  }

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="relative bg-cream-dark rounded-2xl p-8 md:p-12 overflow-hidden">
      <Quote className="absolute top-4 left-4 text-terracotta/20" size={60} />
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto min-h-[200px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <p className="text-lg md:text-xl text-espresso/80 leading-relaxed italic mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <Avatar className="border-2 border-terracotta">
                  <AvatarFallback className="bg-terracotta text-white text-sm">
                    {t.initials}
                  </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="font-semibold text-espresso">{t.name}</p>
                <p className="text-sm text-espresso/50">
                  Member since {t.joinYear} &middot; {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-terracotta w-6" : "bg-espresso/20 hover:bg-espresso/40"
            }`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm text-espresso/60 hover:text-terracotta transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm text-espresso/60 hover:text-terracotta transition-all"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
