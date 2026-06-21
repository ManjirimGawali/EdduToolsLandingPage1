"use client";

import { useCountdown } from "@/lib/useCountdown";
import { CTAButton } from "@/components/ui";

function TimeUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <span className="text-[#FF5A36] font-extrabold text-lg leading-none tabular-nums">
        {display}
      </span>
      <span className="text-[#4A5568] text-[9px] tracking-widest uppercase mt-0.5">
        {label}
      </span>
    </div>
  );
}

export default function AnnouncementBar() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="sticky top-0 z-50 bg-[#040710]/95 backdrop-blur-md border-b border-[#1E2D4A]">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4 flex-wrap">
        {/* Left label */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
          <span className="text-[#8896A6] text-xs tracking-wide uppercase font-medium">
            Offer Expires Soon
          </span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-3">
          <TimeUnit value={days} label="Days" />
          <span className="text-[#FF5A36] font-bold text-base leading-none mb-3">:</span>
          <TimeUnit value={hours} label="Hrs" />
          <span className="text-[#FF5A36] font-bold text-base leading-none mb-3">:</span>
          <TimeUnit value={minutes} label="Min" />
          <span className="text-[#FF5A36] font-bold text-base leading-none mb-3">:</span>
          <TimeUnit value={seconds} label="Sec" />
        </div>

        {/* CTA */}
        <CTAButton size="sm" href="#register">
          Register — ₹99 Only
        </CTAButton>
      </div>
    </div>
  );
}
