"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { SocialProofBannerData } from "../../../lib/data/gtm-checklist/types";

interface SocialProofProps {
  data: SocialProofBannerData;
}

export default function SocialProof({ data }: SocialProofProps) {
  return (
    <section className="bg-[#0a0a0f] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main proof card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-950/40 to-indigo-950/40 p-8 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-indigo-600/5" />
          <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            {/* Avatars + count */}
            <div className="flex shrink-0 flex-col items-center gap-2 sm:items-start">
              <div className="flex -space-x-3">
                {data.avatars.map((src, i) => (
                  <div
                    key={i}
                    className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br from-violet-400 to-indigo-500 shadow-lg"
                  >
                    <Image src={src} alt="User" width={48} height={48} className="h-full w-full object-cover" onError={() => {}} />
                  </div>
                ))}
              </div>
              <div className="flex gap-0.5">
                {[...Array(data.stars)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-3xl font-black text-white">{data.count}</p>
              <p className="mt-1 text-slate-300">{data.label}</p>
            </div>
          </div>
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12"
        >
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-slate-500">
            {data.partnerLabel}
          </p>
          <div className="relative overflow-hidden">
            {/* Scroll ticker */}
            <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap">
              {[...data.partnerLogos, ...data.partnerLogos].map((logo, i) => (
                <div
                  key={i}
                  className="inline-flex h-8 w-40 shrink-0 items-center justify-center opacity-100 transition-all hover:scale-105"
                >
                  <Image
                    src={logo}
                    alt={`Partner logo ${i}`}
                    width={160}
                    height={32}
                    className="h-full w-auto object-contain"
                    onError={() => {}}
                  />
                </div>
              ))}
            </div>
            {/* fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent" />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
