import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IShoppingCartStore {
	cartProducts: {
		id: string;
		quantity: number;
	}[];
	addToCart: (id: string) => void;
	increaseQty: (id: string) => void;
	decreaseQty: (id: string) => void;
	removeFromCart: (id: string) => void;
}

export const useShoppingCartStore = create<IShoppingCartStore>()(
	persist(
		(set, get) => ({
			cartProducts: [],

			addToCart: id => {
				const { cartProducts } = get();
				const existing = cartProducts.find(p => p.id === id);

				if (existing) {
					set({
						cartProducts: cartProducts.map(p =>
							p.id === id ? { ...p, quantity: p.quantity + 1 } : p
						),
					});
				} else {
					set({
						cartProducts: [...cartProducts, { id, quantity: 1 }],
					});
				}
			},

			increaseQty: id => {
				set({
					cartProducts: get().cartProducts.map(p =>
						p.id === id ? { ...p, quantity: p.quantity + 1 } : p
					),
				});
			},

			decreaseQty: id => {
				set({
					cartProducts: get()
						.cartProducts.map(p =>
							p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
						)
						.filter(p => p.quantity > 0),
				});
			},

			removeFromCart: id => {
				set({
					cartProducts: get().cartProducts.filter(p => p.id !== id),
				});
			},
		}),
		{
			name: "shoppingCart-storage",
		}
	)
);
