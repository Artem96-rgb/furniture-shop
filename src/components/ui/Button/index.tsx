"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface IButtonProps {
	children: ReactNode;
	type?: "button" | "submit" | "reset";
	href?: string;
	className?: string;
}

export default function Button({ children, type = "button", href, className = "" }: IButtonProps) {
	if (href) {
		return (
			<Link href={href} className={`flex-center ${className}`}>
				{children}
			</Link>
		);
	}

	return (
		<button type={type} className={`flex-center ${className}`}>
			{children}
		</button>
	);
}
