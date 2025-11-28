"use client";

import Image from "next/image";

interface ICategoriesBlockProps {
	sectionTitle: string;
	sectionDescription: string;
	categories: {
		id: string;
		title: string;
		image: {
			src: string;
			alt: string;
		};
	}[];
}

export default function CategoriesBlock({
	categories,
	sectionTitle,
	sectionDescription,
}: ICategoriesBlockProps) {
	return (
		<div className="relative mb-14">
			<div className="container">
				<div className="text-center mb-10 lg:mb-15.5">
					<h2>{sectionTitle}</h2>
					<p className="text-regular-xl-gray-800">{sectionDescription}</p>
				</div>

				<ul className="grid grid-cols-2 lg:grid-cols-3 gap-5">
					{categories?.map(category => (
						<li key={category.id} className="space-y-2 lg:space-y-7.5">
							<Image
								src={category.image.src}
								alt={category.image.alt}
								width="572"
								height="720"
								className="rounded-lg"
							/>

							<p className="text-center h6">{category.title}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
