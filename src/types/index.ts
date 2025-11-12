export interface IProduct {
	id: string;
	title: string;
	subtitle: string;
	price: string;
	oldPrice?: string;
	badge?: {
		discount?: string;
		new?: boolean;
	};
	image: string;
	characteristics: {
		salesPackage: string;
		modelNumber: string;
		configuration: string;
	};
}
