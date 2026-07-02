"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export function CTADrawer() {
  const [open, setOpen] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTrigger(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showTrigger && !open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-terracotta text-white px-5 py-3 rounded-full shadow-lg hover:bg-terracotta-dark transition-colors"
          >
            <MessageCircle size={20} />
            <span className="text-sm font-medium">Join Uniqe</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 right-0 z-50 w-full max-w-md bg-cream rounded-t-2xl md:rounded-2xl md:bottom-6 md:right-6 md:max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-espresso">
                      Join Uniqe
                    </h3>
                    <p className="text-sm text-espresso/60">
                      Your dream desk is a form away.
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 text-espresso/60 hover:text-espresso"
                  >
                    <X size={20} />
                  </button>
                </div>
                <LeadForm onSuccess={() => setOpen(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
