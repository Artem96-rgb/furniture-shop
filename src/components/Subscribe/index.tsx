"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import FormInput from "@/components/form/FormInput";
import FormError from "@/components/form/FormError";
import { notifySuccess } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, FormSchemaType } from "@/lib/zod/schema";

export default function Subscribe() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
	});

	useEffect(() => {
		if (isSubmitSuccessful) {
			notifySuccess("You successfully subscribed");
		}
	}, [isSubmitSuccessful]);

	const onSubmit = (data: FormSchemaType) => {
		console.log("FORM DATA:", data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid lg:grid-cols-[200px_auto] items-start gap-3"
		>
			<div>
				<FormInput
					className="border-x-0 border-t-0 px-0 rounded-none h-auto text-sm pb-0.75"
					placeholder="Enter Your Email Address"
					{...register("email")}
				/>
				{errors.email?.message && <FormError message={errors.email.message} />}
			</div>
			<Button
				type="submit"
				className="border-x-0 border-t-0 text-sm font-medium pb-0.75 rounded-none"
			>
				SUBSCRIBE
			</Button>
		</form>
	);
}
