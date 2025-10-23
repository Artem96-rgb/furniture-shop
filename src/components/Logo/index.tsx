"use client";

import Image from "next/image";
import clsx from "clsx";

interface ILogoProps {
	className?: string;
}

export default function Logo({ className }: ILogoProps) {
	return (
		<div className={clsx("max-w-12.5", className)}>
			<Image src="/logo.png" alt="Logo" width="50" height="32" />
		</div>
	);
}
