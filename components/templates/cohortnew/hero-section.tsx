"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CohortData } from '@/lib/data/cohort';
import { ChevronRight } from "lucide-react";
import { CountdownTimer } from "./countdown-timer";
interface HeroSectionProps {
  hero: CohortData["hero"];
  mentor: CohortData["mentor"];
}
export function HeroSection({
  hero,
  mentor,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-20 md:py-32">
      {/* Animated background blobs with blue, orange, and green accents */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-blue-700 opacity-25 blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500 via-blue-600 to-green-600 opacity-25 blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-green-400 to-orange-500 opacity-20 blur-3xl"
          animate={{
            y: [-30, 30, -30],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="px-4 py-2 bg-gradient-to-r from-blue-600/40 to-green-600/40 backdrop-blur-md rounded-full border border-green-400/60 text-white text-sm font-medium w-fit shadow-lg shadow-green-500/20">
                {hero.tagline}
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {hero.mainHeadline}
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
                  {hero.subheadline}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              {hero.description}
            </motion.p>

            {/* Cohort Info */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 py-6 px-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
            >
              <div className="text-center">
                <p className="text-white/60 text-xs md:text-sm mb-1">📅</p>
                <p className="text-white font-semibold text-sm">
                  {hero.sessionInfo}
                </p>
              </div>
              <div className="text-center border-l border-white/10">
                <p className="text-white/60 text-xs md:text-sm mb-1">⚠️</p>
                <p className="text-white font-semibold text-sm">
                  {hero.limitation}
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/60">
                <span className="relative flex items-center justify-center gap-2">
                  {hero.cta1}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-green-400/50 hover:bg-green-600/20 transition-all duration-300">
                {hero.cta2}
              </button>
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="space-y-3 pt-4">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-white font-semibold">Limited spots available</p>
                  <p className="text-white/60 text-sm">
                    {hero.limitation}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - EddyTools Logo and Mentor Image */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            {/* EddyTools Logo */}
            <motion.div
              className="w-40 h-20 relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Image
                src="/logo-eddytools.png"
                alt="EddyTools Tech Solutions"
                fill
                className="object-contain"
              />
            </motion.div>

              {/* Mentor Image with Green-Blue Glow */}
            <motion.div
              className="relative w-64 h-80 rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 20px 2px rgba(34, 197, 94, 0.5)",
                  "0 0 40px 8px rgba(59, 130, 246, 0.7)",
                  "0 0 20px 2px rgba(34, 197, 94, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-green-400/60 bg-gradient-to-br from-slate-800 to-slate-900 p-1 h-full shadow-2xl">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="w-full h-full rounded-2xl object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Mentor Info Card - Smaller */}
              <motion.div
                className="absolute -bottom-4 left-3 right-3 p-3 bg-gradient-to-r from-blue-900/90 to-slate-900/90 backdrop-blur-xl rounded-xl border border-green-400/40 shadow-xl"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
              >
                <p className="font-bold text-white text-sm">{mentor.name}</p>
                <p className="text-green-300 text-xs">{mentor.title}</p>
              </motion.div>
            </motion.div>

            {/* Countdown Timer Section */}
            <motion.div
              className="w-full max-w-xs"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-green-400/40 p-6 shadow-lg">
                <p className="text-center text-white/80 text-xs mb-3 font-semibold">
                  ⏰ Next Session
                </p>
                <CountdownTimer />
                <p className="text-center text-green-300 text-xs mt-3 font-semibold">
                  🔔 Every Friday • 7 PM IST
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              className="w-full max-w-xs px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {hero.cta1}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
