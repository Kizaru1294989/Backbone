"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface DissolveTransitionProps {
  children: ReactNode;
  key?: string;
}

export const DissolveTransition = ({
  children,
  key,
}: DissolveTransitionProps) => {
  return (
    <motion.div
      key={"key"}
      // initial={{ opacity: 0, filter: "blur(10px)" }}
      // animate={{ opacity: 1, filter: "blur(0px)" }}
      // exit={{ opacity: 0, filter: "blur(10px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};
