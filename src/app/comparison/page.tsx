"use client";

import HeroBlock from "@/components/blocks/HeroBlock";
import { products } from "@/data/products";
import { useCompareStore } from "@/store/compareProductsStore";
import NoProductsMessage from "@/components/blocks/NoProductsMessage";
import ProductsBlock from "@/components/blocks/ProductsBlock";

type CharacteristicKey = "salesPackage" | "modelNumber" | "configuration";

export default function ComparePage() {
	// Get the array of selected product IDs from the Zustand store
	const compareProducts = useCompareStore(state => state.compareProducts);

	// Filter the full products list to return only those
	// whose IDs exist in the compareProducts array
	const selectedProducts = products.filter(product => compareProducts.includes(product.id));

	const characteristics: { key: CharacteristicKey; title: string }[] = [
		{ key: "salesPackage", title: "Sales Package" },
		{ key: "modelNumber", title: "Model Number" },
		{ key: "configuration", title: "Configuration" },
	];

	return (
		<div className="pb-8.5">
			<HeroBlock
				backgroundImageUrl="hero.jpg"
				title="Product Comparison"
				breadcrumbTitle="Comparison"
				className="mb-8.5"
			/>

			<div className="container">
				{compareProducts?.length > 0 ? (
					<div className="overflow-x-auto border border-gray-100 space-y-4">
						<ProductsBlock
							products={selectedProducts}
							listClassName="inline-grid grid-flow-col auto-cols-[25%] grid-cols-none md:grid-cols-none lg:grid-cols-none gap-0 lg:gap-0 w-full"
						/>

						<div>
							{characteristics.map(item => (
								<div key={item.key} className="relative">
									<div className="bg-gray-100 py-4">
										<p className="text-sm font-medium text-center">
											{item.title}
										</p>
									</div>

									<div className="inline-grid grid-flow-col auto-cols-[25%] text-center w-full">
										{selectedProducts.map(product => (
											<div
												key={product.id}
												className="py-4 border-r border-gray-100 last:border-r-0 "
											>
												<p className="text-sm">
													{product.characteristics[item.key]}
												</p>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<NoProductsMessage
						title="No products to compare"
						subtitle="For comparison, add multiple products. To do this, find the desired product and click the compare products button"
					/>
				)}
			</div>
		</div>
	);
}
