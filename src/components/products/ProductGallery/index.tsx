"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { Heart, Scale } from "lucide-react";
import CompareProduct from "@/components/products/CompareProduct";
import WishlistProduct from "@/components/products/WishlistProduct";

interface IProductGalleryProps {
	images: string[];
	className?: string;
	productId: string;
}

export default function ProductGallery({ images, className, productId }: IProductGalleryProps) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

	return (
		<div className={cn("space-y-5", className)}>
			{/* Large Image */}
			{/*<div className="w-full flex items-center justify-center relative">*/}
			{/*	<Image*/}
			{/*		src={activeImage}*/}
			{/*		alt="product"*/}
			{/*		width="570"*/}
			{/*		height="602"*/}
			{/*		className="rounded-xl"*/}
			{/*	/>*/}

			<Swiper
				spaceBetween={12}
				slidesPerView={1}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
			>
				{images.map(img => (
					<SwiperSlide key={img}>
						<Button className="border-none">
							<Image
								src={img}
								alt="thumb"
								width="570"
								height="602"
								className="rounded-xl"
							/>
						</Button>
					</SwiperSlide>
				))}

				<div className="absolute top-5 right-5 space-y-2 z-10">
					<CompareProduct productId={productId}>
						<Scale size="18" />
					</CompareProduct>

					<WishlistProduct productId={productId}>
						<Heart size="18" />
					</WishlistProduct>
				</div>
			</Swiper>

			{/* Thumbnails Slider */}
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={12}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
			>
				{images.map(img => (
					<SwiperSlide key={img}>
						<Button className="border-none">
							<Image
								src={img}
								alt="thumb"
								width="570"
								height="602"
								className="rounded-xl"
							/>
						</Button>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
