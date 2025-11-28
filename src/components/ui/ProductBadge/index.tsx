"use client";

interface ProductBadgeProps {
	badge?: {
		discount?: string;
		new?: boolean;
	};
}

export default function ProductBadge({ badge }: ProductBadgeProps) {
	return (
		<div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex flex-col items-start gap-2">
			{badge?.discount && (
				<span className="bg-accent-red text-medium-sm-white py-1 px-3 rounded-full">
					{badge.discount}
				</span>
			)}

			{badge?.new && (
				<span className="bg-accent-green text-medium-sm-white py-1 px-3 rounded-full">
					New
				</span>
			)}
		</div>
	);
}
