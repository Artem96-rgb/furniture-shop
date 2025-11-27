"use client";

import { LucideIcon } from "lucide-react";

interface IFeaturesProps {
	features: {
		id: string;
		icon: LucideIcon;
		title: string;
		subtitle: string;
	}[];
}

export default function FeaturesBlock({ features }: IFeaturesProps) {
	return (
		<section className="bg-primary-100 py-10 lg:py-25">
			<div className="px-6 lg:px-13 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-13">
				{features.map(feature => {
					const Icon = feature.icon;

					return (
						<div key={feature.id} className="flex-y-center gap-2.5">
							<div className="text-neutral-800 shrink-0">
								<Icon size={60} />
							</div>
							<div>
								<p className="h6 text-neutral-800 leading-9.5 mb-0.5">
									{feature.title}
								</p>
								<p className="text-medium-xl-gray-600 leading-7.5">
									{feature.subtitle}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
