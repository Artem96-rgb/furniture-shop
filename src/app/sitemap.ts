import { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const SITE_URL =
	process.env.NODE_ENV === "development" ? process.env.SITE_LOCAL_URL : process.env.SITE_URL;

if (!SITE_URL) {
	throw new Error("SITE_URL is not defined in environment variables!");
}

export default function sitemap(): MetadataRoute.Sitemap {
	const staticPages = [
		{
			url: `${SITE_URL}`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 1,
		},
		{
			url: `${SITE_URL}/shop`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${SITE_URL}/contact`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.7,
		},
		{
			url: `${SITE_URL}/wishlist`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.4,
		},
		{
			url: `${SITE_URL}/comparison`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.4,
		},
		{
			url: `${SITE_URL}/cart`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.3,
		},
		{
			url: `${SITE_URL}/check-out`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.3,
		},
	];

	const categoryPages = categories.map(category => ({
		url: `${SITE_URL}/${category.id}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.8,
	}));

	const productPages = products.map(product => ({
		url: `${SITE_URL}/${product.id}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.7,
	}));

	return [...staticPages, ...categoryPages, ...productPages];
}
