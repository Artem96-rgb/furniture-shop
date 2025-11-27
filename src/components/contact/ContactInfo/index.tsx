"use client";

import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactInfo() {
	const contactInfo = [
		{
			id: "contactInfo-one",
			icon: <MapPin size={24} />,
			title: "Address",
			content: ["236 5th SE Avenue, New York NY10000, United States"],
		},
		{
			id: "contactInfo-two",
			icon: <Phone size={24} />,
			title: "Phone",
			content: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
		},
		{
			id: "contactInfo-three",
			icon: <Clock size={24} />,
			title: "Working Time",
			content: ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"],
		},
	];

	return (
		<div className="space-y-10">
			{contactInfo.map(item => (
				<div key={item.id} className="flex items-start gap-5">
					<div className="text-neutral-700 shrink-0 mt-1.25">{item.icon}</div>

					<div>
						<p className="h6 mb-1">{item.title}</p>

						{item.content.map((line, index) => (
							<p key={index} className="text-base">
								{line}
							</p>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
