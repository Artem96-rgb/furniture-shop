import { cn, formatPrice } from "@/lib/utils";

interface IProductPriceProps {
	price: number;
	oldPrice?: boolean;
	className?: string;
}

export default function ProductPrice({ price, className, oldPrice }: IProductPriceProps) {
	const formattedPrice = formatPrice(price);

	return <span className={cn(className, oldPrice && "line-through")}>Rp {formattedPrice}</span>;
}
