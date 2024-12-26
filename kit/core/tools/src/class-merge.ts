import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names using `clsx` and `tailwind-merge`.
 *
 * Uses `clsx` for conditionally combining class names and `twMerge` to resolve conflicts
 * in Tailwind CSS classes.
 */
export function classMerge(...values: ClassValue[]) {
  return twMerge(clsx(values));
}
