"use client";

import React, { useState, useRef } from "react";
import ProductBadge from "../../ui/product/ProductBadge";
import CompareProduct from "@/components/products/compare/CompareProduct";
import ProductImage from "../../ui/product/ProductImage";
import { IProduct } from "@/types";
import WishlistProduct from "@/components/products/wishlist/WishlistProduct";
import Button from "@/components/ui/Button";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import ProductPrice from "@/components/products/ProductPrice";
import { cn } from "@/lib/utils";

interface IProductsBlockProps {
	products: IProduct[];
	title?: string;
	displayMode?: "showMore" | "pagination" | "none";
	productCount?: number;
	listClassName?: string;
}

export default function ProductsBlock({
	products,
	displayMode = "none",
	productCount = 8,
	listClassName,
}: IProductsBlockProps) {
	// Number of products to show initially (for "Show More" mode)
	const [visibleCount, setVisibleCount] = useState(productCount);

	// Current page number (for pagination mode)
	const [currentPage, setCurrentPage] = useState(1);

	// Number of products to display per page
	const productsPerPage = productCount;

	// Determine which products should be visible based on the display mode
	// - In "pagination" mode: show products for the current page
	// - In "showMore" mode: show the first N products (visibleCount)
	const visibleProducts =
		displayMode === "pagination"
			? products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
			: products.slice(0, visibleCount);

	// "Show More" handler — increases the number of visible products by 8 each time
	const handleShowMore = () => setVisibleCount(prev => prev + productCount);

	// Calculate total number of pages (used for pagination buttons)
	const totalPages = Math.ceil(products.length / productsPerPage);

	const productsRef = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<div ref={productsRef}>
				<ul
					className={cn(
						"mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8",
						listClassName
					)}
				>
					{visibleProducts?.map(product => {
						return (
							<li
								key={product.id}
								className="relative group cursor-pointer flex flex-col"
							>
								<Link
									href={`/shop/${product.id}`}
									className="overflow-hidden block relative"
								>
									<ProductImage
										src={product.image}
										alt={product.title}
										className="group-hover:scale-105 transition-transform duration-300"
									/>

									<div className="absolute top-2 left-2 sm:top-4 sm:left-4 space-y-2">
										<CompareProduct productId={product.id} />

										<WishlistProduct productId={product.id} />
									</div>

									{product.badge && <ProductBadge badge={product.badge} />}
								</Link>

								{/* Text content */}
								<div className="bg-light pt-4 px-4 pb-7.5 grow">
									<p className="h6 mb-1.5 line-clamp-2">{product.title}</p>

									<p className="text-medium-base-gray-600 mb-2 line-clamp-2">
										{product.subtitle}
									</p>

									<div className="flex-y-center gap-4 flex-wrap">
										<ProductPrice
											price={product.price}
											className="text-semibold-xl-neutral-600"
										/>

										{product.oldPrice && (
											<ProductPrice
												price={product.oldPrice}
												oldPrice
												className="text-regular-16-gray-400"
											/>
										)}
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>

			{displayMode === "showMore" && visibleCount < products.length && (
				<Button
					onClick={handleShowMore}
					className="btn-primary-transparent max-w-61.5 h-12 font-semibold mx-auto"
				>
					Show More
				</Button>
			)}

			{/* Pagination Mode */}
			{displayMode === "pagination" && (
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					// onPageChange={setCurrentPage}
					onPageChange={page => {
						setCurrentPage(page);
						productsRef.current?.scrollIntoView({ behavior: "smooth" });
					}}
				/>
			)}
		</>
	);
}
