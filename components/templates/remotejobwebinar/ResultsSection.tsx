"use client";

import { TrendingUp, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, staggerItem, SectionBadge } from "@/components/ui";
import { SUCCESS_STORIES } from "@/lib/data/data";
import { motion } from "framer-motion";

function SalaryBadge({ from, to }: { from: string; to: string }) {
  return (
    <div className="flex items-center gap-2 my-3">
      <span className="text-[#8896A6] text-sm line-through">{from}</span>
      <ArrowRight size={14} className="text-[#4A5568]" />
      <span className="text-[#FF5A36] font-extrabold text-xl">{to}</span>
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section className="py-24 bg-[#050810]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <FadeUp className="text-center mb-16">
          <SectionBadge>Real Results</SectionBadge>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight leading-tight">
            Our Mind-Boggling Results
          </h2>
          <p className="text-[#8896A6] text-base mt-4 max-w-md mx-auto">
            Real people. Real salaries. Real lives transformed — right here in India.
          </p>
        </FadeUp>

        {/* Cards grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5"
          staggerDelay={0.1}
        >
          {SUCCESS_STORIES.map((story) => (
            <motion.div
              key={story.name}
              variants={staggerItem as any}
              whileHover={{ y: -4, borderColor: "rgba(255,90,54,0.4)" }}
              className="group bg-[#0F1729] border border-[#1E2D4A] rounded-2xl p-7 transition-colors duration-300 cursor-default relative overflow-hidden"
            >
              {/* Card shine on hover */}
              <div className="absolute inset-0 bg-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Avatar + name row */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base border-2 shrink-0"
                  style={{
                    background: `${story.color}22`,
                    borderColor: `${story.color}55`,
                    color: story.color,
                  }}
                >
                  {story.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-base">{story.name}</p>
                  <p className="text-[#8896A6] text-xs mt-0.5">{story.role}</p>
                  <p className="text-[#4A5568] text-[11px]">{story.company}</p>
                </div>
              </div>

              {/* Salary transformation – prominent, matches screenshot style */}
              <div className="bg-[#0B1121] border border-[#1E2D4A] rounded-xl p-4 mb-5">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-[#8896A6] text-[11px] uppercase tracking-wide mb-1">
                      Was Earning
                    </p>
                    <p className="text-[#4A5568] text-lg font-bold line-through">
                      {story.fromSalary}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <TrendingUp size={18} className="text-[#FF5A36]" />
                    <p className="text-[#FF5A36] text-[10px] font-semibold uppercase tracking-wide">
                      Growth
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#8896A6] text-[11px] uppercase tracking-wide mb-1">
                      Now Earning
                    </p>
                    <p className="text-[#FF5A36] text-2xl font-extrabold">
                      {story.toSalary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#1E2D4A] to-transparent mb-4" />

              {/* Testimonial */}
              <p className="text-[#CBD5E1] text-sm leading-relaxed italic">
                &ldquo;{story.testimonial}&rdquo;
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
