"use client";

import { motion, useInView } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FlashIcon,
  Settings01Icon,
  LockIcon,
  Edit01Icon,
  Settings02Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef } from "react";

const features = [
  {
    icon: FlashIcon,
    title: "Fast",
    description:
      "Lightning-fast messaging and real-time collaboration that keeps your team in sync without delays.",
  },
  {
    icon: Settings01Icon,
    title: "Powerful",
    description:
      "Advanced features and integrations that scale with your team's growing needs and workflows.",
  },
  {
    icon: LockIcon,
    title: "Secure",
    description:
      "Enterprise-grade security with end-to-end encryption to keep your team's conversations private.",
  },
  {
    icon: Edit01Icon,
    title: "Customizable",
    description:
      "Tailor your workspace with customizable channels, themes, and workflows that fit your team.",
  },
  {
    icon: Settings02Icon,
    title: "Control",
    description:
      "Complete control over your workspace with granular permissions and administrative tools.",
  },
  {
    icon: SparklesIcon,
    title: "Built for AI",
    description:
      "AI-powered summaries, intelligent chat fixes, and smart automation built right into the platform.",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
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
            The foundation for{" "}
            <span className="text-primary">creative teams</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Omnexia is evolving to be more than just a messaging platform. It
            supports an entire ecosystem of APIs and tools helping developers
            and businesses innovate with AI-powered collaboration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border">
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <HugeiconsIcon
                        icon={feature.icon}
                        className="size-6 text-primary"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
