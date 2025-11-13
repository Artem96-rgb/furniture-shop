"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface INoProductsMessageProps {
	title: string;
	subtitle: string;
}

export default function NoProductsMessage({ title, subtitle }: INoProductsMessageProps) {
	return (
		<div className="text-center space-y-2 mb-2">
			<p className="h2">{title}</p>
			<p className="text-base md:text-lg lg:text-xl font-medium text-gray-500 leading-7.5">
				{subtitle}
			</p>
			<Button href="/shop" className="max-w-max btn-primary mx-auto p-2">
				View More
			</Button>
		</div>
	);
}
