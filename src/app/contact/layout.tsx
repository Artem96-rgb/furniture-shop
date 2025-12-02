import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Contact — Furniro Furniture Hardware",
	description:
		"Get in touch with Furniro. Contact us for questions about furniture hardware, orders, or any support regarding handles, hinges, furniture legs, and more.",
	keywords: ["contact", "support", "customer service"],
};

export default function ContactLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
