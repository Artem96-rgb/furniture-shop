"use client";

import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

interface IFormTextAreaProps {
	id?: string;
	className?: string;
	placeholder?: string;
	register?: UseFormRegisterReturn;
}

export default function FormTextArea({
	id,
	className = "",
	placeholder,
	register,
}: IFormTextAreaProps) {
	return (
		<textarea
			id={id}
			placeholder={placeholder}
			{...(register ? register : {})}
			className={cn(
				"w-full border border-gray-500 rounded-lg h-30 px-8 py-6.5 text-base placeholder:text-gray-500 resize-none",
				className
			)}
		/>
	);
}
