import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { toast } from "react-toastify";

/**
 * Utility function that merges Tailwind CSS classes safely.
 * - Combines conditional class names using `clsx`.
 * - Resolves Tailwind class conflicts using `tailwind-merge`.
 *
 * Example:
 * ```tsx
 * cn("px-2 py-4", isActive && "bg-primary", "px-4") // -> "py-4 bg-primary px-4"
 * ```
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Format a number as currency with dots as a thousand separators.
 * Example: 500000 -> "500.000", 7500000 -> "7.500.000"
 */
export function formatPrice(price: number): string {
	return price.toLocaleString("id-ID");
}

export const notifySuccess = (message: string) => {
	toast.success(message);
};
