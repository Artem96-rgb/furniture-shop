"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import ProductGallery from "@/components/products/ProductGallery";
import Image from "next/image";
import ProductsBlock from "@/components/blocks/ProductsBlock";
import Breadcrumbs from "@/components/blocks/Breadcrumbs";
// import Button from "@/components/ui/Button";
import ShoppingCartAction from "@/components/products/shoppingCart/ShoppingCartAction";
import ProductPrice from "@/components/products/ProductPrice";
import Section from "@/layouts/Section";

export default function ProductPage() {
	// get the parameter from the URL
	const { productId } = useParams<{ productId: string }>();

	// Search for a product by ID
	const product = products.find(p => p.id === productId);

	// Find related products by category (exclude the current product)
	const relatedProducts = products.filter(
		p => p.category === product?.category && p.id !== product?.id
	);

	const breadcrumbs = [
		{
			id: "breadcrumbs-link-home",
			title: "Home",
			link: "/",
		},
		{
			id: "breadcrumbs-link-shop",
			title: "Shop",
			link: "/shop",
		},
		{
			id: "breadcrumbs-link-product-title",
			title: `${product?.title}`,
		},
	];

	return (
		<div className="pb-23">
			<div className="mb-9 bg-light-secondary py-5 lg:py-9.5">
				<div className="container">
					<Breadcrumbs breadcrumbs={breadcrumbs} />
				</div>
			</div>

			{product && (
				<>
					<div className="flex justify-between gap-5 mb-8 lg:mb-16 container flex-col lg:flex-row">
						{product.images && (
							<ProductGallery
								images={product.images}
								productId={productId}
								className="max-w-138.5 min-w-0"
							/>
						)}

						<div className="max-w-151.5">
							<p className="h2 mb-4">{product.title}</p>

							<div className="flex-y-center gap-4 flex-wrap mb-5">
								<ProductPrice
									price={product.price}
									className="text-medium-2xl-black"
								/>

								{product.oldPrice && (
									<ProductPrice
										price={product.oldPrice}
										oldPrice
										className="text-regular-xl-gray-400"
									/>
								)}
							</div>

							<div className="mb-5.5">
								<p className="text-sm">{product.shortDescription}</p>
							</div>

							{/*{product.attributes?.colors && (*/}
							{/*	<div className="mb-8">*/}
							{/*		<p className="text-regular-14-gray-500 mb-3">Color</p>*/}

							{/*		<div className="flex-y-center flex-wrap gap-5">*/}
							{/*			{product.attributes.colors.map(color => (*/}
							{/*				<Button*/}
							{/*					key={color.id}*/}
							{/*					className="w-7.5 h-7.5 rounded-full border-none"*/}
							{/*				>*/}
							{/*					<span*/}
							{/*						style={{ backgroundColor: color.title }}*/}
							{/*						className="block w-full h-full rounded-full"*/}
							{/*					></span>*/}
							{/*				</Button>*/}
							{/*			))}*/}
							{/*		</div>*/}
							{/*	</div>*/}
							{/*)}*/}

							<div className="flex gap-2.5 flex-wrap mb-7.5 lg:mb-15">
								<ShoppingCartAction
									className="max-w-54 h-14 rounded-md px-2 btn-transparent text-xl"
									productId={productId}
								/>
							</div>

							<hr className="text-gray-300 mb-8 lg:mb-10.5" />

							<p className="text-regular-16-gray-500 mb-3">SKU: {product?.sku}</p>
							<p className="text-regular-16-gray-500">Category: {product.category}</p>
						</div>
					</div>

					<hr className="text-gray-300 mb-8 lg:mb-12" />

					<div className="container">
						{product.description && (
							<div className="space-y-7.5 mb-9">
								{product.description?.map(description => (
									<p key={description.id} className="text-regular-16-gray-500">
										{description.content}
									</p>
								))}
							</div>
						)}

						{product.descriptionImages && (
							<div className="grid lg:grid-cols-2 gap-7.5">
								{product.descriptionImages.map(descriptionImage => (
									<div key={descriptionImage.id}>
										<Image
											src={descriptionImage.image.src}
											alt={descriptionImage.image.alt}
											width={descriptionImage.image.width}
											height={descriptionImage.image.height}
											className="object-cover w-full"
										/>
									</div>
								))}
							</div>
						)}
					</div>

					{relatedProducts.length > 0 && (
						<>
							<hr className="text-gray-300 mt-10.5 mb-8 lg:mt-16.5 lg:mb-14" />

							<Section title="Related Products">
								<ProductsBlock
									products={relatedProducts}
									displayMode="showMore"
									productCount={4}
								/>
							</Section>
						</>
					)}
				</>
			)}
		</div>
	);
}
