import { ReactNode } from "react";
import { Metadata } from "next";
import { products } from "@/data/products";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ productId: string }>;
}): Promise<Metadata> {
	const { productId } = await params;
	const product = products.find(product => product.id === productId);

	if (!product) {
		return {
			title: "Product Not Found — Furniro",
			description: "The product does not exist.",
			keywords: [],
		};
	}

	return {
		title: `${product.title} — Furniro Furniture Hardware`,
		description: `Browse ${product.title} furniture hardware at Furniro. Find handles, hinges, furniture legs, and more for your ${product.title.toLowerCase()}.`,
		keywords: [
			product.title.toLowerCase(),
			"furniro",
			"furniture hardware",
			"handles",
			"hinges",
			"furniture legs",
		],
	};
}

export default function ProductLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
