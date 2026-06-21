"use client";

import { motion } from "framer-motion";
import { CTAButton, FadeUp, StaggerContainer, staggerItem, SectionBadge } from "@/components/ui";
import { PAIN_POINTS } from "@/lib/data/data";

export default function ProblemsSection() {
  return (
    <section className="py-24 bg-[#070B1A]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <FadeUp className="text-center mb-14">
          <SectionBadge>The Problem</SectionBadge>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight leading-tight">
            You Want to Grow Your Career
          </h2>
          <p className="text-[#8896A6] text-lg mt-3 italic">
            But experiencing something like this…
          </p>
        </FadeUp>

        {/* Pain point list — matches screenshot 4 card-row layout */}
        <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.08}>
          {PAIN_POINTS.map((point) => (
            <motion.div
              key={point.title}
              // staggerItem has an ease array that isn't compatible with the
              // framer-motion Variants type; cast to any to satisfy TS.
              variants={staggerItem as any}
              whileHover={{ borderColor: "rgba(255,90,54,0.3)", x: 2 }}
              className="group flex items-start gap-4 bg-[#0F1729] border border-[#1E2D4A] rounded-xl px-6 py-5 transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[rgba(255,90,54,0.1)] border border-[rgba(255,90,54,0.2)] flex items-center justify-center text-lg shrink-0 mt-0.5">
                {point.icon}
              </div>
              {/* Content */}
              <div>
                <p className="text-[#FF5A36] font-bold text-sm mb-1">
                  {point.highlight}
                </p>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bridge CTA — matches screenshot 5 top */}
        <FadeUp delay={0.3} className="mt-14">
          <div className="bg-[#0B1121] border border-[rgba(255,90,54,0.25)] rounded-2xl px-8 py-10 text-center">
            <p className="text-[#FF5A36] font-bold text-lg mb-3">
              If You Want To End These Challenges Once And For All…
            </p>
            <p className="text-[#CBD5E1] leading-relaxed mb-6 max-w-lg mx-auto text-sm">
              Register for this program, taken by Shikkhar himself, using his own{" "}
              <span className="text-white font-semibold underline underline-offset-2 decoration-[#FF5A36]">
                international remote job experience as a Marketing Head
              </span>
              , committed to{" "}
              <span className="text-[#FF5A36] font-semibold">
                helping you get an International Remote Job
              </span>{" "}
              in the shortest possible time.
            </p>
            <CTAButton size="lg" href="#register" className="w-full max-w-sm">
              Register Now For Just ₹99 →
            </CTAButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
