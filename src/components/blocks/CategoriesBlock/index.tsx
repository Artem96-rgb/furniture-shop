"use client";

import Image from "next/image";

interface IHomeHeroBlockProps {
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
	// title,
	// description,
	// image,
	// link,
}: IHomeHeroBlockProps) {
	return (
		<div className="relative mb-14">
			<div className="container xl:max-w-296">
				<div className="text-center mb-15.5">
					<h2>Browse The Range</h2>
					<p className="text-xl text-gray">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
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
							<p className="text-xl lg:text-2xl/9 font-semibold text-center">
								{category.title}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
