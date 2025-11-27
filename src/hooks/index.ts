import { useEffect, RefObject, useState } from "react";

/**
 * useClickOutside
 *
 * A custom React hook that triggers a callback when a click occurs outside the specified element.
 *
 * @param {React.RefObject<HTMLElement | null>} ref - A reference to the HTML element to detect outside clicks on.
 * @param {() => void} callback - The function to call when an outside click is detected.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useClickOutside(ref, () => {
 *   setIsDropdownOpen(false);
 * });
 */
export const useClickOutside = (ref: RefObject<HTMLElement | null>, callback: () => void) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, callback]);
};

/**
 * useDebounce
 *
 * Returns a debounced version of a value that updates only after the specified delay.
 *
 * @param value - the value to debounce
 * @param delay - delay in milliseconds
 * @returns debouncedValue
 *
 * @example
 * const debouncedQuery = useDebounce(query, 300);
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// Clear the timer when the value changes or when unmounting
		return () => clearTimeout(handler);
	}, [value, delay]);

	return debouncedValue;
}
