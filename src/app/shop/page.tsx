"use client";

import { products } from "@/data/products";
import ProductsBlock from "@/components/blocks/ProductsBlock";
import HeroBlock from "@/components/blocks/HeroBlock";
import FeaturesBlock from "@/components/blocks/FeaturesBlock";
import { BadgeCheck, Headphones, Package, Trophy } from "lucide-react";

export default function ShopPage() {
	const features = [
		{
			id: "feature-1",
			icon: <Trophy size={60} />,
			title: "High Quality",
			subtitle: "top materials",
		},
		{
			id: "feature-2",
			icon: <BadgeCheck size={60} />,
			title: "Warranty Protection",
			subtitle: "Over 2 years",
		},
		{
			id: "feature-3",
			icon: <Package size={60} />,
			title: "Free Shipping",
			subtitle: "Order over 150 $",
		},
		{
			id: "feature-4",
			icon: <Headphones size={60} />,
			title: "24 / 7 Support",
			subtitle: "Dedicated support",
		},
	];

	return (
		<>
			<HeroBlock
				backgroundImageUrl="hero.jpg"
				title="Shop"
				breadcrumbTitle="Shop"
				className="mb-8.5"
			/>

			<ProductsBlock products={products} displayMode="pagination" />

			<FeaturesBlock features={features} />
		</>
	);
}
