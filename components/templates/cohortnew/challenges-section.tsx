// "use client";

// import { motion } from "framer-motion";
//  import { CHALLENGES } from "@/lib/data/cohortnew/ai_saas";

// export function ChallengesSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       // cast ease to any to satisfy Framer Motion's TypeScript types for cubic-bezier array
//       transition: { duration: 0.6, ease: ([0.22, 1, 0.36, 1] as unknown) as any },
//     },
//     hover: {
//       scale: 1.05,
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16 md:mb-20"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//             Why This Matters <span className="text-orange-400">Right Now</span>
//           </h2>
//           <p className="text-lg text-white/60 max-w-2xl mx-auto">
//             The stakes have never been higher. The world is changing fast, and
//             standing still means falling behind.
//           </p>
//         </motion.div>

//         {/* Challenges Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid md:grid-cols-3 gap-6"
//         >
//           {CHALLENGES.map((challenge, idx) => (
//             <motion.div
//               key={idx}
//               variants={cardVariants}
//               whileHover="hover"
//               className="group relative p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden"
//             >
//               {/* Animated gradient background */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

//               {/* Icon with animation */}
//               <motion.div
//                 className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300"
//                 animate={{
//                   y: [0, -5, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   delay: idx * 0.3,
//                 }}
//               >
//                 {challenge.icon}
//               </motion.div>

//               {/* Title */}
//               <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
//                 {challenge.title}
//               </h3>

//               {/* Description */}
//               <p className="text-white/70 text-sm md:text-base leading-relaxed">
//                 {challenge.description}
//               </p>

//               {/* Number badge */}
//               <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/10 group-hover:from-orange-500/30 group-hover:to-red-500/20 transition-all duration-300 flex items-center justify-center text-4xl font-bold text-white/10">
//                 {idx + 1}
//               </div>

//               {/* Accent line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300" />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <div className="p-6 md:p-8 rounded-2xl backdrop-blur-md border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-red-500/5">
//             <p className="text-white text-lg md:text-xl font-semibold mb-4">
//               The only way forward is to make a strategic shift
//             </p>
//             <p className="text-white/70">
//               This webinar shows you exactly how to do that and unlock your true
//               earning potential.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
