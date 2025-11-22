"use client";

import React from "react";
import { useWishlistStore } from "@/store/wishlistProductsStore";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface IWishlistProductProps {
	productId: string;
	children: React.ReactNode;
	className?: string;
}

export default function WishlistProduct({ productId, children, className }: IWishlistProductProps) {
	const { wishlistProducts, addWishlistProduct, removeWishlistProduct } = useWishlistStore();

	const isAdded = wishlistProducts.includes(productId);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (isAdded) {
			removeWishlistProduct(productId);
		} else {
			addWishlistProduct(productId);
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
