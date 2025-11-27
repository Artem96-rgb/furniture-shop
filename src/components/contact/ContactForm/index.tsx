"use client";

import { useForm } from "react-hook-form";
import FormLabel from "@/components/form/FormLabel";
import FormError from "@/components/form/FormError";
import FormInput from "@/components/form/FormInput";
import FormTextArea from "@/components/form/FormTextArea";
import Button from "@/components/ui/Button";

interface IFormValues {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>();

	const onSubmit = (data: IFormValues) => {
		console.log("FORM DATA:", data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-9">
			{/* Name */}
			<div>
				<FormLabel label="Your name" required htmlFor="name" />
				<FormInput
					id="name"
					placeholder="Your name"
					register={register("name", { required: true })}
				/>
				{errors.name && <FormError message="Please enter your name" />}
			</div>

			{/* Email */}
			<div>
				<FormLabel label="Your email address" required htmlFor="email" />
				<FormInput
					id="email"
					placeholder="Your email address"
					register={register("email", { required: true, pattern: /^\S+@\S+$/i })}
				/>
				{errors.email && (
					<FormError
						message={
							errors.email.type === "required"
								? "Email is required"
								: errors.email.type === "pattern"
									? 'Email must contain "@" and text after it'
									: "Invalid email"
						}
					/>
				)}
			</div>

			{/* Subject */}
			<div>
				<FormLabel label="Subject" required htmlFor="subject" />
				<FormInput
					id="subject"
					placeholder="Subject"
					register={register("subject", { required: true })}
				/>
				{errors.subject && <FormError message="Please enter subject" />}
			</div>

			{/* Message */}
			<div>
				<FormLabel label="Message" required htmlFor="message" />
				<FormTextArea
					id="message"
					placeholder="Message"
					register={register("message", { required: true })}
				/>
				{errors.message && <FormError message="Please enter message" />}
			</div>

			<Button type="submit" className="btn-primary max-w-59.5 h-14 rounded-md">
				Submit
			</Button>
		</form>
	);
}
