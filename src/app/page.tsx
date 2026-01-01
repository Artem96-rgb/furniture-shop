import HomeHeroBlock from "@/components/blocks/HomeHeroBlock";
import CategoriesBlock from "@/components/blocks/CategoriesBlock";
import ProductsBlock from "@/components/blocks/ProductsBlock";
import Section from "@/layouts/Section";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function Home() {
	return (
		<>
			<HomeHeroBlock
				image="/home-hero.jpg"
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

			<Section title="Our Products" className="mb-15.5">
				<ProductsBlock title="Our Products" products={products} displayMode="showMore" />
			</Section>
		</>
	);
}
