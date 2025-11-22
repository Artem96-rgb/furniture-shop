"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { IImage } from "@/types";

interface IHomeHeroBlockProps {
	image: IImage;
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

			<div className="absolute bottom-30 right-14.5 bg-primary-500-25 max-w-160 w-full pt-15.5 px-10 pb-9.5">
				<p className="text-semibold-base-neutral-700 mb-1">{subtitle}</p>

				<h1 className="mb-4.5 text-primary-500 max-w-100">{title}</h1>

				<p className="text-medium-lg-gray-700 mb-11.5 max-w-125 leading-6.5">
					{description}
				</p>

				<Button className="btn-primary font-bold h-18.5 max-w-55.5" href={link.href}>
					{link.title}
				</Button>
			</div>
		</div>
	);
}
