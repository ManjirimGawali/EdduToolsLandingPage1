"use client";

import { motion } from "framer-motion";
import type { PricingData } from "../../../lib/data/gtm-checklist/types";

interface PricingProps {
  data: PricingData;
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
    </svg>
  );
}

export default function Pricing({ data }: PricingProps) {
  return (
    <section id="checkout" className="relative bg-[#080810] py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {data.sectionTitle}
          </h2>
          <p className="mt-3 text-slate-400">{data.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {data.tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative flex flex-col overflow-hidden rounded-2xl border ${
                tier.highlighted
                  ? "border-violet-500/50 bg-gradient-to-br from-violet-950/60 via-indigo-950/40 to-[#0a0a0f] shadow-2xl shadow-violet-500/10"
                  : "border-white/10 bg-white/3"
              } p-8`}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white">{tier.title}</h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-2">
                {tier.priceNote && (
                  <span className="text-sm text-slate-400">{tier.priceNote}</span>
                )}
                {tier.originalPrice && (
                  <span className="text-lg text-slate-500 line-through">{tier.originalPrice}</span>
                )}
                <span className="text-5xl font-black text-white">{tier.price}</span>
              </div>

              {/* CTA */}
              <a
                href={tier.ctaHref}
                target={tier.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={tier.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {tier.ctaText}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    {feature.isBonus ? <PlusIcon /> : <CheckIcon />}
                    <span className={`text-sm leading-relaxed ${feature.isBonus ? "font-medium text-amber-300" : "text-slate-300"}`}>
                      {feature.isBonus && (
                        <span className="mr-1.5 rounded border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-xs font-bold text-amber-400">
                          FREE BONUS
                        </span>
                      )}
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Glow for highlighted */}
              {tier.highlighted && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-violet-500/20" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Payment info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-slate-500">{data.paymentNote}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {data.paymentIcons.map((icon) => (
              <div
                key={icon}
                className="flex h-8 w-14 items-center justify-center rounded border border-white/10 bg-white/5 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400"
              >
                {icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
