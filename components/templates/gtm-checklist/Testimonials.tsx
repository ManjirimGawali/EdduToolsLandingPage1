"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import type { TestimonialsData } from "../../../lib/data/gtm-checklist/types";

interface TestimonialsProps {
  data: TestimonialsData;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any },
  },
};

function TestimonialCard({ item, featured = false }: { item: TestimonialsData["items"][0]; featured?: boolean }) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:border-violet-500/30 ${
        featured
          ? "border-violet-500/30 bg-gradient-to-br from-violet-950/60 to-indigo-950/60"
          : "border-white/8 bg-white/3"
      } p-6 backdrop-blur-sm`}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Handle / platform */}
      {item.handle && (
        <p className="mt-2 text-xs font-medium text-violet-400">
          {item.handle} · {item.platform}
        </p>
      )}

      {/* Content */}
      <p className="mt-3 flex-1 text-slate-300 leading-relaxed">&ldquo;{item.content}&rdquo;</p>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-violet-400 to-indigo-500">
          <Image src={item.avatar} alt={item.name} fill className="object-cover" onError={() => {}} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{item.name}</p>
          <p className="text-xs text-slate-500">
            {item.role}
            {item.company ? `, ${item.company}` : ""}
          </p>
        </div>
        {/* Verified badge */}
        <div className="ml-auto flex items-center gap-1 rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Verified
        </div>
      </div>

      {/* Glow on hover */}
      {!featured && (
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-violet-600/10 blur-2xl" />
        </div>
      )}
    </div>
  );
}

export default function Testimonials({ data }: TestimonialsProps) {
  const [featured, ...rest] = data.items;

  return (
    <section className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <TestimonialCard item={featured} featured />
        </motion.div>

        {/* Grid testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((item, i) => (
            <motion.div key={i} variants={cardVariants}>
              <TestimonialCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Wall of Love link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={data.wallOfLoveHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            {data.wallOfLoveText}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
