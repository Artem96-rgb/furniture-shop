"use client";

import Link from "next/link";
import { Heart, Menu as BurgerMenuIcon, Scale, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Button from "@/components/ui/Button";
import CompareLink from "@/components/products/compare/CompareLInk";
import WishlistLink from "@/components/products/wishlist/WishlistLink";
import ShoppingCartLink from "@/components/products/shoppingCart/ShoppingCartLink";

export default function Header() {
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

	return (
		<header className="py-4 lg:py-7.25 sticky top-0 z-50 bg-white">
			<div className="container">
				<div className="flex-y-center justify-between flex-wrap gap-6 lg:gap-2">
					<Link
						href="/"
						className="flex-y-center gap-1.25 flex-wrap max-lg:basis-full max-lg:justify-center"
					>
						<Logo />

						<span className="inline-block text-bold-32 leading-10.5">Furniro</span>
					</Link>

					<nav className="max-lg:hidden">
						<Menu links={menuLinks} className="flex-center gap-19 flex-wrap" />
					</nav>

					<div className="flex-y-center justify-end gap-8 gap-xl-10 flex-wrap max-lg:order-2">
						<WishlistLink showCount className="flex-center">
							<Heart size={28} />
						</WishlistLink>

						<CompareLink showCount className="flex-center">
							<Scale size={28} />
						</CompareLink>

						<ShoppingCartLink showCount className="flex-center">
							<ShoppingCart size={28} />
						</ShoppingCartLink>
					</div>

					<button
						type="button"
						className="text-right lg:hidden max-lg:order-1"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<BurgerMenuIcon size="32" />
					</button>
				</div>
				<div className="lg:hidden">
					<div
						className={`
								fixed inset-0 z-40 bg-black/70 transition-opacity duration-300
								${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
							`}
						onClick={() => setIsMobileMenuOpen(false)}
					/>

					<div
						className={`
								fixed top-0 left-0 z-50 max-w-80 w-full h-full bg-white py-5 px-2
								transition-transform duration-300
								${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
							`}
					>
						<Menu
							links={menuLinks}
							className="flex-center gap-10 lg:gap-19 flex-wrap flex-col h-full"
						/>

						<Button
							className="border-none absolute top-3 right-3 w-8 h-8 text-black"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<X size={26} />
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
