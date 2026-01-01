"use client";

import { useMemo } from "react";
import HeroBlock from "@/components/blocks/HeroBlock";
import { products } from "@/data/products";
import { useShoppingCartStore } from "@/store/shoppingCartStore";
import ProductPrice from "@/components/products/ProductPrice";
import QuantityCounter from "@/components/products/QuantityCounter";
import { Trash } from "lucide-react";
import Button from "@/components/ui/Button";
import NoProductsMessage from "@/components/blocks/NoProductsMessage";
import { features } from "@/data/features";
import FeaturesBlock from "@/components/blocks/FeaturesBlock";
import { notifySuccess } from "@/lib/utils";
import ProductImageThumbnail from "@/components/ui/product/ProductImageThumbnail";

export default function CartPage() {
	// Get the array of selected product IDs from the Zustand store
	const cartProducts = useShoppingCartStore(state => state.cartProducts);
	const removeFromCart = useShoppingCartStore(state => state.removeFromCart);

	// Filter the full products list to return only those
	// whose IDs exist in the compareProducts array
	const selectedProducts = useMemo(() => {
		return products
			.filter(product => cartProducts.some(item => item.id === product.id))
			.map(product => {
				const cartItem = cartProducts.find(item => item.id === product.id)!;
				return { ...product, quantity: cartItem.quantity };
			});
	}, [cartProducts]);

	// Function to remove a product from the shopping cart
	// and show a success notification
	const handRemoveFromCart = (productId: string) => {
		removeFromCart(productId);
		notifySuccess("Product removed from cart");
	};

	// Calculate the total price of all products in the cart
	// by multiplying each product's price by its quantity
	const total = cartProducts.reduce((sum, item) => {
		const product = products.find(p => p.id === item.id);
		if (!product) return sum;
		return sum + product.price * item.quantity;
	}, 0);

	return (
		<>
			<HeroBlock
				backgroundImageUrl="hero.jpg"
				title="Cart"
				breadcrumbTitle="Cart"
				className="mb-18"
			/>

			<div className="container mb-21.5">
				{selectedProducts?.length > 0 ? (
					<div className="flex lg:items-start gap-7.5 max-lg:flex-col">
						<div className="lg:basis-[818px] min-w-0">
							<div className="space-y-4">
								{selectedProducts?.map(selectedProduct => (
									<div
										key={selectedProduct.id}
										className="grid lg:grid-cols-[1fr_124px_150px_32px] max-lg:grid-cols-3 max-lg:grid-rows-2 gap-8 items-center"
									>
										<div className="flex-y-center gap-2 max-lg:row-start-1 max-lg:row-end-2 max-lg:col-start-1 max-lg:col-end-4">
											<ProductImageThumbnail
												src={selectedProduct.image}
												alt={selectedProduct.title}
											/>

											<div>
												<p className="h6">{selectedProduct?.title}</p>

												<div className="">
													{selectedProduct.oldPrice && (
														<ProductPrice
															price={selectedProduct.oldPrice}
															oldPrice
															className="text-regular-16-gray-500 block"
														/>
													)}
													<ProductPrice
														price={selectedProduct.price}
														className="text-semibold-xl-neutral-600 block"
													/>
												</div>
											</div>
										</div>

										<div className="max-lg:row-start-2 max-lg:row-end-3 max-lg:col-start-1 max-lg:col-end-2 max-lg:max-w-31">
											<QuantityCounter productId={selectedProduct.id} />
										</div>

										<div className="max-lg:row-start-2 max-lg:row-end-3 max-lg:col-start-2 max-lg:col-end-3 text-center">
											<ProductPrice
												price={
													selectedProduct.price * selectedProduct.quantity
												}
												className="text-semibold-xl-neutral-600 block"
											/>
										</div>

										<div className="max-lg:row-start-2 max-lg:row-end-3 max-lg:col-start-3 max-lg:col-end-4">
											<Button
												className="h-8 border-none text-primary-500"
												onClick={() =>
													handRemoveFromCart(selectedProduct.id)
												}
											>
												<Trash size={24} fill="currentColor" />
											</Button>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="lg:basis-[394px] min-w-0 text-center p-4 space-y-4 bg-light-secondary">
							<p className="h4">Cart Totals</p>

							<div className="flex-center gap-2">
								<p className="text-medium-xl">Total:</p>
								<ProductPrice
									price={total}
									className="text-medium-xl-primary block"
								/>
							</div>

							<Button
								className="btn-transparent max-w-50 h-12.5 rounded-md text-xl mx-auto"
								href="/check-out"
							>
								Check Out
							</Button>
						</div>
					</div>
				) : (
					<NoProductsMessage
						title="Your cart is empty"
						subtitle="Add products to your cart to proceed with checkout."
					/>
				)}
			</div>

			<FeaturesBlock features={features} />
		</>
	);
}
