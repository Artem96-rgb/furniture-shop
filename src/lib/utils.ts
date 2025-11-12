import { twMerge } from "tailwind-merge";
import clsx from "clsx";

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
export function cn(...inputs: (string | undefined | null | false)[]) {
	return twMerge(clsx(inputs));
}
