"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { cn, notifySuccess } from "@/lib/utils";
import { useShoppingCartStore } from "@/store/shoppingCartStore";

interface IShoppingCartActionProps {
	productId: string;
	className?: string;
}

export default function ShoppingCartAction({ productId, className }: IShoppingCartActionProps) {
	const addToCart = useShoppingCartStore(state => state.addToCart);
	const cartProducts = useShoppingCartStore(state => state.cartProducts);

	const isAdded = cartProducts.some(item => item.id === productId);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();

		addToCart(productId);
		notifySuccess("Product added to shopping cart");
	};

	return (
		<>
			{isAdded ? (
				<Button href="/cart" className={cn(className)}>
					Go to cart
				</Button>
			) : (
				<Button className={cn(className)} onClick={handleClick}>
					Add To Cart
				</Button>
			)}
		</>
	);
}
