"use client";

import Button from "@/components/ui/Button";

interface IPaginationProps {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({ totalPages, currentPage, onPageChange }: IPaginationProps) {
	return (
		<div className="flex-center flex-wrap gap-9.5 mt-17.5">
			{[...Array(totalPages)].map((_, i) => (
				<Button
					key={i}
					onClick={() => onPageChange(i + 1)}
					className={`w-15 h-15 text-xl rounded-xl ${
						currentPage === i + 1
							? "btn-primary"
							: "text-neutral-700-secondary bg-light-secondary border-transparent"
					}`}
				>
					{i + 1}
				</Button>
			))}
		</div>
	);
}
