"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeTransitionProps {
  children: ReactNode;
  key?: string;
}

export const FadeTransition = ({ children, key }: FadeTransitionProps) => {
  return (
    <>
      {/* Overlay noir pour l'effet d'assombrissement */}
      <motion.div
        className="fixed inset-0 z-50 bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Overlay qui s'éclaircit */}
      <motion.div
        className="fixed inset-0 z-40 bg-black pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
      />

      {/* Contenu de la page */}
      <motion.div
        key={key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};
