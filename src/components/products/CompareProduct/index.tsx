"use client";

import React from "react";
import { useCompareStore } from "@/store/compareProductsStore";

interface ICompareProductProps {
	productId: number;
	children: React.ReactNode;
	className?: string;
}

export default function CompareProduct({ productId, children, className }: ICompareProductProps) {
	const { compareProducts, addCompareProduct, removeCompareProduct } = useCompareStore();

	const isAdded = compareProducts.includes(productId);

	const handleClick = () => {
		if (isAdded) {
			removeCompareProduct(productId);
		} else {
			addCompareProduct(productId);
		}
	};

	return (
		<button className={className} type="button" onClick={handleClick}>
			{children}
		</button>
	);
}
