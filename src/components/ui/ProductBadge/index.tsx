"use client";

interface ProductBadgeProps {
	badge?: {
		discount?: string;
		new?: boolean;
	};
}

export default function ProductBadge({ badge }: ProductBadgeProps) {
	if (!badge) return null;

	return (
		<div className="absolute top-4 right-4 flex flex-col items-start gap-2">
			{badge.discount && (
				<span className="bg-accent text-white text-sm font-medium py-1 px-3 rounded-full">
					{badge.discount}
				</span>
			)}

			{badge.new && (
				<span className="bg-green text-white text-sm font-medium py-1 px-3 rounded-full">
					New
				</span>
			)}
		</div>
	);
}
