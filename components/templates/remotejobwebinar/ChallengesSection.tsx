"use client";

import { motion } from "framer-motion";
import { CTAButton, FadeUp, StaggerContainer, staggerItem, SectionBadge } from "@/components/ui";
import type { Challenge } from "@/lib/data/remotejob/type";

interface ChallengesSectionProps {
  challenges: Challenge[];
}

export default function ChallengesSection({
  challenges,
}: ChallengesSectionProps) {
  return (
    <section className="py-24 bg-[#0B1121]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Mentor priority statement — matching screenshot 7 top */}
        <FadeUp className="text-center mb-10">
          <div className="bg-[#0F1729] border border-[#1E2D4A] rounded-2xl px-8 py-8 mb-10">
            <p className="text-[#CBD5E1] text-base leading-loose">
              My Top Priority Is Your{" "}
              <span className="text-[#FF5A36] font-extrabold">SALARY Growth</span>{" "}
              Not vanity metrics like culture or designation — but salary.
            </p>
            <p className="text-[#FF5A36] font-bold text-base mt-2">
              To Grow Your Salary As Fast As Possible, In The Shortest Possible Time
            </p>
            <p className="text-[#8896A6] text-sm mt-2 italic">
              And I ensure you get growth beyond your expectations or we work till you get to see it..
            </p>
          </div>

          <CTAButton size="lg" href="#register" className="w-full max-w-sm mb-10">
            Register Now For Just ₹99 →
          </CTAButton>

          {/* Warning block — matches screenshot 7 middle text */}
          <div className="bg-[rgba(255,90,54,0.06)] border border-[rgba(255,90,54,0.2)] rounded-xl px-6 py-5 text-left">
            <p className="text-[#CBD5E1] text-sm leading-relaxed">
              <strong className="text-white">BTW</strong> If{" "}
              <strong className="text-white">you choose</strong> to ignore this{" "}
              <em className="text-[#8896A6]">opportunity and continue with your current methods</em>
              , but{" "}
              <strong className="text-white underline underline-offset-2 decoration-[#FF5A36]">
                you&apos;ll also continue to experience these challenges
              </strong>{" "}
              (or it can get even worse)….
            </p>
          </div>
        </FadeUp>

        <SectionBadge>If You Don&apos;t Act</SectionBadge>

        {/* Challenge cards */}
        <StaggerContainer className="flex flex-col gap-4 mt-6" staggerDelay={0.1}>
          {challenges.map((c) => (
            <motion.div
              key={c.title}
              variants={staggerItem as any}
              whileHover={{ borderColor: "rgba(255,90,54,0.3)", x: 2 }}
              className="group flex items-start gap-5 bg-[#0F1729] border border-[#1E2D4A] rounded-xl px-6 py-6 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,90,54,0.08)] border border-[rgba(255,90,54,0.15)] flex items-center justify-center text-2xl shrink-0">
                {c.icon}
              </div>
              <div>
                <p className="font-bold text-white mb-1.5">{c.title}</p>
                <p className="text-[#8896A6] text-sm leading-relaxed">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
