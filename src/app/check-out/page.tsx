"use client";

import BillingForm from "@/components/checkOut/BillingForm";
import HeroBlock from "@/components/blocks/HeroBlock";
import React from "react";
import { useShoppingCartStore } from "@/store/shoppingCartStore";
import { products } from "@/data/products";
import NoProductsMessage from "@/components/blocks/NoProductsMessage";

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
				className="mb-24.5"
			/>

			<div className="container">
				{selectedProducts?.length > 0 ? (
					<div className="grid grid-cols-2 gap-6.5">
						<div>
							<p>Billing details</p>
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
		</>
	);
}
