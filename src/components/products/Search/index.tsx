"use client";

import { Search as SearchIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import { useState, useMemo, useRef } from "react";
import { products } from "@/data/products";
import { useClickOutside, useDebounce } from "@/hooks";

export default function Search() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [query, setQuery] = useState("");
	const containerRef = useRef<HTMLDivElement>(null);

	const debouncedQuery = useDebounce(query, 200); // фильтруем каждые 200ms

	// Фильтрация продуктов
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
				<div className="absolute w-72 px-3 py-5 bg-black text-white right-0 top-10 rounded-lg shadow-lg">
					<input
						type="text"
						value={query}
						onChange={e => setQuery(e.target.value)}
						placeholder="Search..."
						className="w-full px-3 py-2 bg-gray-800 rounded-md outline-none"
					/>

					{/* Результаты */}
					<div className="mt-4">
						{filteredResults.length === 0 && query && (
							<p className="text-gray-400 text-sm">No results found.</p>
						)}

						{filteredResults?.map(product => (
							<div
								key={product.id}
								className="py-2 border-b border-gray-700 last:border-none cursor-pointer hover:text-accent"
							>
								{product.title}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
