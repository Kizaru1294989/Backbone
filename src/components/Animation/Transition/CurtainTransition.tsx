"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CurtainTransitionProps {
  children: ReactNode;
  key?: string;
}

export const CurtainTransition = ({
  children,
  key,
}: CurtainTransitionProps) => {
  return (
    <motion.div
      key={key}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(100% 0 0 0)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};
