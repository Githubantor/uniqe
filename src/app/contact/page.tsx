import { Phone, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/animations";
import { Hero3D } from "@/components/hero-3d";
import { LeadForm } from "@/components/lead-form";
import { FAQSection } from "@/components/faq-section";
import { Flamingo } from "@/components/svg-illustrations";
import Link from "next/link";
import { getFAQs } from "@/lib/data";

export default async function ContactPage() {
  const faqs = await getFAQs();

  return (
    <div>
      <Hero3D className="pt-32 pb-20 bg-gradient-to-br from-cream to-cream-dark">
        <div className="container">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-espresso leading-tight">
              Let&apos;s Start
              <br />
              Something Beautiful
            </h1>
            <p className="mt-6 text-xl text-espresso/60 max-w-xl">
              Got a question? A brilliant idea? A mediocre joke you need to
              share? We&apos;re here for all of it.
            </p>
          </AnimatedSection>
        </div>
      </Hero3D>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-terracotta" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso mb-1">Visit Us</h3>
                    <p className="text-espresso/60">
                      123 Creative Lane
                      <br />
                      Arts District, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                    <Phone className="text-terracotta" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso mb-1">Call Us</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-espresso/60 hover:text-terracotta transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                    <Mail className="text-terracotta" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso mb-1">Email Us</h3>
                    <a
                      href="mailto:hello@uniqe.space"
                      className="text-espresso/60 hover:text-terracotta transition-colors"
                    >
                      hello@uniqe.space
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <Flamingo className="w-20 h-20 opacity-40" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-cream-dark rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-espresso mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-espresso/60 mb-6">
                  We reply faster than you can say &ldquo;hot desking.&rdquo;
                </p>
                <LeadForm showMembership={false} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-espresso/60">
                The answers you need. The questions you didn&apos;t know you had.
              </p>
            </AnimatedSection>
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-espresso text-cream text-center">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Come Say Hi
            </h2>
            <p className="text-xl text-cream/70 max-w-xl mx-auto mb-8">
              Seeing is believing, baby. Book a free day trial and fall in love
              with your new office.
            </p>
            <Link
              href="/join"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-lg font-medium whitespace-nowrap h-12 px-8 transition-colors"
            >
              Claim Your Free Day
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
