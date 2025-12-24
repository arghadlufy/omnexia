"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Jonathan Yombo",
    role: "Software Engineer",
    quote:
      "Omnexia is really extraordinary and very practical, no need to break your head. A real gold mine for team collaboration.",
    avatar: "JY",
  },
  {
    name: "Shekinah Tshiokufila",
    role: "Senior Software Engineer",
    quote:
      "Omnexia is redefining the standard of team collaboration, with AI-powered features that provide an easy and efficient way for teams who love productivity but may lack the time to implement it. The platform's intuitive interface combined with powerful automation capabilities has transformed how we work. I can only recommend this incredible platform to any team looking to enhance their collaboration.",
    avatar: "ST",
  },
  {
    name: "Eric Ampire",
    role: "Mobile Engineer at @TechNews",
    quote:
      "Omnexia is the perfect solution for anyone who wants to create a beautiful and functional team workspace without any technical experience. The platform is easy to use, customizable, and responsive, and the support team is always available to help.",
    avatar: "EA",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    quote:
      "The AI summaries feature has completely transformed how our team reviews conversations.",
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO at StartupCo",
    quote:
      "Omnexia's intelligent chat fixes and automation have streamlined our workflow significantly. It's like having an AI assistant that understands our team's needs. The real-time collaboration features are outstanding, and the security measures give us complete confidence in handling sensitive information.",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Team Lead",
    quote:
      "The platform's security features give us peace of mind.",
    avatar: "EW",
  },
  {
    name: "David Kim",
    role: "Developer Advocate",
    quote:
      "As someone who works with multiple teams, Omnexia's control and permission features are exactly what I needed. Highly recommend for distributed teams. The API integrations are seamless, and the developer documentation is comprehensive.",
    avatar: "DK",
  },
  {
    name: "Lisa Anderson",
    role: "Operations Manager",
    quote:
      "The real-time collaboration features combined with AI-powered insights make Omnexia stand out from other platforms.",
    avatar: "LA",
  },
  {
    name: "James Wilson",
    role: "Engineering Director",
    quote:
      "Omnexia's API ecosystem and platform integrations have made it easy to connect with our existing tools. The developer experience is excellent, and the customization options allow us to build exactly what we need. Our engineering team has seen a 40% increase in productivity since switching.",
    avatar: "JW",
  },
  {
    name: "Maria Garcia",
    role: "Community Manager",
    quote:
      "The community features and forum access in the Pro plan have been invaluable.",
    avatar: "MG",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
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
            Loved by the Community
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground italic max-w-3xl mx-auto">
            See what our users are saying about their experience with Omnexia's
            AI-powered collaboration platform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {testimonials.map((testimonial, index) => {
            const isLastInRowTablet = (index + 1) % 2 === 0;
            const isLastInRowDesktop = (index + 1) % 3 === 0;
            const totalRows = Math.ceil(testimonials.length / 3);
            const currentRow = Math.floor(index / 3);
            const isLastRow = currentRow === totalRows - 1;
            const itemsInLastRow = testimonials.length % 3 || 3;
            const isLastItem = index === testimonials.length - 1;
            
            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={cn(
                  "border-r border-b border-border",
                  // Mobile: no right border (single column)
                  "border-r-0",
                  // Tablet: right border except last in row
                  isLastInRowTablet && "md:border-r-0",
                  // Desktop: right border except last in row
                  isLastInRowDesktop && "lg:border-r-0",
                  // Remove bottom border for last row items
                  isLastRow && index >= testimonials.length - itemsInLastRow && "border-b-0"
                )}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 rounded-none h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {testimonial.name}
                      </h3>
                      <CardDescription className="text-sm truncate">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
