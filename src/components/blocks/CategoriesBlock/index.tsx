"use client";

import Image from "next/image";

interface ICategoriesBlockProps {
	sectionTitle: string;
	sectionDescription: string;
	categories: {
		id: number;
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
			<div className="container xl:max-w-296">
				<div className="text-center mb-10 lg:mb-15.5">
					<h2>{sectionTitle}</h2>
					<p className="text-regular-xl-gray-800">{sectionDescription}</p>
				</div>

				<ul className="grid grid-cols-2 lg:grid-cols-3 gap-5">
					{categories?.map(category => (
						<li key={category.id}>
							<div className="mb-2 lg:mb-7.5">
								<Image
									src={category.image.src}
									alt={category.image.alt}
									width="381"
									height="440"
									className="rounded-md"
								/>
							</div>
							<p className="text-semibold-xl-neutral-700 lg:text-2xl/9 text-center">
								{category.title}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
