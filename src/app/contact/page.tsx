"use client";

import HeroBlock from "@/components/blocks/HeroBlock";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { BadgeCheck, Headphones, Package, Trophy } from "lucide-react";
import FeaturesBlock from "@/components/blocks/FeaturesBlock";

export default function ContactPage() {
	const features = [
		{
			id: "feature-1",
			icon: <Trophy size={60} />,
			title: "High Quality",
			subtitle: "top materials",
		},
		{
			id: "feature-2",
			icon: <BadgeCheck size={60} />,
			title: "Warranty Protection",
			subtitle: "Over 2 years",
		},
		{
			id: "feature-3",
			icon: <Package size={60} />,
			title: "Free Shipping",
			subtitle: "Order over 150 $",
		},
		{
			id: "feature-4",
			icon: <Headphones size={60} />,
			title: "24 / 7 Support",
			subtitle: "Dedicated support",
		},
	];

	return (
		<>
			<HeroBlock
				backgroundImageUrl="hero.jpg"
				title="Contact"
				breadcrumbTitle="Contact"
				className="mb-24.5"
			/>

			<div className="container">
				<div className="text-center mb-20">
					<h2 className="mb-3.5">Get In Touch With Us</h2>
					<p className="text-regular-16-gray-500 max-w-161 mx-auto">
						For More Information About Our Product & Services. Please Feel Free To Drop
						Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
					</p>
				</div>

				<div className="max-w-264 px-13 mx-auto grid grid-cols-1 lg:grid-cols-[212px_530px] justify-between gap-x-2.5 gap-y-5 mb-16">
					<ContactInfo />
					<ContactForm />
				</div>
			</div>

			<FeaturesBlock features={features} />
		</>
	);
}
