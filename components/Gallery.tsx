"use client";

import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const galleryImages = [
	"https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1510531704581-5b2870972060?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
];

export default function Gallery() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);
	const [activeIndex, setActiveIndex] = useState(0);
	const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(
		null,
	);
	const mobileImages = galleryImages.slice(0, 4);

	// Handle escape key to close lightbox
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setLightboxImageIndex(null);
			if (e.key === "ArrowRight" && lightboxImageIndex !== null) {
				setLightboxImageIndex((prev) =>
					prev === galleryImages.length - 1 ? 0 : (prev as number) + 1,
				);
			}
			if (e.key === "ArrowLeft" && lightboxImageIndex !== null) {
				setLightboxImageIndex((prev) =>
					prev === 0 ? galleryImages.length - 1 : (prev as number) - 1,
				);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [lightboxImageIndex]);

	// Prevent scrolling when lightbox is open
	useEffect(() => {
		if (lightboxImageIndex !== null) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [lightboxImageIndex]);

	return (
		<>
			<section className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center bg-[#FAF8F3] overflow-hidden">
				<div
					ref={ref}
					className={`relative z-10 w-full max-w-7xl px-4 md:px-6 mx-auto flex flex-col items-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
				>
					<div className="flex flex-col items-center text-center mb-10 md:mb-20">
						<p className="text-[#E0672A] uppercase tracking-[0.15em] text-[13px] md:text-sm font-semibold mb-4 md:mb-5">
							The Experience
						</p>
						<h2 className="font-serif text-[36px] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] md:leading-[1.05] text-[#0D4D55] mb-5 md:mb-6">
							A Glimpse of
							<br className="md:hidden" /> the Escape.
						</h2>
						<div className="w-10 h-[2px] bg-[#E0672A] mb-5 md:hidden"></div>
						<p className="font-sans text-[rgba(13,77,85,0.85)] text-[15px] md:text-xl max-w-2xl leading-[1.6]">
							Where sophisticated environments
							<br className="md:hidden" /> meet untamed nature.
						</p>
					</div>

					{/* Mobile Gallery Layout */}
					<div className="md:hidden flex flex-col w-full">
						{/* Featured Image */}
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: Interactive featured image */}
						{/* biome-ignore lint/a11y/noStaticElementInteractions: Interactive featured image */}
						<div
							className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-[rgba(13,77,85,0.08)] shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E0672A]"
							onClick={() => setLightboxImageIndex(activeIndex)}
						>
							<Image
								src={mobileImages[activeIndex]}
								alt="Gallery featured"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
							/>
							{/* Expand Icon */}
							<div className="absolute bottom-4 right-4 w-9 h-9 bg-[#0D4D55] rounded-full flex items-center justify-center text-white shadow-md">
								<Maximize2 size={16} />
							</div>
						</div>

						{/* Pagination Dots */}
						<div className="flex justify-center gap-2 mb-8">
							{mobileImages.map((_, idx) => (
								<button
									type="button"
									// biome-ignore lint/suspicious/noArrayIndexKey: Static pagination list
									key={idx}
									onClick={() => setActiveIndex(idx)}
									className={`w-2 h-2 rounded-full transition-colors ${
										idx === activeIndex ? "bg-[#E0672A]" : "bg-[#E0672A]/20"
									}`}
									aria-label={`View image ${idx + 1}`}
								/>
							))}
						</div>

						{/* Thumbnails */}
						<div className="grid grid-cols-3 gap-3 mb-10">
							{mobileImages
								.map((src, originalIndex) => ({ src, originalIndex }))
								.filter((img) => img.originalIndex !== activeIndex)
								.map((img) => (
									<button
										type="button"
										key={img.originalIndex}
										onClick={() => setActiveIndex(img.originalIndex)}
										className="relative aspect-[3/4] rounded-[20px] overflow-hidden border border-[rgba(13,77,85,0.08)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0672A]/50 transition-transform active:scale-95"
										aria-label={`Select image ${img.originalIndex + 1}`}
									>
										<Image
											src={img.src}
											alt={`Gallery thumbnail ${img.originalIndex}`}
											fill
											sizes="(max-width: 768px) 33vw, 20vw"
											className="object-cover"
										/>
									</button>
								))}
						</div>

						{/* View Gallery Link */}
						<div className="flex justify-center">
							<button
								type="button"
								onClick={() => setLightboxImageIndex(0)}
								className="flex items-center gap-1.5 text-[#0D4D55] font-sans text-[15px] font-medium border-b border-[#E0672A] pb-0.5"
							>
								View Gallery{" "}
								<ChevronRight
									size={16}
									className="text-[#E0672A]"
									strokeWidth={2.5}
								/>
							</button>
						</div>
					</div>

					{/* Desktop Masonry/Grid Gallery */}
					<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
						{galleryImages.map((src, index) => (
							<button
								type="button"
								key={src}
								onClick={() => setLightboxImageIndex(index)}
								className={`block text-left relative w-full overflow-hidden rounded-3xl aspect-[4/3] md:aspect-[4/3] border border-[rgba(13,77,85,0.08)] shadow-[0_8px_32px_rgba(13,77,85,0.04)] group transform transition-all duration-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E0672A] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
								style={{
									transitionDelay: isVisible ? `${index * 75}ms` : "0ms",
								}}
							>
								<Image
									src={src}
									alt={`Gallery item ${index + 1}`}
									fill
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
									<div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
										<Maximize2 size={20} />
									</div>
								</div>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Lightbox Modal */}
			{lightboxImageIndex !== null && (
				<button
					type="button"
					className="block w-full h-full text-left fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 backdrop-blur-sm cursor-default"
					onClick={() => setLightboxImageIndex(null)}
				>
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							setLightboxImageIndex(null);
						}}
						className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors bg-white/10 rounded-full p-2 z-50"
						aria-label="Close lightbox"
					>
						<X className="w-6 h-6 md:w-8 md:h-8" />
					</button>

					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							setLightboxImageIndex((prev) =>
								prev === 0 ? galleryImages.length - 1 : (prev as number) - 1,
							);
						}}
						className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-white/10 rounded-full p-3 z-50"
						aria-label="Previous image"
					>
						<ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
					</button>

					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							setLightboxImageIndex((prev) =>
								prev === galleryImages.length - 1 ? 0 : (prev as number) + 1,
							);
						}}
						className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-white/10 rounded-full p-3 z-50"
						aria-label="Next image"
					>
						<ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
					</button>

					<button
						type="button"
						className="block text-left relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center cursor-default"
						onClick={(e) => e.stopPropagation()}
					>
						<Image
							src={galleryImages[lightboxImageIndex]}
							alt={`Gallery full view ${lightboxImageIndex + 1}`}
							fill
							className="object-contain"
							sizes="100vw"
							priority
						/>
					</button>

					<div className="absolute bottom-6 flex justify-center gap-2">
						{galleryImages.map((_, idx) => (
							<button
								type="button"
								// biome-ignore lint/suspicious/noArrayIndexKey: Static pagination list
								key={idx}
								onClick={(e) => {
									e.stopPropagation();
									setLightboxImageIndex(idx);
								}}
								className={`w-2 h-2 rounded-full transition-colors ${
									idx === lightboxImageIndex ? "bg-white" : "bg-white/30"
								}`}
							/>
						))}
					</div>
				</button>
			)}
		</>
	);
}
