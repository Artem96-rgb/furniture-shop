"use client";

import { Minus, Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import { useShoppingCartStore } from "@/store/shoppingCartStore";

export default function QuantityCounter({ productId }: { productId: string }) {
	// Get the array of products currently in the shopping cart from the Zustand store
	const cartProducts = useShoppingCartStore(state => state.cartProducts);

	// Get the function to increase the quantity of a product in the cart
	const increaseQty = useShoppingCartStore(state => state.increaseQty);

	// Get the function to decrease the quantity of a product in the cart
	const decreaseQty = useShoppingCartStore(state => state.decreaseQty);

	// Find the product in the cart that matches the given productId
	const product = cartProducts.find(p => p.id === productId);

	// Get the quantity of the product in the cart, defaulting to 0 if the product is not found
	const quantity = product?.quantity ?? 0;

	return (
		<div className="h-10 rounded-md lg:px-2 border border-gray-500 flex-y-center justify-between">
			<Button className="w-6 h-6 border-none" onClick={() => decreaseQty(productId)}>
				<Minus size={16} />
			</Button>

			<span className="grow text-center">{quantity}</span>

			<Button className="w-6 h-6 border-none" onClick={() => increaseQty(productId)}>
				<Plus size={16} />
			</Button>
		</div>
	);
}
