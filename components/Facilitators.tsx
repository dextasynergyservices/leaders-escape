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
							Meet Nkechi Ken Nkwonta
						</h2>

						{/* Decorative line with leaf */}
						<div className="my-5 md:my-8 flex items-center gap-3">
							<div className="h-px w-10 bg-[#E0672A]/70" />
							<Leaf className="text-[#E0672A]" size={18} strokeWidth={1.5} />
							<div className="h-px w-20 bg-[#E0672A]/70" />
						</div>

						<div className="space-y-4 md:space-y-6 text-[14px] md:text-[15px] lg:text-[17px] leading-[1.6] md:leading-[1.75] text-[#D8E0E2]">
							<p className="font-semibold text-[#E0672A] mb-1">
								AKA Structure Queen
							</p>
							<p>
								Nkechi Ken-Nkwonta, widely known as the Structure Queen, is a
								distinguished leadership strategist and institutional architect
								with over 17 years of building and managing organisations with
								intentional structure and strategic foresight. Her leadership
								journey has been defined by a deep commitment to governance,
								policy development, operational excellence, and sustainable
								growth. She is widely respected for positioning structure not as
								bureaucracy, but as the strategic framework that protects vision
								and secures longevity.
							</p>

							{/* Read more button */}
							<button
								type="button"
								onClick={() => setIsModalOpen(true)}
								className="text-[#E0672A] font-semibold flex items-center hover:underline"
							>
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Read More Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#051F23]/95 px-5 backdrop-blur-md">
					<div className="relative w-full max-w-sm md:max-w-2xl rounded-[24px] bg-white/[0.05] border border-white/10 p-6 md:p-8 shadow-2xl">
						<button
							type="button"
							onClick={() => setIsModalOpen(false)}
							className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-black/20 rounded-full p-1"
							aria-label="Close modal"
						>
							<X size={20} />
						</button>
						<h3 className="font-serif text-[24px] text-[#FAF8F3] mb-5 pr-8 leading-tight">
							Meet Nkechi Ken Nkwonta
						</h3>
						<div className="space-y-4 text-[14px] leading-[1.65] text-[#D8E0E2] max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
							<p className="font-semibold text-[#E0672A] mb-1">
								AKA Structure Queen
							</p>
							<p>
								Nkechi Ken-Nkwonta, widely known as the Structure Queen, is a
								distinguished leadership strategist and institutional architect
								with over 17 years of building and managing organisations with
								intentional structure and strategic foresight. Her leadership
								journey has been defined by a deep commitment to governance,
								policy development, operational excellence, and sustainable
								growth. She is widely respected for positioning structure not as
								bureaucracy, but as the strategic framework that protects vision
								and secures longevity.
							</p>
							<p>
								Passionate about leadership enhancement, organizational growth,
								and generational continuity, Nkechi has consistently championed
								the shift from personality-driven enterprises to principle-led
								institutions. She equips founders, school owners, and executive
								teams with the clarity and systems required to institutionalize
								their vision, strengthen culture, and develop leaders who can
								carry the mandate forward. Her philosophy is firm: true
								leadership is measured not by presence, but by permanence.
							</p>
							<p>
								Now, with the wisdom of experience and a legacy-driven
								conviction, Nkechi is committed to supporting other leaders in
								actualizing their vision of longevity. As the convener of
								Leading Beyond Yourself (a strategic succession planning
								leadership conference) and Leaders Escape ( a 3days and 3 nights
								retreat for C-suite and emerging leaders), she is building a
								community of forward-thinking leaders who are ready to move
								beyond success toward succession — and beyond influence toward
								enduring impact while maintaining good health and sound mind.
							</p>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
