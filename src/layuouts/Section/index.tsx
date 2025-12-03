import { ReactNode } from "react";

interface ISectionProps {
	children: ReactNode;
	title: string;
	className?: string;
}

export default function Section({ children, title, className }: ISectionProps) {
	return (
		<section className={className}>
			<div className="container space-y-4 lg:space-y-8">
				<h2 className="text-center">{title}</h2>
				{children}
			</div>
		</section>
	);
}
