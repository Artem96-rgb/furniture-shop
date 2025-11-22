"use client";

import { useState, useRef } from "react";
import ProductBadge from "@/components/ui/ProductBadge";
import CompareProduct from "@/components/products/CompareProduct";
import { Scale, Heart } from "lucide-react";
import ProductImage from "@/components/ui/ProductImage";
import { IProduct } from "@/types";
import WishlistProduct from "@/components/products/WishlistProduct";
import Button from "@/components/ui/Button";
import Pagination from "@/components/Pagination";
import Link from "next/link";

interface IProductsBlcokProps {
	products: IProduct[];
	title?: string;
	displayMode?: "showMore" | "pagination" | "none";
	productCount?: number;
	className?: string;
}

export default function ProductsBlock({
	products,
	title,
	displayMode = "none",
	productCount = 8,
	className,
}: IProductsBlcokProps) {
	// Use a dynamic HTML tag based on whether the title exists.
	// If there is a title, render a <section>; otherwise, render a <div>.
	const Tag = title ? "section" : "div";

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
		<Tag className={className}>
			<div className="container">
				{title && (
					<div className="text-center mb-4 lg:mb-8">
						<h2>{title}</h2>
					</div>
				)}

				<div ref={productsRef}>
					<ul className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
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

										<div className="absolute top-4 left-4 space-y-2">
											<CompareProduct productId={product.id}>
												<Scale size="18" />
											</CompareProduct>

											<WishlistProduct productId={product.id}>
												<Heart size="18" />
											</WishlistProduct>
										</div>

										{product.badge && <ProductBadge badge={product.badge} />}
									</Link>

									{/* Text content */}
									<div className="bg-light pt-4 px-4 pb-7.5 grow">
										<p className="h4 mb-1.5 line-clamp-2">{product.title}</p>

										<p className="text-medium-base-gray-600 mb-2 line-clamp-2">
											{product.subtitle}
										</p>

										<div className="flex-y-center gap-4 flex-wrap">
											<span className="text-semibold-xl-neutral-600">
												{product.price}
											</span>

											{product.oldPrice && (
												<span className="text-regular-16-gray-400 line-through">
													{product.oldPrice}
												</span>
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
						className="max-w-61.5 h-12 border border-primary text-primary-500 font-semibold mt-8 mx-auto hover:bg-primary-500 hover:text-white"
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
			</div>
		</Tag>
	);
}
