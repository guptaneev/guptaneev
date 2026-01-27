"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Metric {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const metrics: Metric[] = [
  { value: 2.0, label: "Alert latency", prefix: "< ", suffix: "s", decimals: 1 },
  { value: 100000, label: "Concurrent attendees", suffix: "+", decimals: 0 },
  { value: 3, label: "Failure modes", decimals: 0 },
];

export function MetricsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-4xl mx-auto">
        {/* Framing Copy - Critical */}
        <p className="font-serif text-2xl sm:text-3xl text-foreground mb-16 text-center">
          Constraints I design against.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <MetricCounter key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function MetricCounter({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (metric.decimals === 0) {
      return Math.floor(latest).toLocaleString();
    }
    return latest.toFixed(metric.decimals);
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, metric.value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, metric.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center space-y-3"
    >
      <div className="font-sans text-4xl sm:text-5xl font-bold text-primary">
        {metric.prefix}
        <motion.span>{rounded}</motion.span>
        {metric.suffix}
      </div>
      <p className="font-serif text-base text-foreground/80">{metric.label}</p>
    </motion.div>
  );
}

