"use client";

import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactInfo() {
	const contactInfo = [
		{
			id: "contact-address",
			icon: <MapPin size={24} />,
			title: "Address",
			content: [
				{
					id: "contact-address",
					title: "236 5th SE Avenue, New York NY10000, United States",
					info: null,
				},
			],
		},
		{
			id: "contact-phone",
			icon: <Phone size={24} />,
			title: "Phone",
			content: [
				{
					id: "contact-phone-mobile",
					title: "Mobile:",
					info: "+(84) 546-6789",
				},
				{
					id: "contact-phone-hotline",
					title: "Hotline:",
					info: "+(84) 456-6789",
				},
			],
		},
		{
			id: "contact-working-time",
			icon: <Clock size={24} />,
			title: "Working Time",
			content: [
				{
					id: "contact-time-weekdays",
					title: "Monday-Friday:",
					info: "9:00 - 22:00",
				},
				{
					id: "contact-time-weekend",
					title: "Saturday-Sunday:",
					info: "9:00 - 21:00",
				},
			],
		},
	];

	return (
		<div className="space-y-10 lg:px-11 max-w-98.25 w-full">
			{contactInfo.map(item => (
				<div key={item.id} className="flex items-start gap-5">
					<div className="text-neutral-700 shrink-0 mt-1.25">{item.icon}</div>

					<div>
						<p className="h6 mb-1">{item.title}</p>

						{item.content.map(line => (
							<div key={line.id} className="flex flex-wrap gap-1">
								<p className="text-base">{line.title}</p>
								{line.info && <p className="text-base">{line.info}</p>}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
