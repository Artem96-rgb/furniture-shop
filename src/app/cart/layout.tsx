import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Cart — Furniro Furniture Hardware",
	description:
		"Your cart at Furniro. Manage your selected hardware products, update quantities, and finalize your purchase quickly and securely.",
	keywords: ["cart", "products"],
};

export default function CartLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
