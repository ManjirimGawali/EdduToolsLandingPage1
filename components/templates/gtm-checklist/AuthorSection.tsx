"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { AuthorData } from "../../../lib/data/gtm-checklist/types";


interface AuthorSectionProps {
  data: AuthorData;
}

export default function AuthorSection({ data }: AuthorSectionProps) {
  return (
    <section className="bg-[#080810] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Author image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-violet-500/10">
              <div className="relative aspect-[3/4] w-full bg-gradient-to-br from-slate-800 to-slate-900">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover"
                  onError={() => {}}
                />
              </div>
              {/* Name overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-xl font-bold text-white">{data.name}</p>
                <p className="text-sm text-violet-300">GTM Strategist</p>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="pointer-events-none absolute -inset-4 rounded-3xl border border-violet-500/10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
                Hi, I&apos;m {data.name}
              </p>
              <p className="text-slate-300 leading-relaxed">{data.bio}</p>
            </div>

            {/* Say goodbye to */}
            <div className="rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm">
              <p className="mb-4 text-lg font-bold text-white">Say goodbye to:</p>
              <ul className="space-y-3">
                {data.pains.map((pain, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3 text-slate-400"
                  >
                    <span className="text-xl">{pain.emoji}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate-500">×</span>
                      <span>{pain.text}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <p className="text-lg font-semibold text-white">{data.transitionText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
