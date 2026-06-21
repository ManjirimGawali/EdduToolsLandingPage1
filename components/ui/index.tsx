"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── CTA Button ──────────────────────────────────────────────────────────────

interface CTAButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function CTAButton({
  children,
  size = "md",
  className = "",
  onClick,
  href,
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const cls = `
    group relative inline-flex items-center justify-center gap-2
    font-bold tracking-wide rounded-lg
    bg-gradient-to-r from-[#FF5A36] to-[#FF3F20]
    text-white border-0 cursor-pointer
    shadow-[0_4px_20px_rgba(255,90,54,0.35)]
    hover:shadow-[0_8px_32px_rgba(255,90,54,0.5)]
    hover:from-[#FF7A5C] hover:to-[#FF5A36]
    hover:-translate-y-0.5
    active:translate-y-0
    transition-all duration-200 ease-out
    ${sizeClasses[size]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

// ─── Section Badge ────────────────────────────────────────────────────────────

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,90,54,0.3)] bg-[rgba(255,90,54,0.08)] mb-5 ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36] animate-pulse" />
      <span className="text-[#FF6B4A] text-xs font-semibold tracking-widest uppercase">
        {children}
      </span>
    </div>
  );
}

// ─── Fade Up (scroll-triggered) ───────────────────────────────────────────────

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeUp({
  children,
  delay = 0,
  className = "",
  once = true,
}: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger Container ────────────────────────────────────────────────────────

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Divider ──────────────────────────────────────────────────────────────────

export function GradientDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full bg-gradient-to-r from-transparent via-[#1E2D4A] to-transparent ${className}`}
    />
  );
}
