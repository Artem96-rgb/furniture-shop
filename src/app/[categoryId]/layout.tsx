import { ReactNode } from "react";
import { Metadata } from "next";
import { categories } from "@/data/categories";

export function generateMetadata({ params }: { params: { categoryId: string } }): Metadata {
	const category = categories.find(c => c.id === params.categoryId);

	if (!category) {
		return {
			title: "Category Not Found — Furniro",
			description: "The category does not exist.",
			keywords: [],
		};
	}

	return {
		title: `${category.title} — Furniro Furniture Hardware`,
		description: `Browse ${category.title} furniture hardware at Furniro. Find handles, hinges, furniture legs, and more for your ${category.title.toLowerCase()}.`,
		keywords: [
			category.title.toLowerCase(),
			"furniro",
			"furniture hardware",
			"handles",
			"hinges",
			"furniture legs",
		],
	};
}

export default function CategoryLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
