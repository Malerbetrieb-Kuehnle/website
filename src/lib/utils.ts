import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { keyframes } from "@emotion/react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

// Scroll to the top of the Page when pressing any Link
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Custom Reveal animation
export const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
