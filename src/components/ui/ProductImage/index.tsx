"use client";

import Image from "next/image";
import clsx from "clsx";

interface IProductImageProps {
	src: string;
	alt: string;
	className?: string;
}

export default function ProductImage({ src, alt, className }: IProductImageProps) {
	return (
		<Image
			src={src}
			alt={alt}
			width="285"
			height="301"
			className={clsx("w-full w-full object-cover", className)}
		/>
	);
}
