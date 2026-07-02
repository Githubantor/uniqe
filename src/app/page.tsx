import Link from "next/link";
import { MembershipCards } from "@/components/membership-cards";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { PhotoGallery } from "@/components/photo-gallery";
import {
  AnimatedSection,
  FloatingElement,
} from "@/components/animations";
import { Hero3D } from "@/components/hero-3d";
import { Cactus, Flamingo, PoolFloat, Star } from "@/components/svg-illustrations";
import { NewsletterForm } from "@/components/newsletter-form";
import { getMemberships, getMembers } from "@/lib/data";

export default async function Home() {
  const [plans, testimonials] = await Promise.all([
    getMemberships(),
    getMembers(),
  ]);

  return (
    <div>
      <Hero3D className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-espresso/90 to-espresso">
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-mustard/10" />
        <div className="container relative z-10 pt-20">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight">
              Your Dream
              <br />
              <span className="text-terracotta-light">Office Awaits</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-cream/70 max-w-xl leading-relaxed">
              Technically it&apos;s a coworking space. Emotionally it&apos;s a
              group art project. Come make your desk your happy place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/join"
                className="inline-flex shrink-0 items-center justify-center rounded-full border bg-terracotta hover:bg-terracotta-dark text-white text-base font-medium whitespace-nowrap h-11 px-6 transition-colors"
              >
                Join the Club
              </Link>
              <Link
                href="/the-space"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-cream/30 text-cream hover:bg-cream/10 text-base font-medium whitespace-nowrap h-11 px-6 transition-colors"
              >
                Explore the Space
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <FloatingElement className="absolute bottom-10 right-10 hidden md:block">
          <Cactus className="w-20 h-28 opacity-60" />
        </FloatingElement>
        <FloatingElement className="absolute top-20 right-20 hidden lg:block" duration={8}>
          <PoolFloat className="w-32 h-20 opacity-40" />
        </FloatingElement>
      </Hero3D>

      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <Star className="w-8 h-8 mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-espresso mb-4">
              Not Your Average
              <br />
              Office Space
            </h2>
            <p className="text-espresso/60 text-lg leading-relaxed">
              We took everything boring about work and threw it out the window.
              What&apos;s left? Great people, strong coffee, and a space that
              actually makes you want to show up.
            </p>
          </AnimatedSection>
          <MembershipCards plans={plans} />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream-dark">
        <div className="container">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-espresso mb-4">
              Real People, Real Quotes
            </h2>
            <p className="text-espresso/60">
              Don&apos;t take our word for it. Take theirs.
            </p>
          </AnimatedSection>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-espresso mb-4">
              A Peek Inside
            </h2>
            <p className="text-espresso/60">
              Warning: May cause spontaneous desk envy.
            </p>
          </AnimatedSection>
          <PhotoGallery />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-espresso text-cream relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <Flamingo className="w-16 h-16 mx-auto mb-6 opacity-60" />
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
        <FloatingElement className="absolute bottom-0 left-0 opacity-20" duration={10}>
          <Cactus className="w-32 h-40" />
        </FloatingElement>
      </section>

      <section className="py-20 bg-cream-dark">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <AnimatedSection>
              <h3 className="text-2xl font-bold text-espresso mb-4">
                Stay in the Loop
              </h3>
              <p className="text-espresso/60 mb-8">
                Join the chaos. Emails weekly. Actually worth reading.
              </p>
              <NewsletterForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
