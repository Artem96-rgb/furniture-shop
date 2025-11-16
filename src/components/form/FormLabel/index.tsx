"use client";

interface IFormLabelProps {
	label: string;
	required?: boolean;
	htmlFor?: string;
}

export default function FormLabel({ label, required = false, htmlFor }: IFormLabelProps) {
	return (
		<label htmlFor={htmlFor} className="text-medium-base mb-5.5 relative max-w-max block">
			{label}
			{required && <span className="absolute top-0 -right-2 text-accent-red">*</span>}
		</label>
	);
}
