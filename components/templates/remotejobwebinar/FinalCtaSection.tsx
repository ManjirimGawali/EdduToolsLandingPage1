"use client";

import { useCountdown } from "@/lib/useCountdown";
import { CTAButton, FadeUp } from "@/components/ui";
import { Shield, Zap, Clock } from "lucide-react";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-[#0F1729] border border-[#1E2D4A] rounded-xl w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center">
        <span className="text-[#FF5A36] font-extrabold text-2xl sm:text-3xl tabular-nums leading-none">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#4A5568] text-[10px] uppercase tracking-widest">{label}</span>
    </div>
  );
}

export default function FinalCtaSection() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section
      id="register"
      className="py-28 bg-[#070B1A] relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-cta-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF5A36]/5 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <FadeUp>
          <div className="inline-flex items-center gap-2 bg-[rgba(255,90,54,0.12)] border border-[rgba(255,90,54,0.3)] rounded-full px-4 py-2 mb-8">
            <Zap size={14} className="text-[#FF5A36]" />
            <span className="text-[#FF6B4A] text-xs font-bold tracking-widest uppercase">
              Limited Seats Available
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-bold tracking-tight leading-[1.15] mb-5">
            What Are You
            <br />
            Waiting For?
          </h2>
          <p className="text-[#CBD5E1] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            When it&apos;s about starting the life of your dreams — and getting paid in{" "}
            <strong className="text-white">international currency</strong> while working
            from home — every day you wait is money left on the table.
          </p>
        </FadeUp>

        {/* Countdown */}
        <FadeUp delay={0.1} className="mb-10">
          <p className="text-[#8896A6] text-sm uppercase tracking-widest mb-5">
            Offer Expires In
          </p>
          <div className="flex items-end justify-center gap-3">
            <CountdownUnit value={days} label="Days" />
            <span className="text-[#FF5A36] text-3xl font-bold pb-8">:</span>
            <CountdownUnit value={hours} label="Hours" />
            <span className="text-[#FF5A36] text-3xl font-bold pb-8">:</span>
            <CountdownUnit value={minutes} label="Minutes" />
            <span className="text-[#FF5A36] text-3xl font-bold pb-8">:</span>
            <CountdownUnit value={seconds} label="Seconds" />
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.2} className="mb-8">
          <CTAButton size="lg" href="#" className="w-full max-w-md text-xl py-6">
            🚀 Register Now — Only ₹99 →
          </CTAButton>
        </FadeUp>

        {/* Trust line */}
        <FadeUp delay={0.25}>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {[
              { icon: Shield, text: "Secure Payment" },
              { icon: Zap, text: "Instant Confirmation" },
              { icon: Clock, text: "Join in 2 Minutes" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-[#4A5568] text-sm">
                <Icon size={14} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
