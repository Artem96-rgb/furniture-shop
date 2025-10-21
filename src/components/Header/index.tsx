"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Search, Heart, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
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
			id: "header-icon-user",
			icon: User,
		},
		{
			id: "header-icon-search",
			icon: Search,
		},
		{
			id: "header-icon-heart",
			icon: Heart,
		},
		{
			id: "header-icon-shopping-cart",
			icon: ShoppingCart,
		},
	];

	return (
		<header className="py-7.25">
			<div className="container">
				<div className="flex-y-center justify-between gap-2">
					<div className="flex-y-center gap-1.25 flex-wrap">
						<div className="max-w-12.5">
							<Image src="/logo.png" alt="Logo" width="50" height="32" />
						</div>
						<span className="inline-block font-bold text-[32px] leading-10.5">
							Furniro
						</span>
					</div>

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
						{headerIcons.map(headerIcon => (
							<div key={headerIcon.id}>
								<headerIcon.icon size="28" />
							</div>
						))}
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
