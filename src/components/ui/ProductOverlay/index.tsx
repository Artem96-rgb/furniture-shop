"use client";

import { ReactNode } from "react";

interface IProductOverlay {
	children: ReactNode;
}

export default function ProductOverlay({ children }: IProductOverlay) {
	return (
		<div className="absolute inset-0 bg-neutral-700/50 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center items-center gap-4">
			{children}
		</div>
	);
}
