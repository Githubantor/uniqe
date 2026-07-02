import Link from "next/link";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
} from "@/components/animations";
import { Hero3D } from "@/components/hero-3d";
import {
  Cactus,
  Flamingo,
  RetroPhone,
  Star,
} from "@/components/svg-illustrations";

const values = [
  {
    icon: "🎨",
    title: "Creativity First",
    desc: "We believe the best ideas come from spaces that inspire. Every corner of Uniqe is designed to spark something.",
  },
  {
    icon: "🤝",
    title: "Community Over Competition",
    desc: "Your success is our success. We celebrate wins, share skills, and actually know each other's names.",
  },
  {
    icon: "🌿",
    title: "Low Pressure, High Vibe",
    desc: "Work should feel good. No stuffy dress codes, no awkward silence, no corporate nonsense.",
  },
  {
    icon: "☕",
    title: "Coffee Is a Human Right",
    desc: "Great coffee, always available. It's not a perk. It's a fundamental pillar of productivity.",
  },
];

const timeline = [
  { year: "2021", event: "The dream was born on a napkin at a dive bar." },
  { year: "2022", event: "Found the perfect warehouse. Renovations began. So many IKEA trips." },
  { year: "2023", event: "Opened our doors. First member walked in. We cried. They stayed." },
  { year: "2024", event: "Expanded to full capacity. Added the basketball hoop. Became a real thing." },
  { year: "2025", event: "Won 'Best Place to Procrastinate Productively' — we made that up but it counts." },
  { year: "2026", event: "Still growing. Still caffeinated. Still the same weird, wonderful vibe." },
];

export default function AboutPage() {
  return (
    <div>
      <Hero3D className="pt-32 pb-20 bg-gradient-to-br from-cream to-cream-dark relative overflow-hidden">
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-espresso leading-tight">
              The Story of
              <br />
              <span className="text-terracotta">Uniqe</span>
            </h1>
            <p className="mt-6 text-xl text-espresso/60 max-w-xl">
              It started with a simple question: why do offices have to be so
              boring? We haven&apos;t found a good answer, so we built our own.
            </p>
          </AnimatedSection>
        </div>
        <FloatingElement className="absolute right-10 top-32 hidden lg:block">
          <RetroPhone className="w-20 h-28 opacity-30" />
        </FloatingElement>
      </Hero3D>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-terracotta/20 to-mustard/20 flex items-center justify-center">
                <Cactus className="w-32 h-40 opacity-40" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-6">
                Hey, We&apos;re Jordan
              </h2>
              <div className="space-y-4 text-espresso/70 leading-relaxed">
                <p>
                  I started Uniqe because I was tired of working from my
                  kitchen table, surrounded by unwashed dishes and existential
                  dread.
                </p>
                <p>
                  I wanted a space that felt like a second home — but with
                  better WiFi, actual coffee, and people who wouldn&apos;t judge
                  me for wearing slippers to a meeting.
                </p>
                <p>
                  What started as a personal mission became a community. Today,
                  Uniqe is home to freelancers, founders, artists, and the
                  occasional person who just needs a quiet place to cry
                  productively.
                </p>
                <p className="font-semibold text-espresso">
                  Welcome to the family. Slippers optional.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-dark">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <Star className="w-8 h-8 mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-espresso mb-4">
              What We Stand For
            </h2>
            <p className="text-espresso/60 max-w-xl mx-auto">
              Four promises we make to every member. No fine print.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-white rounded-2xl p-8 border border-espresso/5 h-full">
                  <span className="text-4xl">{value.icon}</span>
                  <h3 className="text-xl font-bold text-espresso mt-4 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-espresso/60 leading-relaxed">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <Flamingo className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h2 className="text-3xl md:text-5xl font-bold text-espresso mb-4">
              The Journey
            </h2>
            <p className="text-espresso/60">
              From a napkin sketch to a thriving community.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="space-y-0">
              {timeline.map((item, i) => (
                <StaggerItem key={item.year}>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {item.year.slice(2)}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-0.5 flex-1 bg-terracotta/20 my-2" />
                      )}
                    </div>
                    <div className="pb-10">
                      <span className="text-sm font-semibold text-terracotta">
                        {item.year}
                      </span>
                      <p className="text-espresso/70 mt-1">{item.event}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
