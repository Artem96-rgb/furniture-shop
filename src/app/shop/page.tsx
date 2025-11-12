"use client";

import { products } from "@/data/products";
import ProductsBlock from "@/components/blocks/ProductsBlock";
import HeroBlock from "@/components/blocks/HeroBlock";

export default function ShopPage() {
	return (
		<>
			<HeroBlock
				backgroundImageUrl="hero.jpg"
				title="Shop"
				breadcrumbTitle="Shop"
				className="mb-8.5"
			/>
			<ProductsBlock products={products} displayMode="pagination" />
		</>
	);
}
