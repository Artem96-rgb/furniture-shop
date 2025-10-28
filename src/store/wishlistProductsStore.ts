import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IWishlistStore {
	wishlistProducts: number[];
	addWishlistProduct: (id: number) => void;
	removeWishlistProduct: (id: number) => void;
}

export const useWishlistStore = create<IWishlistStore>()(
	persist(
		(set, get) => ({
			wishlistProducts: [],

			addWishlistProduct: (id: number) => {
				const { wishlistProducts } = get();
				if (!wishlistProducts.includes(id)) {
					set({ wishlistProducts: [...wishlistProducts, id] });
				}
			},

			removeWishlistProduct: (id: number) => {
				const { wishlistProducts } = get();
				set({
					wishlistProducts: wishlistProducts.filter(pid => pid !== id),
				});
			},
		}),
		{
			name: "wishlist-storage",
		}
	)
);
