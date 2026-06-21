"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  CTAButton,
  FadeUp,
  StaggerContainer,
  staggerItem,
  SectionBadge,
} from "@/components/ui";
import { LEARNING_MODULES } from "@/lib/data/data";

export default function WhatYouLearnSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <FadeUp className="text-center mb-14">
          <SectionBadge className="!bg-[rgba(255,90,54,0.08)] border-[rgba(255,90,54,0.2)]">
            What You&apos;ll Get
          </SectionBadge>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight text-[#070B1A] leading-tight">
            What You Will Get In The Program
          </h2>
          <p className="text-[#64748B] text-base mt-4 max-w-md mx-auto">
            Every module is battle-tested and built from real international hiring experience.
          </p>
        </FadeUp>

        {/* Module list — matches screenshot 5 & 6 vertical card layout */}
        <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.08}>
          {LEARNING_MODULES.map((mod, i) => (
            <motion.div
              key={i}
              // cast to any to avoid TS variant/ease typing mismatch
              variants={staggerItem as any}
              whileHover={{ borderColor: "rgba(255,90,54,0.35)", y: -2 }}
              className="group flex items-start gap-5 bg-white border border-[#E2E8F0] rounded-xl px-6 py-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,90,54,0.08)] border border-[rgba(255,90,54,0.15)] flex items-center justify-center text-xl shrink-0">
                {mod.icon}
              </div>
              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[#0F1729] text-base leading-snug mb-1.5">
                  {mod.title}
                </p>
                <p className="text-[#64748B] text-sm leading-relaxed">{mod.description}</p>
              </div>
              {/* Check on hover */}
              <CheckCircle
                size={18}
                className="text-[#FF5A36] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA — matches screenshot 6 bottom */}
        <FadeUp delay={0.3} className="mt-12 text-center">
          <p className="text-[#FF5A36] font-bold text-xl mb-5">
            So What Are You Waiting For…
          </p>
          <CTAButton size="lg" href="#register" className="w-full max-w-sm">
            Register Now For Just ₹99 →
          </CTAButton>
        </FadeUp>
      </div>
    </section>
  );
}
