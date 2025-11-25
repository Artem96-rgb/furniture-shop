export interface IImage {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export interface IProduct {
	id: string;
	title: string;
	subtitle: string;
	price: number;
	oldPrice?: number;
	badge?: {
		discount?: string;
		new?: boolean;
	};
	category: string;
	sku: string;
	image: string;
	images: string[];
	characteristics: {
		salesPackage: string;
		modelNumber: string;
		configuration: string;
	};
	attributes: {
		sizes: {
			id: string;
			title: string;
		}[];
		colors: {
			id: string;
			title: string;
		}[];
	};
	shortDescription: string;
	description: {
		id: string;
		content: string;
	}[];
	descriptionImages: {
		id: string;
		image: IImage;
	}[];
}
