"use client";

import { useForm, Controller } from "react-hook-form";
import FormLabel from "@/components/form/FormLabel";
import FormError from "@/components/form/FormError";
import FormInput from "@/components/form/FormInput";
import FormTextArea from "@/components/form/FormTextArea";
import Button from "@/components/ui/Button";
import FormSelect from "@/components/form/FormSelect";
import { useEffect } from "react";
import { notifySuccess } from "@/lib/utils";

interface IBillingFormValues {
	firstName: string;
	lastName: string;
	companyName: string;
	country: string;
	streetAddress: string;
	city: string;
	province: string;
	zipCode: string;
	phone: string;
	email: string;
	additionalInformation: string;
}

const countries = [
	{ label: "France", value: "france" },
	{ label: "Germany", value: "germany" },
	{ label: "USA", value: "usa" },
];

const provinces = [
	{ label: "Western Province", value: "western-province" },
	{ label: "Eastern Province", value: "eastern-province" },
];

export default function BillingForm() {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<IBillingFormValues>();

	useEffect(() => {
		if (isSubmitSuccessful) {
			notifySuccess("Form Sent");
		}
	}, [isSubmitSuccessful]);

	const onSubmit = (data: IBillingFormValues) => {
		console.log("FORM DATA:", data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-x-8 gap-y-6 lg:gap-y-9">
			<div className="col-span-2 md:col-span-1">
				<FormLabel label="First Name" required htmlFor="firstName" />
				<FormInput
					id="firstName"
					placeholder="Your name"
					register={register("firstName", { required: true })}
				/>
				{errors.firstName && <FormError message="Please enter your name" />}
			</div>

			<div className="col-span-2 md:col-span-1">
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

			<div className="col-span-2 relative">
				<FormLabel label="Country / Region" required asDiv />

				<Controller
					name="country"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<FormSelect
							value={field.value}
							onChange={field.onChange}
							options={countries}
							placeholder="Select country"
						/>
					)}
				/>

				{errors.country && <FormError message="Please select a subject" />}
			</div>

			<div className="col-span-2">
				<FormLabel label="Street address" required htmlFor="streetAddress" />
				<FormInput
					id="streetAddress"
					placeholder="Your street address"
					register={register("streetAddress", { required: true })}
				/>
				{errors.streetAddress && <FormError message="Please enter your street address" />}
			</div>

			<div className="col-span-2">
				<FormLabel label="Town / City" required htmlFor="city" />
				<FormInput
					id="city"
					placeholder="Your city"
					register={register("city", { required: true })}
				/>
				{errors.city && <FormError message="Please enter your city" />}
			</div>

			<div className="col-span-2 relative">
				<FormLabel label="Province" required asDiv />

				<Controller
					name="province"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<FormSelect
							value={field.value}
							onChange={field.onChange}
							options={provinces}
							placeholder="Select province"
						/>
					)}
				/>

				{errors.country && <FormError message="Please select a subject" />}
			</div>

			<div className="col-span-2">
				<FormLabel label="ZIP code" required htmlFor="zipCode" />
				<FormInput
					id="zipCode"
					placeholder="Your ZIP code"
					register={register("zipCode", { required: true })}
				/>
				{errors.zipCode && <FormError message="Please enter your ZIP code" />}
			</div>

			<div className="col-span-2">
				<FormLabel label="Phone" required htmlFor="phone" />
				<FormInput
					id="phone"
					type="tel"
					placeholder="Your phone"
					register={register("phone", {
						required: true,
						minLength: 6,
						maxLength: 12,
						pattern: /^[0-9]+$/,
					})}
				/>
				{errors.phone && (
					<FormError
						message={
							errors.phone.type === "required"
								? "Please enter your phone"
								: errors.phone.type === "minLength"
									? "Phone number is too short"
									: errors.phone.type === "maxLength"
										? "Phone number is too long"
										: errors.phone.type === "pattern"
											? "Phone can only contain digits"
											: "Invalid phone number"
						}
					/>
				)}
			</div>

			<div className="col-span-2">
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

			<div className="col-span-2">
				<FormTextArea
					placeholder="Additional information"
					register={register("additionalInformation")}
				/>
			</div>

			<Button type="submit" className="btn-transparent text-xl max-w-79.5 h-16 rounded-md">
				Place order
			</Button>
		</form>
	);
}
