import HeroBlock from "@/components/blocks/HeroBlock";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FeaturesBlock from "@/components/blocks/FeaturesBlock";
import { features } from "@/data/features";

export default function ContactPage() {
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

				<div className="max-w-264 mx-auto flex max-lg:flex-col justify-between gap-x-7 gap-y-5 mb-16">
					<ContactInfo />
					<ContactForm />
				</div>
			</div>

			<FeaturesBlock features={features} />
		</>
	);
}
