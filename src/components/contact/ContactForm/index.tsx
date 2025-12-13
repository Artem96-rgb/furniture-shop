"use client";

import { useForm } from "react-hook-form";
import FormLabel from "@/components/form/FormLabel";
import FormError from "@/components/form/FormError";
import FormInput from "@/components/form/FormInput";
import FormTextArea from "@/components/form/FormTextArea";
import Button from "@/components/ui/Button";
import { useEffect } from "react";
import { notifySuccess } from "@/lib/utils";
import { FormSchema, FormSchemaType } from "@/lib/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
	});

	useEffect(() => {
		if (isSubmitSuccessful) {
			notifySuccess("Form Sent");
		}
	}, [isSubmitSuccessful]);

	const onSubmit = (data: FormSchemaType) => {
		console.log("FORM DATA:", data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-9 lg:px-13 max-w-158.75 w-full">
			{/* Name */}
			<div>
				<FormLabel label="Your name" required htmlFor="name" />
				<FormInput id="name" placeholder="Your name" {...register("name")} />
				{errors.name?.message && <FormError message={errors.name.message} />}
			</div>

			{/* Email */}
			<div>
				<FormLabel label="Your email address" required htmlFor="email" />
				<FormInput id="email" placeholder="Your email address" {...register("email")} />
				{errors.email?.message && <FormError message={errors.email.message} />}
			</div>

			{/* Subject */}
			<div>
				<FormLabel label="Subject" required htmlFor="subject" />
				<FormInput id="subject" placeholder="Subject" {...register("subject")} />
				{errors.subject?.message && <FormError message={errors.subject.message} />}
			</div>

			{/* Message */}
			<div>
				<FormLabel label="Message" required htmlFor="message" />
				<FormTextArea id="message" placeholder="Message" {...register("message")} />
				{errors.message?.message && <FormError message={errors.message.message} />}
			</div>

			<Button type="submit" className="btn-primary max-w-59.5 h-14 rounded-md">
				Submit
			</Button>
		</form>
	);
}
