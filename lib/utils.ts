import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatYearRange(start: string, end: string | null) {
  const endLabel = end ?? 'present';
  return `${start} — ${endLabel}`;
}
