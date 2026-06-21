
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  Users,
  Star,
  TrendingUp,
  Clock,
  Globe,
} from "lucide-react";

import { CTAButton, SectionBadge, FadeUp } from "@/components/ui";
import {
  HERO_STATS,
  HERO_DATA,
  MENTOR,
} from "@/lib/data/data";

function FloatingCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute bg-[#0F1729]/90 backdrop-blur-md border border-[#1E2D4A] rounded-xl px-4 py-3 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function HeroSection() {
  const {
    badge,
    heading,
    description,
    webinarInfo,
    cta,
    trust,
    mentorCard,
    floatingCards,
  } = HERO_DATA;

  return (
    <section className="relative min-h-screen flex items-center pt-10 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-[#FF5A36]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <FadeUp>
              <SectionBadge>{badge}</SectionBadge>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-display text-[clamp(2.6rem,5.5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-6">
                {heading.line1}{" "}
                <span className="text-[#FF5A36]">
                  {heading.highlight}
                </span>

                <br />

                <span className="italic">
                  {heading.line2}
                </span>

                <br />

                Working From{" "}
                <span
                  className="relative inline-block"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#FF5A36",
                    textUnderlineOffset: "6px",
                  }}
                >
                  {heading.underline}
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p className="text-[#CBD5E1] text-lg leading-relaxed mb-4 max-w-[500px]">
                {description}
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div className="flex items-center gap-3 mb-8 flex-wrap">
                <div className="flex items-center gap-1.5 text-sm text-[#8896A6]">
                  <Calendar
                    size={14}
                    className="text-[#FF5A36]"
                  />
                  <span>{webinarInfo.date}</span>
                </div>

                <span className="text-[#1E2D4A]">|</span>

                <div className="flex items-center gap-1.5 text-sm text-[#8896A6]">
                  <Clock
                    size={14}
                    className="text-[#FF5A36]"
                  />
                  <span>{webinarInfo.qa}</span>
                </div>

                <span className="text-[#1E2D4A]">|</span>

                <div className="flex items-center gap-1.5 text-sm text-[#8896A6]">
                  <Globe
                    size={14}
                    className="text-[#FF5A36]"
                  />
                  <span>{webinarInfo.location}</span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.28}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <CTAButton
                  size="lg"
                  href={cta.href}
                >
                  {cta.text}
                </CTAButton>
              </div>

              {/* Trust */}
              <div className="flex items-center gap-5 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {trust.avatars.map((avatar) => (
                      <div
                        key={avatar.initials}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#070B1A]"
                        style={{
                          background: avatar.color,
                        }}
                      >
                        {avatar.initials}
                      </div>
                    ))}
                  </div>

                  <span className="text-[#8896A6] text-sm">
                    {trust.clients}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-[#F5A623] fill-[#F5A623]"
                    />
                  ))}

                  <span className="text-white text-sm font-semibold ml-1">
                    {trust.rating}
                  </span>

                  <span className="text-[#8896A6] text-sm">
                    / 5
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT */}
          <FadeUp
            delay={0.12}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[380px]">
              <div className="relative bg-gradient-to-b from-[#0F1729] to-[#0B1121] border border-[#1E2D4A] rounded-3xl overflow-hidden shadow-2xl min-h-[420px] flex flex-col items-center justify-end pb-6">
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FF5A36]/10 to-transparent" />

                <div className="absolute top-5 left-5 flex items-center gap-2 bg-[#FF5A36]/15 border border-[#FF5A36]/30 rounded-lg px-3 py-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />

                  <span className="text-[#FF5A36] text-xs font-bold tracking-wide uppercase">
                    {mentorCard.badge}
                  </span>
                </div>

                {/* Mentor Image */}
                <div className="w-52 h-72 rounded-2xl overflow-hidden border border-[#1E2D4A] relative mb-4">
                  <Image
                    src={MENTOR.image}
                    alt={MENTOR.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute -top-3 -right-3 bg-[#FF5A36] rounded-xl px-3 py-2 shadow-lg shadow-[#FF5A36]/30">
                    <div className="text-white font-extrabold text-xl leading-none">
                      {mentorCard.multiplier}
                    </div>

                    <div className="text-white/80 text-[9px] tracking-wide">
                      SALARY
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-bold text-white text-lg">
                    {MENTOR.name}
                  </p>

                  <p className="text-[#8896A6] text-sm">
                    {MENTOR.designation}
                  </p>
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <FloatingCard
                    key={card.label}
                    className={
                      index === 0
                        ? "-left-8 top-20"
                        : "-right-6 bottom-24"
                    }
                  >
                    <div className="flex items-center gap-2">
                      <Icon
                        size={16}
                        style={{ color: card.color }}
                      />

                      <div>
                        <p className="text-white font-bold text-sm leading-none">
                          {card.value}
                        </p>

                        <p className="text-[#8896A6] text-[10px] mt-0.5">
                          {card.label}
                        </p>
                      </div>
                    </div>
                  </FloatingCard>
                );
              })}

              <FloatingCard className="left-1/2 -translate-x-1/2 -bottom-4">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <Star
                    size={14}
                    className="text-[#F5A623] fill-[#F5A623]"
                  />

                  <p className="text-white font-bold text-sm">
                    {trust.rating} / 5
                  </p>

                  <p className="text-[#8896A6] text-xs">
                    Student Rating
                  </p>
                </div>
              </FloatingCard>
            </div>
          </FadeUp>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0F1729] border border-[#1E2D4A] rounded-xl p-5 text-center"
            >
              <p className="text-[#FF5A36] font-extrabold text-2xl leading-none">
                {stat.value}
              </p>

              <p className="text-[#8896A6] text-xs mt-1.5 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

