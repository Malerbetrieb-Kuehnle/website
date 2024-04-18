import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Scroll to the top of the Page when pressing any Link
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
