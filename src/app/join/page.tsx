import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations";
import { Hero3D } from "@/components/hero-3d";
import { LeadForm } from "@/components/lead-form";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cactus } from "@/components/svg-illustrations";
import { getMemberships } from "@/lib/data";

export default async function JoinPage() {
  const plans = await getMemberships();

  return (
    <div>
      <Hero3D className="pt-32 pb-20 bg-gradient-to-br from-cream to-cream-dark">
        <div className="container">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-espresso leading-tight">
              Find Your
              <br />
              <span className="text-terracotta">Perfect Desk</span>
            </h1>
            <p className="mt-6 text-xl text-espresso/60 max-w-xl">
              No commitment anxiety. No hidden fees. Just pick your vibe and
              we&apos;ll handle the rest.
            </p>
          </AnimatedSection>
        </div>
      </Hero3D>

      <section className="py-20">
        <div className="container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <StaggerItem key={plan._id}>
                <Card
                  className={`relative overflow-hidden border-2 h-full flex flex-col ${
                    plan.highlighted
                      ? "border-terracotta shadow-lg"
                      : "border-espresso/10"
                  }`}
                >
                  {plan.highlighted && (
                    <Badge className="absolute top-4 right-4 bg-terracotta text-white rounded-full">
                      Best Value
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-espresso">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-2">
                      <span className="text-4xl font-bold text-espresso">
                        {plan.price}
                      </span>
                      {plan.pricePer && (
                        <span className="text-espresso/60 text-sm ml-1">
                          {plan.pricePer}
                        </span>
                      )}
                    </div>
                    <CardDescription className="text-espresso/60 mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-espresso/70"
                        >
                          <Check size={16} className="text-olive shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a
                      href="#inquiry-form"
                      className={`inline-flex shrink-0 items-center justify-center rounded-full text-sm font-medium whitespace-nowrap h-9 px-5 transition-colors w-full ${
                        plan.highlighted
                          ? "bg-terracotta hover:bg-terracotta-dark text-white"
                          : "bg-espresso hover:bg-espresso-light text-cream"
                      }`}
                    >
                      {plan.name === "Private Studio" ? "Contact Us" : "Get Started"}
                    </a>
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="inquiry-form" className="py-20 bg-cream-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <Cactus className="w-24 h-32 mb-6 opacity-30" />
              <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">
                Ready to Join?
              </h2>
              <p className="text-espresso/60 text-lg leading-relaxed">
                Fill out the form and we&apos;ll get back to you faster than
                you can say &ldquo;ergonomic chair.&rdquo; No pressure, just
                good vibes and a tour whenever you&apos;re ready.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-espresso mb-6">
                  Tell Us About Yourself
                </h3>
                <LeadForm showMembership />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
