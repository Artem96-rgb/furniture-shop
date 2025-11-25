"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BadgeCount from "@/components/ui/BadgeCount";
import { useWishlistStore } from "@/store/wishlistProductsStore";

interface IWishlistLinkProps {
	showCount?: boolean;
	children: React.ReactNode;
	className?: string;
}

export default function WishlistLink({ children, className, showCount }: IWishlistLinkProps) {
	// Get the list of products added to the wishlist from the wishlist store
	const wishlistProducts = useWishlistStore(state => state.wishlistProducts);

	return (
		<div className="relative">
			<Link
				href="/wishlist"
				className={cn("w-8 h-8 text-black hover:text-primary-500", className)}
			>
				{children}
			</Link>

			{showCount && <BadgeCount>{wishlistProducts.length}</BadgeCount>}
		</div>
	);
}
