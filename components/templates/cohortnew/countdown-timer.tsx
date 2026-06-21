"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Get next Friday at 7 PM IST
      const now = new Date();
      const nextFriday = new Date(now);
      
      // Calculate days until Friday
      const daysUntilFriday = (5 - now.getDay() + 7) % 7;
      nextFriday.setDate(now.getDate() + (daysUntilFriday === 0 ? 7 : daysUntilFriday));
      
      // Set time to 7 PM IST
      nextFriday.setHours(19, 0, 0, 0);

      // If next Friday 7 PM has already passed, set for next week
      if (nextFriday <= now) {
        nextFriday.setDate(nextFriday.getDate() + 7);
      }

      const difference = nextFriday.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 12px 1px rgba(0, 188, 212, 0.4)",
              "0 0 25px 4px rgba(0, 188, 212, 0.8)",
              "0 0 12px 1px rgba(0, 188, 212, 0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/50 rounded-lg px-4 py-3 min-w-20 text-center"
        >
          <div className="text-2xl md:text-3xl font-bold text-cyan-400">
            {String(value).padStart(2, "0")}
          </div>
        </motion.div>
      </div>
      <span className="text-xs md:text-sm text-cyan-300 mt-2 uppercase tracking-wider font-semibold">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="flex gap-3 md:gap-6 justify-center items-end">
      <TimeBox value={timeLeft.days} label="Days" />
      <div className="text-2xl md:text-3xl text-cyan-400 font-bold mb-6">:</div>
      <TimeBox value={timeLeft.hours} label="Hours" />
      <div className="text-2xl md:text-3xl text-cyan-400 font-bold mb-6">:</div>
      <TimeBox value={timeLeft.minutes} label="Mins" />
      <div className="text-2xl md:text-3xl text-cyan-400 font-bold mb-6">:</div>
      <TimeBox value={timeLeft.seconds} label="Secs" />
    </div>
  );
}
