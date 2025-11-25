"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BadgeCount from "@/components/ui/BadgeCount";
import { useShoppingCartStore } from "@/store/shoppingCartStore";

interface IShoppingCartLinkProps {
	showCount?: boolean;
	children: React.ReactNode;
	className?: string;
}

export default function ShoppingCartLink({
	children,
	className,
	showCount,
}: IShoppingCartLinkProps) {
	// Get the list of products added to the wishlist from the wishlist store
	const cartProducts = useShoppingCartStore(state => state.cartProducts);

	return (
		<div className="relative">
			<Link
				href="/cart"
				className={cn("w-8 h-8 text-black hover:text-primary-500", className)}
			>
				{children}
			</Link>

			{showCount && <BadgeCount>{cartProducts.length}</BadgeCount>}
		</div>
	);
}
