"use client";

import React from "react";
import { useCompareStore } from "@/store/compareProductsStore";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BadgeCount from "@/components/ui/BadgeCount";

interface ICompareLinkProps {
	showCount?: boolean;
	children: React.ReactNode;
	className?: string;
}

export default function CompareLink({ children, className, showCount }: ICompareLinkProps) {
	// Get the list of products added to the compare from the compare store
	const compareProducts = useCompareStore(state => state.compareProducts);

	return (
		<div className="relative">
			<Link
				href="/comparison"
				className={cn("w-8 h-8 text-black hover:text-primary-500", className)}
			>
				{children}
			</Link>

			{showCount && <BadgeCount>{compareProducts.length}</BadgeCount>}
		</div>
	);
}
