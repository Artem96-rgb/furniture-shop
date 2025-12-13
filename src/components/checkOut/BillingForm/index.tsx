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
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, FormSchemaType } from "@/lib/zod/schema";

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
	} = useForm<FormSchemaType>({
		defaultValues: {
			country: "",
		},
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
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-x-8 gap-y-6 lg:gap-y-9">
			<div className="col-span-2 md:col-span-1">
				<FormLabel label="First Name" required htmlFor="firstName" />
				<FormInput id="firstName" placeholder="Your name" {...register("firstName")} />
				{errors.firstName?.message && <FormError message={errors.firstName.message} />}
			</div>

			<div className="col-span-2 md:col-span-1">
				<FormLabel label="Last Name" required htmlFor="lastName" />
				<FormInput id="lastName" placeholder="Your name" {...register("lastName")} />
				{errors.lastName?.message && <FormError message={errors.lastName.message} />}
			</div>

			<div className="col-span-2">
				<FormLabel label="Company Name (Optional)" htmlFor="companyName" />
				<FormInput
					id="companyName"
					placeholder="Company name"
					{...register("companyName")}
				/>
			</div>

			<div className="col-span-2 relative">
				<FormLabel label="Country / Region" required asDiv />

				<Controller
					name="country"
					control={control}
					render={({ field }) => (
						<FormSelect
							value={field.value}
							onChange={field.onChange}
							options={countries}
							placeholder="Select country"
						/>
					)}
				/>

				{errors.country?.message && <FormError message={errors.country.message} />}
			</div>

			<div className="col-span-2">
				<FormLabel label="Street address" required htmlFor="streetAddress" />
				<FormInput
					id="streetAddress"
					placeholder="Your street address"
					{...register("streetAddress")}
				/>

				{errors.streetAddress?.message && (
					<FormError message={errors.streetAddress.message} />
				)}
			</div>

			<div className="col-span-2">
				<FormLabel label="Town / City" required htmlFor="city" />
				<FormInput id="city" placeholder="Your city" {...register("city")} />

				{errors.city?.message && <FormError message={errors.city.message} />}
			</div>

			<div className="col-span-2 relative">
				<FormLabel label="Province" required asDiv />

				<Controller
					name="province"
					control={control}
					render={({ field }) => (
						<FormSelect
							value={field.value}
							onChange={field.onChange}
							options={provinces}
							placeholder="Select province"
						/>
					)}
				/>

				{errors.province?.message && <FormError message={errors.province.message} />}
			</div>

			<div className="col-span-2">
				<FormLabel label="ZIP code" required htmlFor="zipCode" />
				<FormInput id="zipCode" placeholder="Your ZIP code" {...register("zipCode")} />

				{errors.zipCode?.message && <FormError message={errors.zipCode.message} />}
			</div>

			<div className="col-span-2">
				<FormLabel label="Phone" required htmlFor="phone" />
				<FormInput id="phone" type="tel" {...register("phone")} placeholder="Your phone" />
				{errors.phone?.message && <FormError message={errors.phone.message} />}
			</div>

			<div className="col-span-2">
				<FormLabel label="Your email address" required htmlFor="email" />
				<FormInput id="email" placeholder="Your email address" {...register("email")} />

				{errors.email?.message && <FormError message={errors.email.message} />}
			</div>

			<div className="col-span-2">
				<FormTextArea
					placeholder="Additional information"
					{...register("additionalInformation")}
				/>
			</div>

			<Button type="submit" className="btn-transparent text-xl max-w-79.5 h-16 rounded-md">
				Place order
			</Button>
		</form>
	);
}
