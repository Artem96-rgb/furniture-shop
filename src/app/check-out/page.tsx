"use client";

import BillingForm from "@/components/checkOut/BillingForm";
import HeroBlock from "@/components/blocks/HeroBlock";
import React from "react";
import { useShoppingCartStore } from "@/store/shoppingCartStore";
import { products } from "@/data/products";
import NoProductsMessage from "@/components/blocks/NoProductsMessage";
import { features } from "@/data/features";
import FeaturesBlock from "@/components/blocks/FeaturesBlock";

export default function CheckOutPage() {
	// Get the array of selected product IDs from the Zustand store
	const cartProducts = useShoppingCartStore(state => state.cartProducts);

	// Filter the full products list to return only those
	// whose IDs exist in the compareProducts array
	const selectedProducts = products
		.filter(product => cartProducts.some(item => item.id === product.id))
		.map(product => {
			const cartItem = cartProducts.find(item => item.id === product.id)!;
			return { ...product, quantity: cartItem.quantity };
		});

	return (
		<>
			<HeroBlock
				backgroundImageUrl="hero.jpg"
				title="Checkout"
				breadcrumbTitle="Checkout"
				className="mb-10 lg:mb-24.5"
			/>

			<div className="container mb-16 lg:mb-32">
				{selectedProducts?.length > 0 ? (
					<div className="grid lg:grid-cols-2 gap-6.5">
						<div>
							<p className="h4 mb-5 lg:mb-9">Billing details</p>
							<BillingForm></BillingForm>
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
