"use client";

import Image from "next/image";
import {
  Award,
  Building2,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";
import { CTAButton, FadeUp, SectionBadge } from "@/components/ui";
import type { Mentor, RemoteJobIconName } from "@/lib/data/remotejob/type";

const iconMap: Record<RemoteJobIconName, typeof TrendingUp> = {
  TrendingUp,
  Users,
  Award,
  Building2,
  GraduationCap,
};

interface MentorSectionProps {
  mentor: Mentor;
  brands: string[];
}

export default function MentorSection({ mentor, brands }: MentorSectionProps) {
  const {
    name,
    designation,
    image,
    headline,
    about,
    stats,
    achievement,
    cta,
  } = mentor;

  const AchievementIcon = iconMap[achievement.icon] ?? TrendingUp;

  return (
    <section className="py-24 bg-[#050810]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <SectionBadge>Your Mentor</SectionBadge>

          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight leading-tight">
            Meet {name}
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">
          {/* Left Side */}
          <FadeUp className="flex flex-col items-center gap-6">
            <div className="w-full bg-gradient-to-b from-[#F0F4FF] to-[#E8EDF8] rounded-2xl overflow-hidden border border-[#1E2D4A]">
              <div className="relative h-[360px] w-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full bg-gradient-to-r from-[#FF5A36] to-[#FF3F20] py-4 px-6 text-center">
                <p className="text-white font-extrabold text-lg">
                  {name}
                </p>

                <p className="text-white/80 text-sm">
                  {designation}
                </p>
              </div>
            </div>

            <CTAButton
              size="md"
              href={cta.href}
              className="w-full"
            >
              {cta.text}
            </CTAButton>
          </FadeUp>

          {/* Right Side */}
          <FadeUp delay={0.15}>
            <div className="inline-flex items-center gap-2 bg-[rgba(255,90,54,0.1)] border border-[rgba(255,90,54,0.2)] rounded-lg px-3 py-1.5 mb-5">
              <span className="text-[#FF5A36] text-xs font-bold uppercase tracking-widest">
                About Me
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold leading-snug mb-5">
              {headline}
            </h3>

            {/* About */}
            <div className="space-y-4 mb-8">
              {about.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#CBD5E1] leading-relaxed text-sm"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Brands */}
            <div className="mb-8">
              <p className="text-[#4A5568] text-xs uppercase tracking-widest mb-3">
                Brands Worked With
              </p>

              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="bg-[#0F1729] border border-[#1E2D4A] text-[#CBD5E1] text-xs font-medium px-3 py-1.5 rounded-lg"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ icon, value, label }) => {
                const Icon = iconMap[icon] ?? TrendingUp;

                return (
                  <div
                    key={label}
                    className="bg-[#0F1729] border border-[#1E2D4A] rounded-xl p-4 text-center"
                  >
                    <Icon
                      size={16}
                      className="text-[#FF5A36] mx-auto mb-2"
                    />

                    <p className="text-white font-extrabold text-base leading-none">
                      {value}
                    </p>

                    <p className="text-[#4A5568] text-[10px] mt-1.5 uppercase tracking-wide">
                      {label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Achievement */}
            <div className="mt-6 flex items-start gap-3 bg-[rgba(255,90,54,0.06)] border border-[rgba(255,90,54,0.15)] rounded-xl p-4">
              <AchievementIcon
                size={20}
                className="text-[#FF5A36] shrink-0 mt-0.5"
              />

              <p className="text-[#CBD5E1] text-sm leading-relaxed">
                <strong className="text-white">
                  {achievement.title}
                </strong>{" "}
                {achievement.description}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}