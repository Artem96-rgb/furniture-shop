"use client";

import Link from "next/link";
import { Search, Heart, ShoppingCart, Menu, Scale } from "lucide-react";
import { useState } from "react";
import { useCompareStore } from "@/store/compareProductsStore";
import { useWishlistStore } from "@/store/wishlistProductsStore";
import Logo from "@/components/Logo";

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
			link: "shop",
		},
		{
			id: "menu-link-about",
			title: "About",
			link: "about",
		},
		{
			id: "menu-link-contact",
			title: "Contact",
			link: "contact",
		},
	];

	const headerIcons = [
		{
			id: "header-icon-search",
			icon: Search,
			type: "button",
		},
		{
			id: "header-icon-heart",
			icon: Heart,
			productCount: wishlistProducts.length,
			type: "link",
			href: "/wishlist",
		},
		{
			id: "header-icon-compare",
			icon: Scale,
			productCount: compareProducts.length,
			type: "link",
			href: "/comparison",
		},
		{
			id: "header-icon-shopping-cart",
			icon: ShoppingCart,
			type: "button",
		},
	];

	return (
		<header className="py-7.25 sticky top-0 z-50 bg-white">
			<div className="container">
				<div className="flex-y-center justify-between gap-2">
					<Link href="/" className="flex-y-center gap-1.25 flex-wrap">
						<Logo />

						<span className="inline-block font-bold text-[32px] leading-10.5">
							Furniro
						</span>
					</Link>

					<nav className="hidden lg:block">
						<ul className="flex-center gap-19 flex-wrap">
							{menuLinks.map(menuLink => (
								<li key={menuLink.id}>
									<Link href={menuLink.link}>{menuLink.title}</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className="flex-y-center justify-end gap-8 gap-xl-11.5 flex-wrap">
						{headerIcons.map(item => {
							const Icon = item.icon;

							const Badge = item.productCount !== undefined && (
								<span className="absolute -top-4 -right-4 w-5 h-5 rounded-full bg-primary text-white text-sm flex-center">
									{item.productCount}
								</span>
							);

							return (
								<div key={item.id} className="relative">
									{item.type === "link" ? (
										<Link href={item.href!} className="block">
											<Icon size={28} />
											{Badge}
										</Link>
									) : (
										<button type="button" className="block">
											<Icon size={28} />
											{Badge}
										</button>
									)}
								</div>
							);
						})}
					</div>

					<button
						type="button"
						className="text-right lg:hidden"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<Menu size="32" />
					</button>
				</div>
			</div>
		</header>
	);
}
