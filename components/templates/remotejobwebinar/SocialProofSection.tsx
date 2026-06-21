"use client";

import { Star } from "lucide-react";
import { CTAButton, FadeUp } from "@/components/ui";

const AVATARS = [
  { initials: "MG", color: "#FF5A36" },
  { initials: "RS", color: "#3B82F6" },
  { initials: "MA", color: "#10B981" },
  { initials: "NS", color: "#8B5CF6" },
  { initials: "PK", color: "#F59E0B" },
];

export default function SocialProofSection() {
  return (
    <section className="py-10 bg-[#0B1121] border-y border-[#1E2D4A]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Register CTA bar — matching screenshot */}
        <FadeUp>
          <div className="bg-gradient-to-r from-[#FF5A36] to-[#FF3F20] rounded-xl py-5 px-8 text-center mb-10 shadow-lg shadow-[#FF5A36]/20">
            <CTAButton
              size="lg"
              href="#register"
              className="!bg-none !bg-transparent !shadow-none !border !border-white/20 w-full text-xl font-extrabold tracking-wide"
            >
              Register Now For Just ₹99
            </CTAButton>
          </div>
        </FadeUp>

        {/* Avatar cluster + rating */}
        <FadeUp delay={0.1}>
          <div className="flex flex-col items-center gap-4">
            {/* Avatars */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {AVATARS.map((av, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-[#0B1121]"
                    style={{ background: av.color }}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>
              <div className="bg-[#FF5A36] text-white text-xs font-bold rounded-full px-3 py-1.5 ml-1">
                25k+
                <br />
                <span className="font-normal text-[10px] opacity-90">satisfied clients</span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={26}
                  className="text-[#F5A623] fill-[#F5A623]"
                />
              ))}
            </div>

            <p className="text-[#8896A6] text-sm font-semibold tracking-widest uppercase">
              Rated 4.9 Out of 5
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
