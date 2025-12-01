"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductsBlock from "@/components/blocks/ProductsBlock";
import React from "react";

export default function CategoryPage() {
	// get the parameter from the URL
	const { categoryId } = useParams<{ categoryId: string }>();

	// Find related products by category
	const relatedProducts = products.filter(product => product.category == categoryId);

	// Get current category
	const currentCategory = categories.find(category => category.id == categoryId);

	return (
		<div className="container pb-5">
			<ProductsBlock
				title={currentCategory?.title}
				products={relatedProducts}
				displayMode="showMore"
				productCount={4}
			/>
		</div>
	);
}
