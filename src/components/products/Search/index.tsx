"use client";

import { Search as SearchIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import React, { useState, useMemo, useRef } from "react";
import { products } from "@/data/products";
import { useClickOutside, useDebounce } from "@/hooks";
import FormInput from "@/components/form/FormInput";
import ProductPrice from "@/components/products/ProductPrice";
import Link from "next/link";
import ProductImageThumbnail from "@/components/ui/product/ProductImageThumbnail";

export default function Search() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [query, setQuery] = useState("");
	const containerRef = useRef<HTMLDivElement>(null);

	const debouncedQuery = useDebounce(query, 200);

	// Product filtering
	const filteredResults = useMemo(() => {
		if (!debouncedQuery.trim()) return [];

		return products.filter(product =>
			product.title.toLowerCase().includes(debouncedQuery.toLowerCase())
		);
	}, [debouncedQuery]);

	// Close type dropdown if user clicks outside
	useClickOutside(containerRef, () => {
		setIsSearchOpen(false);
		setQuery("");
	});

	return (
		<div className="relative" ref={containerRef}>
			<Button className="border-none w-8 h-8" onClick={() => setIsSearchOpen(!isSearchOpen)}>
				<SearchIcon size={28} />
			</Button>

			{isSearchOpen && (
				<div className="absolute w-72 px-3 py-5 bg-white -right-48 sm:right-0 top-10 rounded-lg shadow-lg">
					<FormInput
						id="search-input"
						value={query}
						onChange={e => setQuery(e.target.value)}
						placeholder="Search..."
						className="px-2"
					/>

					<div className="overflow-auto max-h-[500px]">
						{filteredResults.length === 0 && query && (
							<p className="text-lg mt-2">No results found.</p>
						)}

						{filteredResults?.map(product => (
							<Link
								href={`/shop/${product.id}`}
								key={product.id}
								className="py-4 border-b border-gray-300 last:border-none cursor-pointer hover:text-accent flex gap-2"
							>
								<ProductImageThumbnail src={product.image} alt={product.title} />

								<div>
									<p className="h6">{product.title}</p>

									<div className="flex flex-col flex-wrap">
										<ProductPrice
											price={product.price}
											// className="text-semibold-xl-neutral-600"
											className="text-lg font-semibold"
										/>

										{product.oldPrice && (
											<ProductPrice
												price={product.oldPrice}
												oldPrice
												className="text-regular-16-gray-400"
											/>
										)}
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
