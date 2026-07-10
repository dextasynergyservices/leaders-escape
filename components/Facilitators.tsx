"use client";

import { Leaf, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Convener() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isModalOpen]);

	return (
		<section className="relative overflow-hidden py-16 md:py-32">
			{/* CSS Background Images */}
			<div
				className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:hidden"
				style={{
					backgroundImage:
						"url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783622961/ChatGPT_Image_Jul_9_2026_07_49_10_PM_vi4etk.png')",
				}}
			/>
			<div
				className="absolute inset-0 z-0 hidden md:block bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage:
						"url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783622828/ChatGPT_Image_Jul_9_2026_07_46_54_PM_urgwpv.png')",
				}}
			/>

			<div
				ref={ref}
				className={`relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 transition-all duration-1000 ${
					isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
				}`}
			>
				<div className="flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12 lg:gap-20">
					{/* Image */}
					<div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
						<div className="relative w-full aspect-square md:aspect-[4/5] max-w-[320px] sm:max-w-[400px] lg:max-w-none overflow-hidden rounded-[24px] lg:rounded-[24px] lg:rounded-tl-[160px] shadow-2xl border border-white/5">
							<Image
								src="https://res.cloudinary.com/dxoorukfj/image/upload/v1783667058/Nkechi_Ken-Nkwonta._2_h4c1vn.png"
								alt="Nkechi Ken-Nkwonta"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
								priority
							/>
						</div>
					</div>

					{/* Content */}
					<div className="w-full lg:w-1/2 flex flex-col">
						<p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E0672A] md:text-[13px]">
							THE CONVENER
						</p>

						{/* Desktop only line under subtitle */}
						<div className="mb-6 h-[2px] w-12 bg-[#E0672A] hidden lg:block" />

						<h2 className="font-serif text-[32px] leading-[1.1] text-[#FAF8F3] md:text-[4.5rem]">
							Meet
							<br />
							Nkechi Ken-Nkwonta.
						</h2>

						{/* Decorative line with leaf */}
						<div className="my-5 md:my-8 flex items-center gap-3">
							<div className="h-px w-10 bg-[#E0672A]/70" />
							<Leaf className="text-[#E0672A]" size={18} strokeWidth={1.5} />
							<div className="h-px w-20 bg-[#E0672A]/70" />
						</div>

						<div className="space-y-4 md:space-y-6 text-[14px] md:text-[15px] lg:text-[17px] leading-[1.6] md:leading-[1.75] text-[#D8E0E2]">
							<p>
								With over a decade of experience in leadership development and
								organizational psychology, Nkechi Ken-Nkwonta has dedicated her
								career to transforming the way leaders think, communicate, and
								inspire.
							</p>

							{/* Desktop visible paragraphs */}
							<div className="hidden md:block space-y-6">
								<p>
									Her unique approach combines evidence-based coaching
									methodologies with deep empathy and cultural intelligence,
									creating a safe space for executives to explore their
									potential and overcome limitations.
								</p>
								<p>
									From Fortune 500 C-suite executives to emerging leaders,
									Nkechi has guided over 500 professionals through
									transformative journeys that have resulted in promotions,
									successful organizational changes, and profound personal
									growth.
								</p>
							</div>

							{/* Mobile read more button */}
							<button
								type="button"
								onClick={() => setIsModalOpen(true)}
								className="md:hidden text-[#E0672A] font-semibold flex items-center hover:underline"
							>
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Read More Modal for Mobile */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#051F23]/95 px-5 md:hidden backdrop-blur-md">
					<div className="relative w-full max-w-sm rounded-[24px] bg-white/[0.05] border border-white/10 p-6 shadow-2xl">
						<button
							type="button"
							onClick={() => setIsModalOpen(false)}
							className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-black/20 rounded-full p-1"
							aria-label="Close modal"
						>
							<X size={20} />
						</button>
						<h3 className="font-serif text-[24px] text-[#FAF8F3] mb-5 pr-8 leading-tight">
							About Nkechi
						</h3>
						<div className="space-y-4 text-[14px] leading-[1.65] text-[#D8E0E2] max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
							<p>
								With over a decade of experience in leadership development and
								organizational psychology, Nkechi Ken-Nkwonta has dedicated her
								career to transforming the way leaders think, communicate, and
								inspire.
							</p>
							<p>
								Her unique approach combines evidence-based coaching
								methodologies with deep empathy and cultural intelligence,
								creating a safe space for executives to explore their potential
								and overcome limitations.
							</p>
							<p>
								From Fortune 500 C-suite executives to emerging leaders, Nkechi
								has guided over 500 professionals through transformative
								journeys that have resulted in promotions, successful
								organizational changes, and profound personal growth.
							</p>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
