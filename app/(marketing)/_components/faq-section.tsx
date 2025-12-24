"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock01Icon,
  Document,
  TruckIcon,
  GlobeIcon,
  Package01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

const faqs = [
  {
    icon: Clock01Icon,
    question: "What are your business hours?",
    answer:
      "Our support team is available 24/7 to assist you with any questions or issues. We provide round-the-clock customer support through email, chat, and our community forum. For urgent matters, premium plan users have access to priority support channels.",
  },
  {
    icon: Document,
    question: "How do subscription payments work?",
    answer:
      "Subscriptions are billed monthly or annually, depending on your chosen plan. You can upgrade, downgrade, or cancel your subscription at any time from your account settings. All payments are processed securely, and you'll receive email notifications for all billing activities. Annual plans come with a 20% discount compared to monthly billing.",
  },
  {
    icon: TruckIcon,
    question: "Can I expedite my setup process?",
    answer:
      "Yes! We offer priority onboarding for Pro and Startup plan users, which includes dedicated setup assistance, custom configuration, and migration support. Free plan users can access our comprehensive documentation and community resources to get started quickly.",
  },
  {
    icon: GlobeIcon,
    question: "Do you offer localized support?",
    answer:
      "Yes, we provide support in multiple languages including English, Spanish, French, German, and Japanese. Our AI-powered features also support multiple languages, making it easy for global teams to collaborate effectively. Localized documentation and community forums are available for major languages.",
  },
  {
    icon: Package01Icon,
    question: "How do I track my usage and analytics?",
    answer:
      "You can track your team's usage, analytics, and performance metrics directly from your dashboard. All plans include basic analytics, while Pro and Startup plans offer advanced reporting, custom reports, and API access for deeper insights into your team's collaboration patterns.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/contact"
                className="font-semibold text-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                Contact our customer support team
              </Link>
            </p>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-4 bg-card"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4 flex-1 text-left">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <HugeiconsIcon
                            icon={faq.icon}
                            className="size-5 text-primary"
                          />
                        </div>
                        <span className="font-medium text-foreground">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pl-14">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
