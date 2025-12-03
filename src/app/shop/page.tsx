"use client";

import { products } from "@/data/products";
import { features } from "@/data/features";
import ProductsBlock from "@/components/blocks/ProductsBlock";
import HeroBlock from "@/components/blocks/HeroBlock";
import FeaturesBlock from "@/components/blocks/FeaturesBlock";

export default function ShopPage() {
	return (
		<>
			<HeroBlock
				backgroundImageUrl="hero.jpg"
				title="Shop"
				breadcrumbTitle="Shop"
				className="mb-8.5"
			/>

			<div className="container mb-10 lg:mb-21.5">
				<ProductsBlock products={products} displayMode="pagination" />
			</div>

			<FeaturesBlock features={features} />
		</>
	);
}
