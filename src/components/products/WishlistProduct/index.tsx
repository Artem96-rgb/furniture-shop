"use client";

import React from "react";
import { useWishlistStore } from "@/store/wishlistProductsStore";

interface IWishlistProductProps {
	productId: string;
	children: React.ReactNode;
	className?: string;
}

export default function WishlistProduct({ productId, children, className }: IWishlistProductProps) {
	const { wishlistProducts, addWishlistProduct, removeWishlistProduct } = useWishlistStore();

	const isAdded = wishlistProducts.includes(productId);

	const handleClick = () => {
		if (isAdded) {
			removeWishlistProduct(productId);
		} else {
			addWishlistProduct(productId);
		}
	};

	return (
		<button className={className} type="button" onClick={handleClick}>
			{children}
		</button>
	);
}
