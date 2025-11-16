"use client";

import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

interface IFormInputProps {
	id?: string;
	className?: string;
	placeholder?: string;
	register?: UseFormRegisterReturn;
}

export default function FormInput({ id, className = "", placeholder, register }: IFormInputProps) {
	return (
		<input
			id={id}
			placeholder={placeholder}
			{...(register ? register : {})}
			className={cn(
				"w-full border border-gray-500 rounded-lg h-18.75 px-8 text-base placeholder:text-gray-500",
				className
			)}
		/>
	);
}
