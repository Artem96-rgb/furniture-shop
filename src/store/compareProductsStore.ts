import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICompareStore {
	compareProducts: number[];
	addCompareProduct: (id: number) => void;
	removeCompareProduct: (id: number) => void;
}

export const useCompareStore = create<ICompareStore>()(
	persist(
		(set, get) => ({
			compareProducts: [],

			addCompareProduct: (id: number) => {
				const { compareProducts } = get();
				if (!compareProducts.includes(id)) {
					set({ compareProducts: [...compareProducts, id] });
				}
			},

			removeCompareProduct: (id: number) => {
				const { compareProducts } = get();
				set({
					compareProducts: compareProducts.filter(pid => pid !== id),
				});
			},
		}),
		{
			name: "compare-storage", // key в localStorage
		}
	)
);
