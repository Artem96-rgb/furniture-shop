"use client";

import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

interface IFormInputProps {
	id?: string;
	className?: string;
	placeholder?: string;
	register?: UseFormRegisterReturn;
	type?: string;
}

export default function FormInput({
	id,
	className = "",
	placeholder,
	register,
	type = "text",
}: IFormInputProps) {
	return (
		<input
			id={id}
			placeholder={placeholder}
			type={type}
			{...(register ? register : {})}
			className={cn(
				"w-full border border-gray-500 rounded-lg h-13 px-8 text-base placeholder:text-gray-500 focus:outline-0 block",
				className
			)}
		/>
	);
}
