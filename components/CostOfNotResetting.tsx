"use client";

import { Users } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function CostOfNotResetting() {
	const ref1 = useRef<HTMLDivElement>(null);
	const ref2 = useRef<HTMLDivElement>(null);
	const ref3 = useRef<HTMLDivElement>(null);
	const isVisible1 = useIntersectionObserver(ref1);
	const isVisible2 = useIntersectionObserver(ref2);
	const isVisible3 = useIntersectionObserver(ref3);

	return (
		<div className="w-full flex flex-col">
			{/* Block 1 — The Hidden Cost of Not Resetting */}
			<section className="relative w-full py-16 md:py-28 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#F9F7F3] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625210/ChatGPT_Image_Jul_9_2026_08_26_40_PM_cbvu9q.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625083/ChatGPT_Image_Jul_9_2026_08_24_16_PM_spo5iy.png')] overflow-hidden">
				{/* Dotted Pattern */}
				<div className="absolute top-12 right-4 md:top-24 md:right-[10%] opacity-30 pointer-events-none z-0">
					<svg
						width="160"
						height="160"
						viewBox="0 0 160 160"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<pattern
							id="dots-grid-1"
							x="0"
							y="0"
							width="24"
							height="24"
							patternUnits="userSpaceOnUse"
						>
							<circle cx="2" cy="2" r="1.5" fill="#0D4D55" opacity="0.4" />
						</pattern>
						<rect width="160" height="160" fill="url(#dots-grid-1)" />
					</svg>
				</div>

				<div
					ref={ref1}
					className={`relative z-10 w-full max-w-6xl px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000 transform ${isVisible1 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
				>
					<div className="relative w-full md:w-1/2 aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_16px_40px_rgba(13,77,85,0.15)] border border-[rgba(13,77,85,0.08)] shrink-0 z-10">
						<Image
							src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
							alt="Executive Stress"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
					<div className="w-full md:w-1/2 flex flex-col relative z-10 md:pl-4 lg:pl-10">
						<p className="text-[#E0672A] uppercase tracking-[0.2em] text-[11px] md:text-[13px] font-bold mb-3 md:mb-4">
							The Leadership Reset
						</p>
						<h2 className="font-serif text-[32px] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] md:leading-[1.05] text-[#0D4D55] mb-5 md:mb-6 tracking-tight">
							The Hidden Cost of
							<br />
							Not Resetting<span className="text-[#E0672A]">.</span>
						</h2>
						<p className="font-sans text-[rgba(13,77,85,0.85)] text-[14px] md:text-[17px] leading-[1.65] mb-5 md:mb-6 max-w-lg">
							In the relentless pursuit of growth, the most critical asset—your
							own clarity and well-being—is often sacrificed. Continual pressure
							without strategic pauses leads to diminished creativity, impaired
							decision-making, and profound burnout.
						</p>
						<p className="font-sans text-[rgba(13,77,85,0.85)] text-[14px] md:text-[17px] leading-[1.65] max-w-lg">
							Ignoring the need to reset doesn&apos;t just affect you; it
							impacts your entire organization, stalling innovation and eroding
							the very foundation you&apos;ve worked so hard to build.
						</p>
					</div>
				</div>
			</section>

			{/* Block 2 — Reclaim Your Clarity */}
			<section className="relative w-full py-16 md:py-28 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#0D4D55] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783624321/ChatGPT_Image_Jul_9_2026_08_12_00_PM_vmlswu.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783624215/ChatGPT_Image_Jul_9_2026_08_10_13_PM_jssz7h.png')] overflow-hidden border-y border-[rgba(255,255,255,0.05)]">
				<div
					ref={ref2}
					className={`relative z-10 w-full max-w-6xl px-4 md:px-6 mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 transition-all duration-1000 transform ${isVisible2 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
				>
					<div className="relative w-full md:w-1/2 aspect-[16/10] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] shrink-0 z-10">
						<Image
							src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
							alt="Clarity and Focus"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
					<div className="w-full md:w-1/2 flex flex-col relative z-10 md:pr-4 lg:pr-10">
						<p className="text-[#E0672A] uppercase tracking-[0.2em] text-[11px] md:text-[13px] font-bold mb-3 md:mb-4">
							The Solution
						</p>
						<h2 className="font-serif text-[32px] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] md:leading-[1.05] text-white mb-5 md:mb-6 tracking-tight">
							Reclaim Your Clarity<span className="text-[#E0672A]">.</span>
						</h2>
						<p className="font-sans text-[rgba(255,255,255,0.85)] text-[14px] md:text-[17px] leading-[1.65] mb-5 md:mb-6 max-w-lg">
							Taking three days to step away from the noise is not a luxury; it
							is a strategic imperative. This retreat is designed specifically
							to break that cycle of exhaustion.
						</p>
						<p className="font-sans text-[rgba(255,255,255,0.85)] text-[14px] md:text-[17px] leading-[1.65] max-w-lg">
							By investing in your own renewal, you are securing the future
							trajectory of your vision. Return with absolute clarity,
							revitalized energy, and the invaluable perspectives gained from
							fellow leaders.
						</p>
					</div>
				</div>
			</section>

			{/* Block 3 — Exclusivity is Guaranteed */}
			<section className="relative w-full py-16 md:py-28 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#F9F7F3] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783672116/ChatGPT_Image_Jul_10_2026_09_28_07_AM_imyih7.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783672071/ChatGPT_Image_Jul_10_2026_09_25_50_AM_dnw5sy.png')] overflow-hidden">
				<div
					ref={ref3}
					className={`relative z-10 w-full max-w-3xl px-4 md:px-6 mx-auto flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible3 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
				>
					{/* Divider with Icon */}
					<div className="flex items-center justify-center w-full mb-6 md:mb-10">
						<div className="w-full h-px bg-gradient-to-r from-transparent to-[rgba(13,77,85,0.2)]" />
						<div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(13,77,85,0.08)] mx-4 shrink-0 relative z-10 border border-[rgba(13,77,85,0.05)]">
							<Users
								className="text-[#E0672A] w-7 h-7 md:w-9 md:h-9"
								strokeWidth={1.5}
							/>
						</div>
						<div className="w-full h-px bg-gradient-to-l from-transparent to-[rgba(13,77,85,0.2)]" />
					</div>

					<h2 className="font-serif text-[32px] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] md:leading-[1.05] text-[#0D4D55] mb-5 md:mb-6 tracking-tight">
						Exclusivity is Guaranteed<span className="text-[#E0672A]">.</span>
					</h2>

					<p className="font-sans text-[rgba(13,77,85,0.85)] text-[14px] md:text-[17px] max-w-2xl mx-auto leading-[1.6]">
						To preserve the intimacy, depth, and quality of the networking
						experience, attendance is strictly capped. Once the cohort is
						filled, applications will close until the following year.
					</p>
				</div>
			</section>
		</div>
	);
}
