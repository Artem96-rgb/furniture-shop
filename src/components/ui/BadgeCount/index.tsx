"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IBadgeCountProps {
	children: ReactNode;
	className?: string;
}

export default function BadgeCount({ children, className }: IBadgeCountProps) {
	return (
		<span
			className={cn(
				"absolute -top-4 -right-4 w-5 h-5 rounded-full bg-primary-500 text-regular-14-white flex-center",
				className
			)}
		>
			{children}
		</span>
	);
}
