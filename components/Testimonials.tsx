"use client";

import { Star } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const testimonials = [
	{
		quote:
			"This wasn't just a retreat; it was a profound strategic pivot. I returned to my company with absolute clarity and renewed energy.",
		author: "Sarah Jenkins",
		title: "CEO, TechInnovate",
	},
	{
		quote:
			"The caliber of people in the room was unmatched. The peer-to-peer conversations alone were worth ten times the investment.",
		author: "Michael Obinna",
		title: "Managing Partner, Zenith Capital",
	},
	{
		quote:
			"A rare sanctuary where leaders can truly take off their armor. The facilitators guided us through deep, transformative work.",
		author: "David Rosenberg",
		title: "Founder, Apex Health",
	},
];

const STARS = Array.from({ length: 5 }, (_, i) => `star-${i}`);

export default function Testimonials() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);

	return (
		<section className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#F7F4EE] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625210/ChatGPT_Image_Jul_9_2026_08_26_40_PM_cbvu9q.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625083/ChatGPT_Image_Jul_9_2026_08_24_16_PM_spo5iy.png')] overflow-hidden px-4 md:px-6">
			<div
				ref={ref}
				className={`relative z-10 w-full max-w-[1400px] mx-auto flex flex-col transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
			>
				{/* Header */}
				<div className="flex flex-col items-center text-center mb-12 md:mb-20">
					<span className="font-sans font-bold uppercase tracking-widest text-[#E0672A] text-[11px] md:text-sm mb-3 md:mb-4">
						Past Experiences
					</span>
					<h2 className="font-serif text-[32px] md:text-5xl lg:text-6xl text-[#0D4D55] leading-[1.1] md:leading-[1.05] max-w-3xl">
						Words from Previous Attendees
					</h2>
				</div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={testimonial.author}
							className="bg-[#FAF8F3] p-8 md:p-12 rounded-[24px] md:rounded-[32px] flex flex-col border border-[rgba(13,77,85,0.08)] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
							style={{
								transitionDelay: `${index * 150}ms`,
								opacity: isVisible ? 1 : 0,
								transform: isVisible ? "translateY(0)" : "translateY(24px)",
							}}
						>
							<div className="flex gap-1 mb-6">
								{STARS.map((starKey) => (
									<Star
										key={starKey}
										size={16}
										className="text-[#E0672A] fill-[#E0672A]"
									/>
								))}
							</div>

							<p className="font-serif text-[22px] md:text-[26px] text-[#0D4D55] leading-snug mb-8 md:mb-10 flex-1">
								&quot;{testimonial.quote}&quot;
							</p>

							<div className="flex flex-col border-t border-[rgba(13,77,85,0.08)] pt-6 md:pt-6 mt-auto">
								<span className="font-sans font-bold text-[#0D4D55] text-[15px] md:text-base">
									{testimonial.author}
								</span>
								<span className="font-sans text-[rgba(13,77,85,0.6)] text-[13px] md:text-sm mt-1">
									{testimonial.title}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
