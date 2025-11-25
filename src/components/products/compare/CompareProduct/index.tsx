"use client";

import React from "react";
import { useCompareStore } from "@/store/compareProductsStore";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ICompareProductProps {
	productId: string;
	children: React.ReactNode;
	className?: string;
	href?: string;
}

export default function CompareProduct({ productId, children, className }: ICompareProductProps) {
	const compareProducts = useCompareStore(state => state.compareProducts);
	const addCompareProduct = useCompareStore(state => state.addCompareProduct);
	const removeCompareProduct = useCompareStore(state => state.removeCompareProduct);

	const isAdded = compareProducts.includes(productId);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (isAdded) {
			removeCompareProduct(productId);
		} else {
			addCompareProduct(productId);
		}
	};

	return (
		<Button
			className={cn("w-8 h-8 bg-primary-500 rounded-full border-none text-white", className)}
			onClick={handleClick}
		>
			{children}
		</Button>
	);
}
