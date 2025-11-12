import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICompareStore {
	compareProducts: string[];
	addCompareProduct: (id: string) => void;
	removeCompareProduct: (id: string) => void;
}

export const useCompareStore = create<ICompareStore>()(
	persist(
		(set, get) => ({
			compareProducts: [],

			addCompareProduct: id => {
				const { compareProducts } = get();
				if (!compareProducts.includes(id)) {
					set({ compareProducts: [...compareProducts, id] });
				}
			},

			removeCompareProduct: id => {
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
