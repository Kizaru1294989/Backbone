"use client";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { FadeTransition } from "./FadeTransition";
import { WipeTransition } from "./WipeTransition";
import { DissolveTransition } from "./DissolveTransition";
import { CurtainTransition } from "./CurtainTransition";

interface TransitionWrapperProps {
  children: ReactNode;
  type?: "fade" | "wipe" | "dissolve" | "curtain";
}

export const TransitionWrapper = ({
  children,
  type = "fade",
}: TransitionWrapperProps) => {
  const location = useLocation();

  const renderTransition = () => {
    const key = location.pathname;

    switch (type) {
      case "fade":
        return <FadeTransition key={key}>{children}</FadeTransition>;
      case "wipe":
        return <WipeTransition key={key}>{children}</WipeTransition>;
      case "dissolve":
        return <DissolveTransition key={key}>{children}</DissolveTransition>;
      case "curtain":
        return <CurtainTransition key={key}>{children}</CurtainTransition>;
      default:
        return <FadeTransition key={key}>{children}</FadeTransition>;
    }
  };

  return <AnimatePresence mode="wait">{renderTransition()}</AnimatePresence>;
};
