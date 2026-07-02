"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/join", label: "Join" },
  { href: "/about", label: "About" },
  { href: "/the-space", label: "The Space" },
  { href: "/our-members", label: "Our Members" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-espresso"
        >
          Uniqe
          <span className="text-terracotta">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-espresso/80 hover:text-terracotta transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="inline-flex shrink-0 items-center justify-center rounded-full border bg-terracotta hover:bg-terracotta-dark text-white text-sm font-medium whitespace-nowrap h-9 px-5 transition-colors"
          >
            Join Us
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-espresso"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-espresso/10 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-espresso/80 hover:text-terracotta transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                className="inline-flex shrink-0 items-center justify-center rounded-full border bg-terracotta hover:bg-terracotta-dark text-white text-sm font-medium whitespace-nowrap h-9 px-5 transition-colors w-full mt-2"
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
