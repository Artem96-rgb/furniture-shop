import Button from "@/components/ui/Button";

interface IHomeHeroBlockProps {
	image: string;
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
		<div
			className="mb-14 h-179.25 pt-5 lg:pt-38.5 px-5 lg:px-14.5 bg-cover bg-center"
			style={{ backgroundImage: `url('${image}')` }}
		>
			<div className="bg-primary-200 max-w-160 w-full pt-10 lg:pt-15.5 px-5 lg:px-10 pb-9.5 ml-auto">
				<p className="text-semibold-base-neutral-700 mb-1 tracking-widest">{subtitle}</p>

				<h1 className="mb-4.5 text-primary-500 max-w-100">{title}</h1>

				<p className="text-medium-lg-gray-700 mb-11.5 max-w-125 leading-6.5">
					{description}
				</p>

				<Button
					className="btn-primary font-bold h-14 lg:h-18.5 max-w-55.5"
					href={link.href}
				>
					{link.title}
				</Button>
			</div>
		</div>
	);
}
