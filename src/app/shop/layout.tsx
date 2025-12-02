import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Shop — Furniro Furniture Hardware",
	description:
		"Explore our full collection of furniture hardware at Furniro. Handles, hinges, furniture legs, and more for your home and interior.",
	keywords: ["shop"],
};

export default function ShopLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
