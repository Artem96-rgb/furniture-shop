import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IWishlistStore {
	wishlistProducts: string[];
	addWishlistProduct: (id: string) => void;
	removeWishlistProduct: (id: string) => void;
}

export const useWishlistStore = create<IWishlistStore>()(
	persist(
		(set, get) => ({
			wishlistProducts: [],

			addWishlistProduct: id => {
				const { wishlistProducts } = get();
				if (!wishlistProducts.includes(id)) {
					set({ wishlistProducts: [...wishlistProducts, id] });
				}
			},

			removeWishlistProduct: id => {
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
