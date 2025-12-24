"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: "1200",
    prefix: "+",
    suffix: "",
    label: "Stars on GitHub",
  },
  {
    value: "22",
    prefix: "",
    suffix: " Million",
    label: "Active Users",
  },
  {
    value: "500",
    prefix: "+",
    suffix: "",
    label: "Powered Apps",
  },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  isInView,
}: {
  value: string;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value.replace(/,/g, ""), 10);
  const isMillion = suffix === " Million";

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const nextValue = Math.min(increment * currentStep, targetValue);
      setCount(nextValue);

      if (currentStep >= steps) {
        setCount(targetValue);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  const displayValue = isMillion
    ? Math.floor(count).toLocaleString()
    : count.toLocaleString();

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground"
    >
      {prefix}
      {isInView ? displayValue : "0"}
      {suffix}
    </motion.span>
  );
}

export function DownloadsAndTrustedStatsSection() {
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
            Omnexia in numbers
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Omnexia is evolving to be more than just a messaging platform. It
            supports an entire ecosystem of APIs and platforms helping developers
            and businesses innovate with AI-powered collaboration.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative">
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
              )}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="text-center"
              >
                <div className="mb-4">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </div>
                <p className="text-lg sm:text-xl text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
