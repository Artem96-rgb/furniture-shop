import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useClickOutside } from "@/hooks";
import clsx from "clsx";

interface IFormSelectProps {
	value: string | undefined;
	onChange: (value: string) => void;
	options: {
		label: string;
		value: string;
	}[];
	placeholder?: string;
}

export default function FormSelect({
	value,
	onChange,
	options,
	placeholder = "Select...",
}: IFormSelectProps) {
	// Controls whether the dropdown menu is open or closed
	const [open, setOpen] = useState(false);

	// Find the label of the currently selected option based on the stored value
	const selectedLabel = options.find(o => o.value === value)?.label;

	// Refs to handle click-outside logic for dropdowns
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close type dropdown if user clicks outside
	useClickOutside(dropdownRef, () => setOpen(false));

	return (
		<div className="relative" ref={dropdownRef}>
			<div
				className={clsx(
					"w-full border border-gray-500 h-13 px-8 flex-y-center justify-between cursor-pointer",
					open ? "rounded-t-lg" : "rounded-lg"
				)}
				onClick={() => setOpen(!open)}
			>
				<span className={clsx(!selectedLabel ? "text-regular-16-gray-500" : "text-base")}>
					{selectedLabel || placeholder}
				</span>

				<ChevronDown size={16} />
			</div>

			{open && (
				<ul className="absolute w-full bg-white border-x border-b border-gray-500 rounded-b-lg shadow-lg z-20">
					{options.map(option => (
						<li
							key={option.value}
							className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
							onClick={() => {
								onChange(option.value);
								setOpen(false);
							}}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
