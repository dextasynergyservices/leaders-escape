"use client";

import { Footprints, Shirt, Sunset } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const dressCodes = [
	{
		icon: Shirt,
		title: "Executive Casual",
		description:
			"For workshops, roundtables, and masterclasses. Think comfortable sophistication—blazers over t-shirts, tailored linens, and elegant daywear.",
	},
	{
		icon: Footprints,
		title: "Wellness Activities",
		description:
			"Breathable athletic wear for morning mindfulness, yoga, and guided nature walks. Comfort and mobility are key.",
	},
	{
		icon: Sunset,
		title: "Resort Wear",
		description:
			"For curated evening dinners and the gala. Elegant, relaxed resort attire that reflects the luxurious tropical setting.",
	},
];

export default function DressCode() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);

	return (
		<section className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#F7F4EE] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625210/ChatGPT_Image_Jul_9_2026_08_26_40_PM_cbvu9q.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625083/ChatGPT_Image_Jul_9_2026_08_24_16_PM_spo5iy.png')] overflow-hidden">
			<div
				ref={ref}
				className={`relative z-10 w-full max-w-7xl px-4 md:px-6 mx-auto flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
			>
				<div className="flex flex-col items-center text-center mb-12 md:mb-24">
					<p className="text-[#E0672A] uppercase tracking-[0.15em] text-[13px] md:text-sm font-semibold mb-4 md:mb-5">
						Wardrobe & Style
					</p>

					<h2 className="font-serif text-[32px] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] md:leading-[1.05] text-[#0D4D55] mb-6 md:mb-8 max-w-4xl">
						Dress Code.
					</h2>

					<p className="font-sans text-[rgba(13,77,85,0.85)] text-base md:text-xl max-w-2xl leading-[1.6]">
						The atmosphere is deliberately relaxed yet refined. Leave the formal
						business attire behind and embrace comfortable elegance.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
					{dressCodes.map((code, index) => {
						const Icon = code.icon;
						return (
							<div
								key={code.title}
								className={`flex flex-col items-center text-center bg-white p-8 md:p-10 rounded-2xl border border-[rgba(13,77,85,0.08)] shadow-[0_4px_24px_rgba(13,77,85,0.02)] hover:-translate-y-1.5 hover:border-[rgba(13,77,85,0.2)] hover:shadow-[0_8px_32px_rgba(13,77,85,0.06)] transition-all duration-500 group transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
								style={{
									transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
								}}
							>
								<div className="mb-6 md:mb-8 transition-transform duration-500 group-hover:scale-110">
									<Icon
										size={40}
										strokeWidth={1.2}
										className="text-[#E0672A]"
									/>
								</div>

								<h3 className="font-sans font-bold text-[#0D4D55] uppercase tracking-wider text-xs md:text-sm mb-4">
									{code.title}
								</h3>

								<p className="font-sans text-[rgba(13,77,85,0.85)] text-[15px] md:text-base leading-relaxed">
									{code.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
