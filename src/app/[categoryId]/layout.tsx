import { ReactNode } from "react";
import { Metadata } from "next";
import { categories } from "@/data/categories";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ categoryId: string }>;
}): Promise<Metadata> {
	const { categoryId } = await params;
	const category = categories.find(c => c.id === categoryId);

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
