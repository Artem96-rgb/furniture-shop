import NoProductsMessage from "@/components/blocks/NoProductsMessage";

export default function NotFound() {
	return (
		<div className="container flex-center flex-col bg-white text-center my-10">
			<NoProductsMessage
				title="404"
				subtitle="Sorry, the page you're looking for doesn’t exist."
			/>
		</div>
	);
}
