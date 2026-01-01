interface IFormErrorProps {
	message: string;
}

export default function FormError({ message }: IFormErrorProps) {
	return <p className="text-red-500 text-sm mt-1">{message}</p>;
}
