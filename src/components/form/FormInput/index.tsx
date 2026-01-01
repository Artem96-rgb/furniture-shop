import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function FormInput({
	className = "",
	type = "text",
	...rest
}: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			type={type}
			{...rest}
			className={cn(
				"w-full border border-gray-500 rounded-lg h-13 px-8 text-base placeholder:text-gray-500 block",
				className
			)}
		/>
	);
}
