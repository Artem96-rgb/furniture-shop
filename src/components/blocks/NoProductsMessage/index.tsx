import Button from "@/components/ui/Button";

interface INoProductsMessageProps {
	title: string;
	subtitle: string;
}

export default function NoProductsMessage({ title, subtitle }: INoProductsMessageProps) {
	return (
		<div className="text-center space-y-2">
			<p className="h2 mb-4">{title}</p>
			<p className="text-base md:text-lg lg:text-xl font-medium text-gray-500 leading-7.5 mb-8">
				{subtitle}
			</p>
			<Button href="/shop" className="max-w-max btn-primary mx-auto px-6 py-3">
				View More
			</Button>
		</div>
	);
}
