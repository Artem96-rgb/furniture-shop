"use client";

import HeroBlock from "@/components/blocks/HeroBlock";
import Link from "next/link";
import { products } from "@/data/products";
import { useCompareStore } from "@/store/compareProductsStore";
import ProductImage from "@/components/ui/ProductImage";
import ProductBadge from "@/components/ui/ProductBadge";

export default function ComparePage() {
	// Get the array of selected product IDs from the Zustand store
	const compareProducts = useCompareStore(state => state.compareProducts);

	// Filter the full products list to return only those
	// whose IDs exist in the compareProducts array
	const selectedProducts = products.filter(product => compareProducts.includes(product.id));

	return (
		<div>
			<HeroBlock
				backgroundImageUrl="hero.jpg"
				title="Product Comparison"
				breadcrumbTitle="Comparison"
				className="mb-8.5"
			/>

			<div className="container overflow-x-auto">
				<div className="flex mb-16">
					<div className="grow-0 shrink-0 basis-[25%] pl-15.5">
						<p className="h3 mb-5.5 max-w-55">Go to Product page for more Products</p>
						<Link
							href="/shop"
							className="text-xl/7.5 font-medium text-gray-700 underline underline-offset-6"
						>
							View More
						</Link>
					</div>

					{selectedProducts.length > 0 &&
						selectedProducts.map(selectedProduct => (
							<div
								className="grow-0 shrink-0 basis-[25%] px-4"
								key={selectedProduct.id}
							>
								<div className="h-44.25 overflow-hidden relative">
									<ProductImage
										src={selectedProduct.image}
										alt={selectedProduct.title}
									/>

									<ProductBadge badge={selectedProduct.badge} />
								</div>
								<p>{selectedProduct.title}</p>
								<p>{selectedProduct.price}</p>
							</div>
						))}
				</div>

				<div className="flex border-t border-gray-100">
					<div className="pt-10.5 px-10.5 border-r border-gray-100 grow-0 shrink-0 basis-[25%]">
						<p className="h3 mb-7">General</p>
						<div className="space-y-8">
							<p className="text-xl">Sales Package</p>
							<p className="text-xl">Model Number</p>
							<p className="text-xl">Configuration</p>
						</div>
					</div>

					{selectedProducts.length > 0 &&
						selectedProducts.map(selectedProduct => (
							<div
								key={selectedProduct.id}
								className="pt-10.5 px-15.5 border-r border-gray-100 grow-0 shrink-0 basis-[25%]"
							>
								<p className="h3 mb-5.5 max-w-55 opacity-0">General</p>
								<div className="space-y-8">
									<p className="text-xl">
										{selectedProduct.characteristics.salesPackage}
									</p>
									<p className="text-xl">
										{selectedProduct.characteristics.modelNumber}
									</p>
									<p className="text-xl">
										{selectedProduct.characteristics.configuration}
									</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
