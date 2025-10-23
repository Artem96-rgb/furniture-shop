"use client";

import ProductBadge from "@/components/ui/ProductBadge";
import { products } from "@/data/products";
import CompareProduct from "@/components/products/CompareProduct";
import { Scale } from "lucide-react";
import ProductImage from "@/components/ui/ProductImage";

export default function ProductsBlock() {
	return (
		<section className="mb-15.5">
			<div className="container">
				<div className="text-center mb-8">
					<h2>Our Products</h2>
				</div>

				<ul className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{products.map(product => (
						<li key={product.id} className="relative group cursor-pointer">
							<div className="overflow-hidden">
								<ProductImage
									src={product.image}
									alt={product.title}
									className="group-hover:scale-105 transition-transform duration-300"
								/>

								{/* Hover overlay */}
								<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center items-center gap-4">
									<button className="bg-white text-black font-medium py-2 px-6 rounded-md">
										Add to cart
									</button>

									<div className="flex gap-4 text-white text-sm">
										<button>Share</button>
										<CompareProduct
											className="flex-y-center gap-0.5 text-white"
											productId={product.id}
										>
											<Scale size="16" />
											<span className="text-base font-semibold">Compare</span>
										</CompareProduct>
										<button>Like</button>
									</div>
								</div>

								<ProductBadge badge={product.badge} />
							</div>

							{/* Text content */}
							<div className="bg-light pt-4 px-4 pb-7.5">
								<p className="h4">{product.title}</p>
								<p className="text-gray-500 text-base mb-2">{product.subtitle}</p>

								<div className="flex-y-center gap-4 flex-wrap">
									<span className="text-xl font-semibold">{product.price}</span>

									{product.oldPrice && (
										<span className="text-base text-gray-400 line-through">
											{product.oldPrice}
										</span>
									)}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
