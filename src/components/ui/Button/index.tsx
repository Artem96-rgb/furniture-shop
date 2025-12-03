"use client";

import Link from "next/link";
import { ReactNode, ElementType, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	href?: string;
}

export default function Button({
	children,
	type = "button",
	href,
	className,
	onClick,
}: IButtonProps) {
	const Component: ElementType = href ? Link : "button";

	return (
		<Component
			{...(href ? { href } : { type, onClick })}
			className={cn("flex-center w-full text-base border rounded-lg", className)}
		>
			{children}
		</Component>
	);
}
