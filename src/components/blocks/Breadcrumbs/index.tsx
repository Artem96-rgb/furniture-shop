import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ElementType } from "react";

interface ICategoriesBlockProps {
	breadcrumbs: {
		id: string;
		title: string;
		link?: string;
	}[];
}

export default function Breadcrumbs({ breadcrumbs }: ICategoriesBlockProps) {
	return (
		<div className="flex-y-center flex-wrap gap-6">
			{breadcrumbs?.map((breadcrumb, index) => {
				const Component: ElementType = breadcrumb.link ? Link : "div";

				return (
					<div key={breadcrumb.id} className="flex-y-center gap-3.5">
						<Component
							{...(breadcrumb.link ? { href: breadcrumb.link } : {})}
							className={`${breadcrumb.link ? "text-black" : "text-gray-500"}`}
						>
							<span>{breadcrumb.title}</span>
						</Component>
						{index < breadcrumbs.length - 1 && (
							<ChevronRight size={20} className="text-black" />
						)}
					</div>
				);
			})}
		</div>
	);
}
