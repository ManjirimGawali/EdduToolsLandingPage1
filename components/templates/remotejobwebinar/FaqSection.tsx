"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { CTAButton, FadeUp, SectionBadge } from "@/components/ui";
import { FAQ_ITEMS } from "@/lib/data/data";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        isOpen
          ? "border-[rgba(255,90,54,0.35)] bg-[#0F1729]"
          : "border-[#1E2D4A] bg-[#0B1121] hover:border-[#2a3d5c]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className={`font-semibold text-sm sm:text-base transition-colors ${
            isOpen ? "text-white" : "text-[#CBD5E1]"
          }`}
        >
          {question}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
            isOpen
              ? "bg-[#FF5A36] border-[#FF5A36] text-white"
              : "bg-transparent border-[#1E2D4A] text-[#8896A6]"
          }`}
        >
          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-gradient-to-r from-[rgba(255,90,54,0.3)] to-transparent mb-4" />
              <p className="text-[#8896A6] text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-2xl mx-auto px-6">
        {/* Urgency CTA top — matches screenshot 9 top */}
        <FadeUp className="text-center mb-14">
          <p className="text-[#FF5A36] font-extrabold text-2xl sm:text-3xl mb-2 uppercase tracking-wide">
            What Are You Waiting For…
          </p>
          <p className="text-[#64748B] text-base mb-6">
            When it is about starting the life of your dreams…
          </p>
          <CTAButton size="lg" href="#register" className="w-full max-w-sm">
            Register Now For Just ₹99 →
          </CTAButton>
        </FadeUp>

        {/* FAQ heading */}
        <FadeUp delay={0.1} className="text-center mb-10">
          <SectionBadge className="!bg-[rgba(255,90,54,0.08)] border-[rgba(255,90,54,0.2)]">
            FAQ
          </SectionBadge>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-tight text-[#070B1A]">
            Frequently Asked Questions
          </h2>
        </FadeUp>

        {/* Accordion */}
        <FadeUp delay={0.15} className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </FadeUp>

        {/* CTA bottom — matches screenshot 9 bottom */}
        <FadeUp delay={0.2} className="mt-12 text-center">
          <CTAButton size="lg" href="#register" className="w-full max-w-sm">
            Register Now For Just ₹99 →
          </CTAButton>
        </FadeUp>
      </div>
    </section>
  );
}
