"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import FormInput from "@/components/form/FormInput";
import FormError from "@/components/form/FormError";
import { notifySuccess } from "@/lib/utils";

interface ISubscribeFormValues {
	email: string;
}

export default function Subscribe() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<ISubscribeFormValues>();

	useEffect(() => {
		if (isSubmitSuccessful) {
			notifySuccess("Product added to comparison");
		}
	}, [isSubmitSuccessful]);

	const onSubmit = (data: ISubscribeFormValues) => {
		console.log("FORM DATA:", data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid lg:grid-cols-[200px_auto] items-start gap-3"
		>
			<div className="">
				<FormInput
					className="border-x-0 border-t-0 px-0 rounded-none h-auto text-sm pb-0.75"
					placeholder="Enter Your Email Address"
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
			<Button
				type="submit"
				className="border-x-0 border-t-0 text-sm font-medium pb-0.75 rounded-none"
			>
				SUBSCRIBE
			</Button>
		</form>
	);
}
