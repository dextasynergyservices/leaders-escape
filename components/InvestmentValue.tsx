"use client";

import { ArrowRight, CheckCircle2, Gift, X } from "lucide-react";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const valueProps = [
	"3 Days of Premium Luxury Accommodation",
	"Gourmet Dining & Curated Executive Meals",
	"Exclusive Masterclasses & Strategy Sessions",
	"1-on-1 Access to World-Class Facilitators",
	"Private Wellness & Mindfulness Sessions",
	"High-Level Peer Networking Access",
	"Post-Retreat Implementation Coaching",
];

interface InvestmentValueProps {
	onRegister?: () => void;
}

export default function InvestmentValue({ onRegister }: InvestmentValueProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<section className="relative w-full py-16 md:py-28 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#F9F7F3] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783672116/ChatGPT_Image_Jul_10_2026_09_28_07_AM_imyih7.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783672071/ChatGPT_Image_Jul_10_2026_09_25_50_AM_dnw5sy.png')] overflow-hidden px-4">
				<div
					ref={ref}
					className={`relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
				>
					{/* VALUE OF YOUR INVESTMENT */}
					<div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6 w-full">
						<span className="text-[#E0672A] text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
							Value of Your Investment
						</span>
					</div>

					{/* Headline */}
					<h2 className="font-serif text-[36px] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] md:leading-[1.05] text-[#0D4D55] mb-4 md:mb-6">
						An Unrivalled Return on Growth
						<span className="text-[#E0672A]">.</span>
					</h2>

					{/* Subtitle */}
					<p className="font-sans text-[rgba(13,77,85,0.7)] text-[14px] md:text-[19px] max-w-2xl mx-auto leading-[1.6] mb-10 md:mb-16">
						The tangible and intangible value of this exclusive experience
						<br className="hidden md:block" /> far exceeds the investment. Space
						is strictly limited to ensure intimacy.
					</p>

					{/* Card Container */}
					<div className="w-full max-w-5xl bg-[#0D4D55] rounded-[24px] md:rounded-[40px] p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-stretch gap-0 text-left shadow-[0_24px_64px_rgba(13,77,85,0.2)] border border-[rgba(255,255,255,0.05)]">
						{/* Left Col - Checkmarks */}
						<div className="w-full md:w-1/2 flex flex-col md:pr-10 lg:pr-16">
							<div className="flex items-center gap-4 md:mb-10">
								<h3 className="font-serif text-white text-[28px] md:text-[36px]">
									What&apos;s Included
								</h3>
							</div>

							<ul className="flex flex-col gap-4 md:gap-5">
								{valueProps.map((prop, idx) => (
									<li
										key={prop}
										className={`flex items-center gap-3 md:gap-4 ${idx >= 3 ? "hidden md:flex" : ""}`}
									>
										<CheckCircle2
											className="text-[#E0672A] w-5 h-5 md:w-6 md:h-6 shrink-0"
											strokeWidth={1.5}
										/>
										<span className="font-sans text-[rgba(255,255,255,0.9)] text-[13px] md:text-[16px] leading-tight">
											{prop}
										</span>
									</li>
								))}
							</ul>

							{/* Mobile View Button */}
							<button
								type="button"
								onClick={() => setIsModalOpen(true)}
								className="md:hidden flex items-center gap-2 text-[#E0672A] text-[14px] font-medium hover:underline mt-2 mb-4"
							>
								View all 7 inclusions <ArrowRight className="w-4 h-4" />
							</button>
						</div>

						{/* Right Col - Price & CTA */}
						<div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:pl-10 lg:pl-16">
							<div className="flex items-center justify-center gap-3 md:mb-6 w-full"></div>

							<span className="font-serif text-[56px] md:text-[72px] lg:text-[88px] text-white leading-none mb-4 md:mb-6 tracking-tight">
								₦500,000
							</span>

							<button
								type="button"
								onClick={onRegister}
								className="group flex items-center justify-center gap-3 bg-[#E0672A] hover:bg-[#c25522] text-white h-[48px] md:h-14 px-8 md:px-12 rounded-[12px] md:rounded-xl font-sans font-medium text-[14px] md:text-[16px] transition-all shadow-[0_0_24px_rgba(224,103,42,0.4)] hover:shadow-[0_0_32px_rgba(224,103,42,0.6)] w-full sm:w-auto mb-6"
							>
								Reserve Your Place
								<ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
							</button>

							<div className="flex items-center gap-2 text-[rgba(255,255,255,0.6)]">
								<CheckCircle2
									className="w-4 h-4 md:w-4 md:h-4"
									strokeWidth={1.5}
								/>
								<span className="text-[11px] md:text-[13px] font-sans">
									Limited spots available
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mobile Modal for Inclusions */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 md:hidden">
					<div className="relative w-full max-w-md bg-[#0D4D55] rounded-[24px] p-6 border border-white/10 shadow-2xl">
						<button
							type="button"
							onClick={() => setIsModalOpen(false)}
							className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-black/20 rounded-full p-1"
							aria-label="Close modal"
						>
							<X className="w-6 h-6" />
						</button>

						<div className="flex items-center gap-3 mb-6">
							<div className="w-10 h-10 rounded-full border border-[#E0672A] flex items-center justify-center shrink-0">
								<Gift className="text-[#E0672A] w-4 h-4" strokeWidth={1.5} />
							</div>
							<h3 className="font-serif text-white text-[24px]">
								What&apos;s Included
							</h3>
						</div>

						<ul className="flex flex-col gap-4">
							{valueProps.map((prop) => (
								<li key={prop} className="flex items-center gap-3">
									<CheckCircle2
										className="text-[#E0672A] w-5 h-5 shrink-0"
										strokeWidth={1.5}
									/>
									<span className="font-sans text-[rgba(255,255,255,0.9)] text-[14px] leading-tight text-left">
										{prop}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</>
	);
}
