"use client";

import HeroBlock from "@/components/blocks/HeroBlock";
import { products } from "@/data/products";
import { useWishlistStore } from "@/store/wishlistProductsStore";
import ProductsBlock from "@/components/blocks/ProductsBlock";
import NoProductsMessage from "@/components/blocks/NoProductsMessage";

export default function WishlistPage() {
	// Get the array of selected product IDs from the Zustand store
	const wishlistProducts = useWishlistStore(state => state.wishlistProducts);

	// Filter the full products list to return only those
	// whose IDs exist in the wishlistProducts array
	const selectedProducts = products.filter(product => wishlistProducts.includes(product.id));

	return (
		<div className="mb-10">
			<HeroBlock
				backgroundImageUrl="hero.jpg"
				title="Wishlist"
				breadcrumbTitle="Wishlist"
				className="mb-8.5"
			/>

			<div className="container">
				{wishlistProducts?.length > 0 ? (
					<ProductsBlock products={selectedProducts} />
				) : (
					<NoProductsMessage
						title="Your wishlist is empty"
						subtitle="To add products to your wishlist, click the heart icon on the products you like."
					/>
				)}
			</div>
		</div>
	);
}
