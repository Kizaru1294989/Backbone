"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface WipeTransitionProps {
  children: ReactNode;
  key?: string;
}

export const WipeTransition = ({ children, key }: WipeTransitionProps) => {
  return (
    <motion.div
      key={key}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      exit={{ clipPath: "inset(0 0 0 100%)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};
