import { z } from "zod";

export const FormSchema = z.object({
	firstName: z.string().min(1, { message: "First name cannot be empty" }),
	lastName: z.string().min(1, { message: "Last name cannot be empty" }),
	companyName: z.string().optional(),
	country: z.string().min(1, { message: "Country cannot be empty" }),
	streetAddress: z.string().min(1, { message: "Street address name cannot be empty" }),
	city: z.string().min(1, { message: "City cannot be empty" }),
	province: z.string().min(1, { message: "Province cannot be empty" }),
	zipCode: z.string().min(1, { message: "Zip code cannot be empty" }),
	phone: z
		.string()
		.min(10, { message: "Phone number must be at least 10 digits" })
		.max(15, { message: "Phone number cannot exceed 15 digits" })
		.regex(/^\+?\d+$/, { message: "Phone number can only contain digits and + sign" }),
	email: z.email({ message: "Invalid email format" }),
	additionalInformation: z.string().optional(),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
