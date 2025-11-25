"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useShoppingCartStore } from "@/store/shoppingCartStore";

interface IShoppingCartActionProps {
	productId: string;
	children: React.ReactNode;
	className?: string;
}

export default function ShoppingCartAction({
	productId,
	children,
	className,
}: IShoppingCartActionProps) {
	const addToCart = useShoppingCartStore(state => state.addToCart);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();

		addToCart(productId);
	};

	return (
		<Button className={cn(className)} onClick={handleClick}>
			{children}
		</Button>
	);
}
