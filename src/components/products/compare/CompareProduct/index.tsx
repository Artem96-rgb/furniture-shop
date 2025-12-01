"use client";

import React from "react";
import { useCompareStore } from "@/store/compareProductsStore";
import Button from "@/components/ui/Button";
import { cn, notifySuccess } from "@/lib/utils";
import clsx from "clsx";
import { Scale } from "lucide-react";

interface ICompareProductProps {
	productId: string;
	className?: string;
	href?: string;
}

export default function CompareProduct({ productId, className }: ICompareProductProps) {
	const compareProducts = useCompareStore(state => state.compareProducts);
	const addCompareProduct = useCompareStore(state => state.addCompareProduct);
	const removeCompareProduct = useCompareStore(state => state.removeCompareProduct);

	const isAdded = compareProducts.includes(productId);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (isAdded) {
			removeCompareProduct(productId);
			notifySuccess("Product removed");
		} else {
			addCompareProduct(productId);

			notifySuccess("Product added to comparison");
		}
	};

	return (
		<>
			<Button
				className={cn(
					"w-8 h-8 bg-primary-500 rounded-full border-none text-white",
					className
				)}
				onClick={handleClick}
			>
				<Scale size="18" className={clsx(isAdded && "text-white fill-white")} />
			</Button>
		</>
	);
}
