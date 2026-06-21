"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { HeroData } from "../../../lib/data/gtm-checklist/types";

interface HeroProps {
  data: HeroData;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0f] pt-24 pb-0">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-60 -left-40 h-[400px] w-[600px] rounded-full bg-indigo-600/15 blur-[100px]" />
        <div className="absolute top-40 -right-40 h-[400px] w-[600px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
            {data.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mt-6 text-center text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {data.headline.split(":").map((part, i) =>
            i === 0 ? (
              <span key={i}>
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {part}
                </span>
                :
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-400"
        >
          {data.subheadline}
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <a
            href={data.ctaPrimaryHref}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">{data.ctaPrimary}</span>
            <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <p className="text-sm text-slate-500">{data.deliveryNote}</p>
        </motion.div>

        {/* Social proof avatars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {data.avatars.map((src, i) => (
                <div
                  key={i}
                  className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br from-violet-400 to-indigo-500"
                >
                  <Image src={src} alt="User" width={32} height={32} className="h-full w-full object-cover" onError={() => {}} />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400">
              <span className="font-bold text-white">{data.socialProofCount}</span>{" "}
              {data.socialProofLabel}
            </p>
          </div>
        </motion.div>

        {/* Product image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="relative mt-12"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-t-2xl border border-white/10 bg-white/5 shadow-2xl shadow-violet-500/10 backdrop-blur-sm">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-amber-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
              <div className="ml-3 h-5 flex-1 rounded-md bg-white/10" />
            </div>
            <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-slate-900 to-slate-800">
              <Image
                src={data.image}
                alt="GTM Checklist product preview"
                fill
                className="object-cover"
                priority
                onError={() => {}}
              />
              {/* Gradient fade at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
