import Image from "next/image";
import { IImage } from "@/types";
export default function ProductImageThumbnail({ src, alt }: IImage) {
	return <Image src={src} alt={alt} width={108} height={114} className="rounded-md" />;
}
