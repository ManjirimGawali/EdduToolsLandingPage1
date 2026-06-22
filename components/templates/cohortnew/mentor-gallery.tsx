"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CohortData } from "@/lib/data/cohortnew/index";

interface MentorGalleryProps {
  mentor: CohortData["mentor"];
}
export function MentorGallery({
  mentor,
}: MentorGalleryProps) {
  

  const achievements: string[] = Array.isArray((mentor as any).achievements)
    ? ((mentor as any).achievements as string[])
    : [];

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Your <span className="bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">Mentor</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {mentor.name} brings years of experience in AI SaaS product building and global distribution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gallery */}
         {/* Mentor Image */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="flex justify-center"
>
  <div className="relative rounded-3xl overflow-hidden border-2 border-green-400/50 bg-gradient-to-br from-slate-800 to-slate-900 w-80 h-96 shadow-xl">
    <Image
      src={mentor.image}
      alt={mentor.name}
      fill
      className="object-cover"
    />
  </div>
</motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {mentor.name}
              </h3>
              <p className="text-cyan-400 text-lg font-semibold">
                {mentor.title}
              </p>
            </div>

            <p className="text-white/80 text-lg leading-relaxed">
              {mentor.bio}
            </p>

            {/* Stats Grid
            <div className="grid grid-cols-2 gap-4 pt-4">
              {mentor.stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    className="p-4 bg-gradient-to-br from-green-500/10 to-orange-500/10 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-6 h-6 text-green-400" />
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                    </div>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
            */}

            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="pt-4">
                <h4 className="text-white font-bold mb-4">Key Achievements:</h4>
                <ul className="space-y-2">
                  {achievements.slice(0, 4).map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-orange-400 rounded-full" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
