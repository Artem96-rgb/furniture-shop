"use client";

import HeroBlock from "@/components/blocks/HeroBlock";
import Link from "next/link";
import { products } from "@/data/products";
import { useCompareStore } from "@/store/compareProductsStore";
import ProductImage from "@/components/ui/ProductImage";
import ProductBadge from "@/components/ui/ProductBadge";
import NoProductsMessage from "@/components/blocks/NoProductsMessage";

export default function ComparePage() {
	// Get the array of selected product IDs from the Zustand store
	const compareProducts = useCompareStore(state => state.compareProducts);

	// Filter the full products list to return only those
	// whose IDs exist in the compareProducts array
	const selectedProducts = products.filter(product => compareProducts.includes(product.id));

	const productGeneralCharacteristics = [
		{
			id: "general-characteristic-1",
			title: "Sales Package",
		},
		{
			id: "general-characteristic-2",
			title: "Model Number",
		},
		{
			id: "general-characteristic-3",
			title: "Configuration",
		},
	];

	return (
		<div>
			<HeroBlock
				backgroundImageUrl="hero.jpg"
				title="Product Comparison"
				breadcrumbTitle="Comparison"
				className="mb-8.5"
			/>

			<div className="container">
				{compareProducts?.length > 0 ? (
					<div className="overflow-x-auto">
						<div className="grid grid-cols-3 lg:grid-flow-col lg:auto-cols-[310px] mb-16">
							<div className="lg:pl-10.5">
								<p className="h3 mb-5.5 lg:max-w-55">
									Go to Product page for more Products
								</p>
								<Link
									href="/shop"
									className="text-xl/7.5 font-medium text-gray-700 underline underline-offset-6"
								>
									View More
								</Link>
							</div>

							{selectedProducts?.map(selectedProduct => (
								<div className="px-4" key={selectedProduct.id}>
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

								{productGeneralCharacteristics?.length > 0 && (
									<div className="space-y-8">
										{productGeneralCharacteristics.map(
											productGeneralCharacteristic => (
												<p
													key={productGeneralCharacteristic.id}
													className="text-xl"
												>
													{productGeneralCharacteristic.title}
												</p>
											)
										)}
									</div>
								)}
							</div>

							{selectedProducts?.length > 0 &&
								selectedProducts.map(selectedProduct => (
									<div
										key={selectedProduct.id}
										className="pt-10.5 px-15.5 border-r border-gray-100 grow-0 shrink-0 basis-[25%]"
									>
										<p className="h3 mb-7 max-w-55 opacity-0">General</p>

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
