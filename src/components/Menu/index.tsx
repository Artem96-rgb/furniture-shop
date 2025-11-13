"use client";

import clsx from "clsx";
import Link from "next/link";

interface IMenuProps {
	className?: string;
	classNameLink?: string;
	links: {
		id: string;
		title: string;
		link: string;
	}[];
}

export default function Menu({ className, links, classNameLink }: IMenuProps) {
	return (
		<ul className={`${className}`}>
			{links.map(link => (
				<li key={link.id}>
					<Link
						href={link.link}
						className={clsx(
							"text-medium-base hover:text-primary-500 transition-ease-in-out",
							classNameLink
						)}
					>
						{link.title}
					</Link>
				</li>
			))}
		</ul>
	);
}
