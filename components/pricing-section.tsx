"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/ mo",
    subtitle: "Per editor",
    features: [
      "Basic Analytics Dashboard",
      "5GB Cloud Storage",
      "Email and Chat Support",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ mo",
    subtitle: "Per editor",
    features: [
      "Everything in Free Plan",
      "5GB Cloud Storage",
      "Email and Chat Support",
      "Access to Community Forum",
      "Single User Access",
      "Access to Basic Templates",
      "Mobile App Access",
      "1 Custom Report Per Month",
      "Monthly Product Updates",
      "Standard Security Features",
    ],
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Startup",
    price: "$29",
    period: "/ mo",
    subtitle: "Per editor",
    features: [
      "Everything in Pro Plan",
      "5GB Cloud Storage",
      "Email and Chat Support",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pricing that Scales with You
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Omnexia is evolving to be more than just a messaging platform. It
            supports an entire ecosystem of APIs and platforms helping developers
            and businesses innovate with AI-powered collaboration.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="relative"
            >
              <Card
                className={cn(
                  "h-full flex flex-col relative",
                  plan.popular &&
                    "border-primary shadow-lg scale-105 md:scale-105"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white border-0">
                      Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-sm">
                    {plan.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="border-t border-border pt-4 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: index * 0.15 + featureIndex * 0.05,
                        }}
                        className="flex items-start gap-3"
                      >
                        <HugeiconsIcon
                          icon={CheckmarkCircle01Icon}
                          className="size-5 text-primary shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    variant={plan.popular ? "default" : plan.buttonVariant}
                    className={cn(
                      "w-full",
                      plan.popular &&
                        "bg-background text-foreground hover:bg-muted border border-border"
                    )}
                    asChild
                  >
                    <Link href="/signup">{plan.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
