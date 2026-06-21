"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { WorkflowData } from "../../../lib/data/gtm-checklist/types";

interface WorkflowSectionProps {
  data: WorkflowData;
}

export default function WorkflowSection({ data }: WorkflowSectionProps) {
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
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {data.sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 leading-relaxed">{data.description}</p>
        </motion.div>

        {/* Workflow screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30"
        >
          <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-slate-800 to-slate-900">
            <Image src={data.image} alt="Workflow" fill className="object-cover" onError={() => {}} />
          </div>
        </motion.div>

        {/* Tool compatibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <p className="mb-5 text-center text-sm font-medium text-slate-500">
            Exports to any project management tool — {data.note}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {data.tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/3 px-4 py-2.5 backdrop-blur-sm transition-all hover:border-violet-500/20 hover:bg-white/6"
              >
                <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-md bg-white/10">
                  <Image src={tool.icon} alt={tool.name} fill className="object-contain p-0.5" onError={() => {}} />
                </div>
                <span className="text-sm font-medium text-slate-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
