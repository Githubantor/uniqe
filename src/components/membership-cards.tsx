"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import type { MembershipPlan } from "@/lib/data";

export function MembershipCards({ plans }: { plans: MembershipPlan[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <StaggerItem key={plan.name}>
          <Card
            className={`relative overflow-hidden border-2 h-full flex flex-col ${
              plan.highlighted
                ? "border-terracotta shadow-lg"
                : "border-espresso/10"
            }`}
          >
            {plan.highlighted && (
              <Badge className="absolute top-4 right-4 bg-terracotta text-white rounded-full">
                Popular
              </Badge>
            )}
            <div className="h-48 bg-olive/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-mustard/20" />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-espresso">
                {plan.name}
              </CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold text-espresso">
                  {plan.price}
                </span>
                  <span className="text-espresso/60 text-sm ml-1">
                    {plan.pricePer}
                  </span>
              </div>
              <CardDescription className="text-espresso/60 mt-2">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-espresso/70">
                    <Check size={16} className="text-olive shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <a
                href="/join"
                className={`inline-flex shrink-0 items-center justify-center rounded-full text-sm font-medium whitespace-nowrap h-9 px-5 transition-colors w-full ${
                  plan.highlighted
                    ? "bg-terracotta hover:bg-terracotta-dark text-white"
                    : "bg-espresso hover:bg-espresso-light text-cream"
                }`}
              >
                Enquire Now
              </a>
            </CardFooter>
          </Card>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
