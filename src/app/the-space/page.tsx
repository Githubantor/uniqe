import Link from "next/link";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations";
import { Hero3D } from "@/components/hero-3d";
import { DividerCactus, Airplane, Star } from "@/components/svg-illustrations";

const insideFeatures = [
  {
    num: "01",
    title: "Dog Friendly",
    desc: "Bring your furry co-worker. Waffle the office dog is waiting to make friends.",
  },
  {
    num: "02",
    title: "Meeting Room",
    desc: "Bookable spaces for when you need to look professional. Whiteboard included.",
  },
  {
    num: "03",
    title: "Secure Bike Racks",
    desc: "For the eco-warriors. We'll keep your ride safe while you change the world.",
  },
  {
    num: "04",
    title: "Full Kitchen",
    desc: "Microwave, fridge, kettle, and enough coffee to fuel a small startup.",
  },
  {
    num: "05",
    title: "Pool Table",
    desc: "For 'strategic thinking breaks.' Also for actually playing pool.",
  },
  {
    num: "06",
    title: "Communal Areas",
    desc: "Lounges, nooks, and weird chairs. Find your spot. Claim it. Defend it.",
  },
];

const outsideFeatures = [
  {
    num: "07",
    title: "24/7 Carpark",
    desc: "Secure parking with floodlights. Your car is safer here than in your driveway.",
  },
  {
    num: "08",
    title: "Nearby Bakery",
    desc: "Fresh croissants 50m away. The smell alone is worth the membership.",
  },
  {
    num: "09",
    title: "Basketball Hoop",
    desc: "Half-court out back. Winner buys lunch. Loser buys coffee. No exceptions.",
  },
  {
    num: "10",
    title: "The Creek",
    desc: "A quiet spot for lunch, thinking, or pretending to be in a rom-com montage.",
  },
  {
    num: "11",
    title: "High Street Shops",
    desc: "Everything you forgot at home is a 2-minute walk away. We've all been there.",
  },
  {
    num: "12",
    title: "Public Transport",
    desc: "Bus stop at the door. Train station 5 min walk. No car? No problem.",
  },
];

function FeatureCard({
  feature,
  index,
  section,
}: {
  feature: (typeof insideFeatures)[0];
  index: number;
  section: "inside" | "outside";
}) {
  const isReversed = index % 2 === 1;

  return (
    <StaggerItem>
      <div
        className={`flex flex-col ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8 md:gap-16`}
      >
        <div className="flex-1 w-full">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, ${
                section === "inside"
                  ? ["#CC5A4A33", "#DF9C3433", "#6B7F4E33", "#E8A87C33", "#CC5A4A33", "#6B7F4E33"][index]
                  : ["#6B7F4E33", "#E8A87C33", "#DF9C3433", "#CC5A4A33", "#6B7F4E33", "#DF9C3433"][index]
              }, #FDF6EC)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-espresso/10 text-9xl font-black">{feature.num}</span>
            </div>
          </div>
        </div>

        <div
          className={`flex-1 w-full ${
            isReversed ? "md:text-right" : "md:text-left"
          }`}
        >
          <span className="inline-block text-7xl md:text-8xl font-black text-terracotta/20 leading-none mb-2">
            {feature.num}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-espresso mb-4">
            {feature.title}
          </h3>
          <p className="text-espresso/60 text-lg leading-relaxed">
            {feature.desc}
          </p>
        </div>
      </div>
    </StaggerItem>
  );
}

export default function TheSpacePage() {
  return (
    <div>
      <Hero3D className="pt-32 pb-20 bg-gradient-to-br from-cream to-cream-dark">
        <div className="container">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-espresso leading-tight">
              The Space
            </h1>
            <p className="mt-6 text-xl text-espresso/60 max-w-xl leading-relaxed">
              More than just four walls and a WiFi signal. Here&apos;s what makes
              Uniqe feel like <em>your</em> space.
            </p>
          </AnimatedSection>
        </div>
      </Hero3D>

      <section className="py-20">
        <div className="container">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-4 mb-2">
              <Star className="w-6 h-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-espresso">
                Inside
              </h2>
            </div>
            <p className="text-espresso/60">
              Where the magic (and the WiFi) happens.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-20">
            {insideFeatures.map((feature, i) => (
              <div key={feature.num}>
                <FeatureCard feature={feature} index={i} section="inside" />
                {i < insideFeatures.length - 1 && (
                  <div className="flex justify-center mt-20">
                    <DividerCactus className="w-48 h-8 opacity-50" />
                  </div>
                )}
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-cream-dark">
        <div className="container">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-4 mb-2">
              <Airplane className="w-8 h-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-espresso">
                Outside
              </h2>
            </div>
            <p className="text-espresso/60">
              The neighborhood is part of the package.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-20">
            {outsideFeatures.map((feature, i) => (
              <div key={feature.num}>
                <FeatureCard feature={feature} index={i} section="outside" />
                {i < outsideFeatures.length - 1 && (
                  <div className="flex justify-center mt-20">
                    <DividerCactus className="w-48 h-8 opacity-50" />
                  </div>
                )}
              </div>
            ))}
          </StaggerContainer>
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
