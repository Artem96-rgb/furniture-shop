"use client";

import Subscribe from "@/components/Subscribe";

export default function Footer() {
	return (
		<footer className="border-t border-gray-300">
			<div className="container">
				<div className="flex justify-between max-lg:flex-col py-8 lg:py-12 gap-10 lg:gap-18">
					<div className="lg:max-w-67.5">
						<p className="h6 mb-5 lg:mb-15.5 leading-none">Funiro.</p>
						<p className="text-regular-16-gray-500">
							400 University Drive Suite 200 Coral Gables,
							<br />
							FL 33134 USA
						</p>
					</div>

					<div>
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
