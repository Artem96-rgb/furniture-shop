"use client";

import React from "react";
import { useWishlistStore } from "@/store/wishlistProductsStore";
import Button from "@/components/ui/Button";
import { cn, notifySuccess } from "@/lib/utils";
import { Heart } from "lucide-react";
import clsx from "clsx";

interface IWishlistProductProps {
	productId: string;
	className?: string;
}

export default function WishlistProduct({ productId, className }: IWishlistProductProps) {
	// Get the list of products currently added to the wishlist
	const wishlistProducts = useWishlistStore(state => state.wishlistProducts);

	// Functions to add or remove a product from the wishlist list
	const addWishlistProduct = useWishlistStore(state => state.addWishlistProduct);
	const removeWishlistProduct = useWishlistStore(state => state.removeWishlistProduct);

	// Check if the current product is already in the wishlist list
	const isAdded = wishlistProducts.includes(productId);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (isAdded) {
			removeWishlistProduct(productId);
			notifySuccess("Product removed");
		} else {
			addWishlistProduct(productId);
			notifySuccess("Product added to wishlist");
		}
	};

	return (
		<Button
			className={cn("w-8 h-8 bg-primary-500 rounded-full border-none text-white", className)}
			onClick={handleClick}
		>
			<Heart size="18" className={clsx(isAdded && "text-white fill-white")} />
		</Button>
	);
}
