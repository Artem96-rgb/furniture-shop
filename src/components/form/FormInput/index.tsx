"use client";

import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	register?: UseFormRegisterReturn;
}

export default function FormInput({
	register,
	className = "",
	type = "text",
	...rest
}: IFormInputProps) {
	return (
		<input
			type={type}
			{...(register ? register : {})}
			{...rest}
			className={cn(
				"w-full border border-gray-500 rounded-lg h-13 px-8 text-base placeholder:text-gray-500 focus:outline-0 block",
				className
			)}
		/>
	);
}
