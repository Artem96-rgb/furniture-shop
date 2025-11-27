"use client";

import Menu from "@/components/Menu";
import Subscribe from "@/components/Subscribe";

export default function Footer() {
	const menuLinks = [
		{
			id: "menu-link-one",
			title: "Shop",
			link: "shop",
		},
		{
			id: "menu-link-two",
			title: "About",
			link: "about",
		},
		{
			id: "menu-link-three",
			title: "Contact",
			link: "contact",
		},
	];

	const helpLinks = [
		{
			id: "help-link-one",
			title: "Payment Options",
			link: "#",
		},
		{
			id: "help-link-two",
			title: "Returns",
			link: "#",
		},
		{
			id: "help-link-three",
			title: "Privacy Policies",
			link: "#",
		},
	];

	return (
		<footer className="border-t border-gray-300">
			<div className="container">
				<div className="flex max-lg:flex-col py-8 lg:py-12 gap-10 lg:gap-18">
					<div className="order-1 lg:max-w-67.5">
						<p className="h6 mb-5 lg:mb-15.5 leading-none">Funiro.</p>
						<p className="text-regular-16-gray-500">
							400 University Drive Suite 200 Coral Gables,
							<br />
							FL 33134 USA
						</p>
					</div>

					<div className="order-3 lg:order-2 flex justify-between xl:ml-16 gap-20 xl:gap-36">
						<div>
							<p className="text-medium-base-gray-500 mb-5 lg:mb-15.5">Links</p>
							<Menu links={menuLinks} className="space-y-5 lg:space-y-11.5" />
						</div>

						<div>
							<p className="text-medium-base-gray-500 mb-5 lg:mb-15.5">Help</p>
							<Menu links={helpLinks} className="space-y-5 lg:space-y-11.5" />
						</div>
					</div>

					<div className="order-2 lg:order-3">
						<p className="text-medium-base-gray-500 mb-5 lg:mb-15.5">Newsletter</p>

						<Subscribe />
					</div>
				</div>

				<div className="border-t border-gray-300 py-5 lg:py-9">
					<p className="text-base">
						© {new Date().getFullYear()} Funiro. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
