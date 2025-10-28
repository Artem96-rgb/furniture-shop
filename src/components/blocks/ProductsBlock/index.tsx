"use client";

import ProductBadge from "@/components/ui/ProductBadge";
import CompareProduct from "@/components/products/CompareProduct";
import { Scale, Heart } from "lucide-react";
import ProductImage from "@/components/ui/ProductImage";
import ProductOverlay from "@/components/ui/ProductOverlay";
import { IProduct } from "@/types";
import WishlistProduct from "@/components/products/WishlistProduct";
import { useCompareStore } from "@/store/compareProductsStore";
import { useWishlistStore } from "@/store/wishlistProductsStore";

interface IProductsProps {
	products: IProduct[];
	title?: string;
}

export default function ProductsBlock({ products, title }: IProductsProps) {
	// Get the list of products added to the compare list from the compare store
	const compareProducts = useCompareStore(state => state.compareProducts);

	// Get the list of products added to the wishlist from the wishlist store
	const wishlistProducts = useWishlistStore(state => state.wishlistProducts);

	// Use a dynamic HTML tag based on whether the title exists.
	// If there is a title, render a <section>; otherwise, render a <div>.
	const Tag = title ? "section" : "div";

	return (
		<Tag className="mb-15.5">
			<div className="container">
				{title && (
					<div className="text-center mb-8">
						<h2>{title}</h2>
					</div>
				)}

				<ul className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{products.map(product => {
						const isCompare = compareProducts.includes(product.id);
						const isWishlist = wishlistProducts.includes(product.id);

						return (
							<li key={product.id} className="relative group cursor-pointer">
								<div className="overflow-hidden">
									<ProductImage
										src={product.image}
										alt={product.title}
										className="group-hover:scale-105 transition-transform duration-300"
									/>

									{/* Hover overlay */}
									<ProductOverlay>
										<button className="bg-white text-black font-medium py-2 px-6 rounded-md">
											Add to cart
										</button>

										<div className="flex gap-4 text-white text-sm">
											<button>Share</button>

											<CompareProduct
												className={`flex-y-center gap-0.5 text-base font-semibold ${isCompare ? "text-primary" : "text-white "}`}
												productId={product.id}
											>
												<Scale size="16" />
												Compare
											</CompareProduct>

											<WishlistProduct
												className={`flex-y-center gap-0.5 text-base font-semibold ${isWishlist ? "text-primary" : "text-white "}`}
												productId={product.id}
											>
												<Heart size="16" />
												Like
											</WishlistProduct>
										</div>
									</ProductOverlay>

									<ProductBadge badge={product.badge} />
								</div>

								{/* Text content */}
								<div className="bg-light pt-4 px-4 pb-7.5">
									<p className="h4">{product.title}</p>
									<p className="text-gray-500 text-base mb-2">
										{product.subtitle}
									</p>

									<div className="flex-y-center gap-4 flex-wrap">
										<span className="text-xl font-semibold">
											{product.price}
										</span>

										{product.oldPrice && (
											<span className="text-base text-gray-400 line-through">
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
		</Tag>
	);
}
