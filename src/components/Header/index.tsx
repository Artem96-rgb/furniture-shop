"use client";

import Link from "next/link";
import { Search, Heart, ShoppingCart, Menu as BurgerMenuIcon, Scale } from "lucide-react";
import { useState } from "react";
import { useCompareStore } from "@/store/compareProductsStore";
import { useWishlistStore } from "@/store/wishlistProductsStore";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import BadgeCount from "@/components/ui/BadgeCount";
import Button from "@/components/ui/Button";

export default function Header() {
	// Get the list of products added to the compare list from the compare store
	const compareProducts = useCompareStore(state => state.compareProducts);

	// Get the list of products added to the wishlist from the wishlist store
	const wishlistProducts = useWishlistStore(state => state.wishlistProducts);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuLinks = [
		{
			id: "menu-link-shop",
			title: "Shop",
			link: "/shop",
		},
		{
			id: "menu-link-about",
			title: "About",
			link: "/about",
		},
		{
			id: "menu-link-contact",
			title: "Contact",
			link: "/contact",
		},
	];

	const headerIcons = [
		{
			id: "header-icon-search",
			icon: Search,
		},
		{
			id: "header-icon-heart",
			icon: Heart,
			productCount: wishlistProducts.length,
			href: "/wishlist",
		},
		{
			id: "header-icon-compare",
			icon: Scale,
			productCount: compareProducts.length,
			href: "/comparison",
		},
		{
			id: "header-icon-shopping-cart",
			icon: ShoppingCart,
		},
	];

	return (
		<header className="py-7.25 sticky top-0 z-50 bg-white">
			<div className="container">
				<div className="flex-y-center justify-between gap-2">
					<Link href="/" className="flex-y-center gap-1.25 flex-wrap">
						<Logo />

						<span className="inline-block text-bold-32 leading-10.5">Furniro</span>
					</Link>

					<nav className="hidden lg:block">
						<Menu links={menuLinks} className="flex-center gap-19 flex-wrap" />
					</nav>

					<div className="flex-y-center justify-end gap-8 gap-xl-11.5 flex-wrap">
						{headerIcons?.map(item => {
							const Icon = item.icon;

							return (
								<div key={item.id} className="relative">
									<Button
										href={item.href}
										className="border-none hover:text-primary-500"
									>
										<Icon size={28} />

										{item.productCount != undefined && (
											<BadgeCount>{item.productCount}</BadgeCount>
										)}
									</Button>
								</div>
							);
						})}
					</div>

					<button
						type="button"
						className="text-right lg:hidden"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<BurgerMenuIcon size="32" />
					</button>
				</div>
			</div>
		</header>
	);
}
