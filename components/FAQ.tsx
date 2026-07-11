"use client";

import {
	ArrowRight,
	Briefcase,
	Clock,
	Minus,
	Plane,
	Plus,
	ShieldCheck,
	Users,
} from "lucide-react";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ContactModal from "./ContactModal";

const faqs = [
	{
		question: "Is travel to the location included in the investment?",
		answer:
			"No, attendees are responsible for their own flights and transportation to the destination. However, all ground transportation, accommodations, meals, and experiences from the moment you arrive at the resort are fully covered.",
		icon: <Plane className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "Can I bring my spouse or partner?",
		answer:
			"To ensure a focused, intimate environment for peer-to-peer executive networking and deep strategy work, this specific retreat is strictly for the participating leaders only. We do offer separate couple's retreats later in the year.",
		icon: <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "What is the cancellation policy?",
		answer:
			"Due to the highly limited attendance (strictly capped at 25) and the upfront costs of curating this luxury experience, your deposit is non-refundable. However, it can be transferred to another eligible executive up to 30 days before the event.",
		icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "Will I have time to check in with my office?",
		answer:
			"Yes. While we strongly encourage a digital detox to maximize the value of your experience, we have intentionally built 'integration' blocks into the daily itinerary that you may use to handle urgent matters if absolutely necessary.",
		icon: <Clock className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "Is this suitable for early-stage startup founders?",
		answer:
			"This retreat is curated for established executives, seasoned founders, and industry leaders who have already reached a significant scale. If you are unsure if you qualify, please reach out to our team for a brief consultation.",
		icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
];

export default function FAQ() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [isContactOpen, setIsContactOpen] = useState(false);

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#F7F4EE] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625210/ChatGPT_Image_Jul_9_2026_08_26_40_PM_cbvu9q.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625083/ChatGPT_Image_Jul_9_2026_08_24_16_PM_spo5iy.png')] overflow-hidden">
			<div
				ref={ref}
				className={`relative z-10 w-full max-w-4xl px-4 md:px-6 mx-auto flex flex-col transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
			>
				{/* Header Section */}
				<div className="flex flex-col items-center text-center mb-10 md:mb-16 w-full">
					<div className="flex items-center justify-center gap-4 mb-4 md:mb-6 w-full max-w-sm">
						<span className="text-[#E0672A] uppercase tracking-[0.2em] text-[11px] md:text-[13px] font-bold whitespace-nowrap">
							COMMON QUESTIONS
						</span>
					</div>

					<h2 className="font-serif text-[36px] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] md:leading-[1.05] text-[#0D4D55] mb-4 md:mb-6 tracking-tight">
						What to Expect<span className="text-[#E0672A]">.</span>
					</h2>

					<p className="font-sans text-[rgba(13,77,85,0.7)] text-[15px] md:text-xl max-w-2xl leading-[1.6]">
						Everything you need to know about
						<br className="hidden md:block" /> the Leaders&apos; Escape
						experience.
					</p>
				</div>

				{/* Accordion Cards */}
				<div className="w-full flex flex-col gap-4">
					{faqs.map((faq, index) => {
						const isOpen = openIndex === index;

						return (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: Static FAQ list
								key={index}
								className="w-full bg-[#FCFBFA] rounded-[24px] md:rounded-[32px] border border-[rgba(13,77,85,0.04)] shadow-[0_8px_32px_rgba(13,77,85,0.03)] transition-all overflow-hidden"
							>
								<button
									type="button"
									onClick={() => toggleFaq(index)}
									className="w-full flex items-center justify-between p-3.5 md:p-6 text-left hover:bg-[rgba(13,77,85,0.02)] transition-colors focus:outline-none group"
								>
									<div className="flex items-center gap-3 md:gap-6 pr-2 md:pr-6">
										<div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#F3EFE9] flex items-center justify-center shrink-0 text-[#0D4D55] border border-[rgba(13,77,85,0.03)] group-hover:bg-[#EBE5DB] transition-colors">
											{faq.icon}
										</div>
										<span className="font-serif text-[16px] md:text-[24px] text-[#0D4D55] leading-snug">
											{faq.question}
										</span>
									</div>
									<div
										className={`flex-shrink-0 w-8 h-8 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-transform duration-300 bg-white border-[rgba(13,77,85,0.1)] text-[#0D4D55] shadow-sm ${isOpen ? "rotate-180" : ""}`}
									>
										{isOpen ? (
											<Minus
												className="w-4 h-4 md:w-5 md:h-5"
												strokeWidth={1.5}
											/>
										) : (
											<Plus
												className="w-4 h-4 md:w-5 md:h-5"
												strokeWidth={1.5}
											/>
										)}
									</div>
								</button>

								<div
									className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
								>
									<div className="px-3.5 md:px-6 pb-5 md:pb-8 pl-[66px] md:pl-[112px]">
										<p className="font-sans text-[rgba(13,77,85,0.75)] text-[14px] md:text-[17px] leading-relaxed">
											{faq.answer}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<div className="w-full flex flex-col items-center mt-12 md:mt-16">
					<p className="font-sans text-[#0D4D55] text-[16px] md:text-[18px] font-medium mb-1 md:mb-2">
						Still have questions?
					</p>

					<button
						type="button"
						onClick={() => setIsContactOpen(true)}
						className="flex items-center gap-1.5 text-[#E0672A] font-sans text-[15px] md:text-[16px] font-semibold hover:underline"
					>
						Contact our team <ArrowRight size={16} strokeWidth={2} />
					</button>
				</div>
			</div>

			<ContactModal
				isOpen={isContactOpen}
				onClose={() => setIsContactOpen(false)}
			/>
		</section>
	);
}
