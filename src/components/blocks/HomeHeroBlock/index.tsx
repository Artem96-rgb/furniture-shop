"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

interface IHomeHeroBlockProps {
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
	subtitle: string;
	title: string;
	description: string;
	link: {
		href: string;
		title: string;
	};
}

export default function HomeHeroBlock({
	subtitle,
	title,
	description,
	image,
	link,
}: IHomeHeroBlockProps) {
	return (
		<div className="relative mb-14">
			<div>
				<Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
			</div>

			<div className="absolute bottom-30 right-14.5 bg-primary-25 max-w-160 w-full pt-15.5 px-10 pb-9.5">
				<p className="text-base font-semibold mb-1">{subtitle}</p>

				<h1 className="mb-4.5 text-primary max-w-100">{title}</h1>

				<p className="text-lg/6.5 font-medium mb-11.5 max-w-125">{description}</p>

				<Button className="btn-primary font-bold h-18.5 max-w-55.5" href={link.href}>
					{link.title}
				</Button>
			</div>
		</div>
	);
}
