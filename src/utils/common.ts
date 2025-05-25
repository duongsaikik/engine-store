import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDiscount(price: number, originPrice: number) {
  return (((originPrice - price) / originPrice) * 100).toFixed(0);
}
