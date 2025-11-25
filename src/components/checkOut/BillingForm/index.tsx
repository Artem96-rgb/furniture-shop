"use client";

import { useForm } from "react-hook-form";
import FormLabel from "@/components/form/FormLabel";
import FormError from "@/components/form/FormError";
import FormInput from "@/components/form/FormInput";
import FormTextArea from "@/components/form/FormTextArea";
import Button from "@/components/ui/Button";

interface IBillingFormValues {
	firstName: string;
	lastName: string;
	companyName: string;
	email: string;
	subject: string;
	message: string;
}

export default function BillingForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IBillingFormValues>();

	const onSubmit = (data: IBillingFormValues) => {
		console.log("FORM DATA:", data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-x-8 gap-y-9">
			<div className="col-span-1">
				<FormLabel label="First Name" required htmlFor="firstName" />
				<FormInput
					id="firstName"
					placeholder="Your name"
					register={register("firstName", { required: true })}
				/>
				{errors.firstName && <FormError message="Please enter your name" />}
			</div>

			<div className="col-span-1">
				<FormLabel label="Last Name" required htmlFor="lastName" />
				<FormInput
					id="lastName"
					placeholder="Your name"
					register={register("lastName", { required: true })}
				/>
				{errors.lastName && <FormError message="Please enter your name" />}
			</div>

			<div className="col-span-2">
				<FormLabel label="Company Name (Optional)" htmlFor="companyName" />
				<FormInput
					id="companyName"
					placeholder="Company name"
					register={register("companyName")}
				/>
			</div>

			<div className="col-span-2">
				<FormLabel label="Your email address" required htmlFor="email" />
				<FormInput
					id="email"
					placeholder="Your email address"
					register={register("email", { required: true })}
				/>
				{errors.email && <FormError message="Please enter your email address" />}
			</div>

			<div>
				<FormLabel label="Subject" required htmlFor="subject" />
				<FormInput
					id="subject"
					placeholder="Subject"
					register={register("subject", { required: true })}
				/>
				{errors.subject && <FormError message="Please enter subject" />}
			</div>

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
