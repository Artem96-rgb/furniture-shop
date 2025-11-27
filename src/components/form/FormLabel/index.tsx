"use client";

interface IFormLabelProps {
	label: string;
	required?: boolean;
	htmlFor?: string;
	asDiv?: boolean;
}

export default function FormLabel({
	label,
	required = false,
	htmlFor,
	asDiv = false,
}: IFormLabelProps) {
	const Tag = asDiv ? "div" : "label";

	return (
		<Tag
			htmlFor={!asDiv ? htmlFor : undefined}
			className="text-medium-base mb-2 lg:mb-5.5 relative max-w-max block"
		>
			{label}
			{required && <span className="absolute top-0 -right-2 text-accent-red">*</span>}
		</Tag>
	);
}
