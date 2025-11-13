"use client";

import Menu from "@/components/Menu";
import Button from "@/components/ui/Button";

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
		<footer className="border-t border-neutral-700-secondary-17">
			<div className="container">
				{/* Footer Top */}
				<div className="grid grid-cols-1 md:grid-cols-4 py-12">
					{/* Logo and address */}
					<div>
						<p className="h4 font-bold mb-12.5">Funiro.</p>
						<p className="text-regular-16-gray-500">
							400 University Drive Suite 200 Coral Gables,
							<br />
							FL 33134 USA
						</p>
					</div>

					{/* Links */}
					<div>
						<p className="h6 text-gray-500 mb-15.5">Links</p>
						<Menu links={menuLinks} className="space-y-11.5" />
					</div>

					{/* Help */}
					<div>
						<p className="h6 text-gray-500 mb-15.5">Help</p>
						<Menu links={helpLinks} className="space-y-11.5" />
					</div>

					{/* Newsletter */}
					<div>
						<p className="h6 text-gray-500 mb-15.5">Newsletter</p>
						<form className="flex flex-wrap gap-4 max-w-sm">
							<input
								type="email"
								placeholder="Enter Your Email Address"
								className="flex-1 py-2 text-sm outline-none placeholder-gray-800 border-b border-neutral-700-secondary"
							/>
							<Button
								type="submit"
								className="text-neutral-700 font-semibold text-sm tracking-wide border-b border-neutral-700-secondary"
							>
								SUBSCRIBE
							</Button>
						</form>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="border-t border-neutral-700-secondary-17 py-9">
					<p className="text-base">
						© {new Date().getFullYear()} Funiro. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
