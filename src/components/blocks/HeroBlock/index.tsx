"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

interface IHeroBlockProps {
	// Image URL for the hero block background.
	// Path relative to the `public` folder. For example, if the file is `public/hero.jpg`,
	// then simply pass "hero.jpg".
	backgroundImageUrl?: string;
	title: string;
	breadcrumbTitle: string;
	className?: string;
}

export default function HeroBlock({
	backgroundImageUrl,
	title,
	breadcrumbTitle,
	className,
}: IHeroBlockProps) {
	return (
		<div
			className={clsx(
				`bg-[url(${backgroundImageUrl})] bg-cover bg-center flex-y-center flex-col py-20.5 pb-24.5 px-2.5`,
				className
			)}
		>
			<Logo className="mb-4" />

			<h1 className="mb-3">{title}</h1>

			<div className="flex-y-center flex-wrap gap-1.5">
				<Link className="text-base font-medium" href="/">
					Home
				</Link>

				<ChevronRight size={20} />

				<p className="text-base font-light">{breadcrumbTitle}</p>
			</div>
		</div>
	);
}
