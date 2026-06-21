"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { FeaturesData } from "../../../lib/data/gtm-checklist/types";

interface FeaturesProps {
  data: FeaturesData;
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Skip the guesswork & get shit done
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {data.sectionTitle}
          </h2>
        </motion.div>

        {/* Feature rows */}
        <div className="mt-20 space-y-24">
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1 space-y-5">
                {item.stat && (
                  <div className="inline-flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">{item.stat}</span>
                    <span className="text-xl font-bold text-violet-400">{item.statLabel}</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white lg:text-3xl">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>

                {/* AI models badge (for item with AI prompts) */}
                {i === 1 && (
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-slate-300">{data.aiLabel}</p>
                    <div className="flex flex-wrap gap-3">
                      {data.aiModels.map((model) => (
                        <div
                          key={model.name}
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-300"
                        >
                          <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-md bg-white/10">
                            <Image src={model.icon} alt={model.name} fill className="object-contain p-0.5" onError={() => {}} />
                          </div>
                          {model.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 shadow-2xl shadow-black/30">
                  <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      onError={() => {}}
                    />
                  </div>
                  {/* Subtle inner glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a
            href={data.ctaHref}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-[1.02]"
          >
            {data.ctaText}
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
