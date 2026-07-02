import Link from "next/link";
import { Camera, MapPin } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/join", label: "Join" },
  { href: "/about", label: "About" },
  { href: "/the-space", label: "The Space" },
  { href: "/our-members", label: "Our Members" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold text-cream">
              Uniqe<span className="text-terracotta">.</span>
            </Link>
            <p className="mt-4 text-cream/60 max-w-sm text-sm leading-relaxed">
              Technically it&apos;s a coworking space. Emotionally it&apos;s a
              group art project. Come make your desk your happy place.
            </p>
            <div className="mt-6 flex items-center gap-2 text-cream/60 text-sm">
              <MapPin size={16} />
              <span>123 Creative Lane, Arts District, CA 90210</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-cream mb-4">Navigate</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-terracotta-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-cream mb-4">Connect</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/60 hover:text-terracotta-light transition-colors text-sm"
            >
              <Camera size={18} />
              @uniqe_space
            </a>
            <div className="mt-6 space-y-1 text-sm text-cream/60">
              <p>hello@uniqe.space</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/40">
          <p>
            We acknowledge the Traditional Owners of the land on which we work
            and pay our respects to Elders past and present.
          </p>
          <p>&copy; 2026 Uniqe. All rights reserved. Made with chaos.</p>
        </div>
      </div>
    </footer>
  );
}
