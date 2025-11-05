"use client";

import Link from "next/link";
import { ReactNode, ElementType } from "react";
import clsx from "clsx";

interface IButtonProps {
	children: ReactNode;
	type?: "button" | "submit" | "reset";
	href?: string;
	className?: string;
}

export default function Button({ children, type = "button", href, className }: IButtonProps) {
	const Component: ElementType = href ? Link : "button";

	return (
		<Component {...(href ? { href } : { type })} className={clsx("flex-center", className)}>
			{children}
		</Component>
	);
}
