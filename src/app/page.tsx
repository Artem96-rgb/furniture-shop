"use client";

import HomeHeroBlock from "@/components/blocks/HomeHeroBlock";
import CategoriesBlock from "@/components/blocks/CategoriesBlock";
import ProductsBlock from "@/components/blocks/ProductsBlock";
import { products } from "@/data/products";

export default function Home() {
	const categories = [
		{
			id: 1,
			title: "Dining",
			image: {
				src: "/categories/dining.jpg",
				alt: "Dining",
			},
		},
		{
			id: 2,
			title: "Living",
			image: {
				src: "/categories/living.jpg",
				alt: "Living",
			},
		},
		{
			id: 3,
			title: "Bedroom",
			image: {
				src: "/categories/bedroom.jpg",
				alt: "Bedroom",
			},
		},
	];

	return (
		<>
			<HomeHeroBlock
				image={{
					src: "/home-hero.jpg",
					alt: "Home Hero",
					width: 1440,
					height: 717,
				}}
				subtitle="New Arrival"
				title="Discover Our New Collection"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
					nec ullamcorper mattis."
				link={{
					href: "/shop",
					title: "BUY NOW",
				}}
			/>

			<CategoriesBlock
				sectionTitle="Browse The Range"
				sectionDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				categories={categories}
			/>

			<ProductsBlock
				title="Our Products"
				products={products}
				displayMode="showMore"
				className="mb-15.5"
			/>
		</>
	);
}
