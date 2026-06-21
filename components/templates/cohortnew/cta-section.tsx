"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function CTASection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set deadline to next Sunday 11 AM IST
      const now = new Date();
      const nextSunday = new Date();
      
      const day = nextSunday.getDay();
      const daysUntilSunday = day === 0 ? 7 : 7 - day;
      
      nextSunday.setDate(nextSunday.getDate() + daysUntilSunday);
      nextSunday.setHours(11, 0, 0, 0);

      const difference = nextSunday.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-green-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                Career?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Join 25,000+ professionals who have already discovered how to land
              international remote jobs and multiply their salaries.
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            variants={itemVariants}
            className="p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/20 bg-gradient-to-br from-white/10 to-white/5"
          >
            <p className="text-white/60 text-sm uppercase tracking-widest mb-4 font-semibold">
              Webinar Starts In
            </p>
            <div className="grid grid-cols-4 gap-3 md:gap-6">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/10 border border-white/10"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: idx * 0.1,
                  }}
                >
                  <p className="text-2xl md:text-4xl font-bold text-white">
                    {String(item.value).padStart(2, "0")}
                  </p>
                  <p className="text-white/60 text-xs md:text-sm mt-1">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50">
              <span className="relative flex items-center justify-center gap-2">
                🔥 Register Now — Only ₹99
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 md:px-10 md:py-5 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300">
              Download Syllabus
            </button>
          </motion.div>

          {/* Scarcity & Trust */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-4"
          >
            <div className="p-4 rounded-xl backdrop-blur-md border border-white/10 bg-white/5">
              <p className="text-orange-400 font-bold text-lg">⚡ Limited Spots</p>
              <p className="text-white/70 text-sm mt-1">
                Only 500 seats available for this cohort
              </p>
            </div>
            <div className="p-4 rounded-xl backdrop-blur-md border border-white/10 bg-white/5">
              <p className="text-green-400 font-bold text-lg">💰 30-Day Guarantee</p>
              <p className="text-white/70 text-sm mt-1">
                Money-back guarantee if not satisfied
              </p>
            </div>
            <div className="p-4 rounded-xl backdrop-blur-md border border-white/10 bg-white/5">
              <p className="text-blue-400 font-bold text-lg">👥 Live Community</p>
              <p className="text-white/70 text-sm mt-1">
                Exclusive WhatsApp group with 25k+ members
              </p>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-white/80 text-base md:text-lg">
              Your breakthrough is just one webinar away.
            </p>
            <p className="text-white/60 text-sm mt-2">
              Stop waiting. Stop watching others get ahead. Make the move today.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
