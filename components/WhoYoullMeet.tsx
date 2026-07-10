"use client";

import {
	Briefcase,
	Globe,
	Handshake,
	Lightbulb,
	Star,
	TrendingUp,
	User,
	Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const participants = [
	{
		icon: User,
		title: "Entrepreneurs",
	},
	{
		icon: Briefcase,
		title: "Executives",
	},
	{
		icon: TrendingUp,
		title: "Investors",
	},
	{
		icon: Globe,
		title: "Industry Leaders",
	},
	{
		icon: Lightbulb,
		title: "Innovators",
	},
	{
		icon: Users,
		title: "Change Makers",
	},
	{
		icon: Handshake,
		title: "Partners",
	},
	{
		icon: Star,
		title: "Rising Talent",
	},
];

export default function WhoYoullMeet() {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 },
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section className="relative w-full py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#F9F6F0] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625210/ChatGPT_Image_Jul_9_2026_08_26_40_PM_cbvu9q.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625083/ChatGPT_Image_Jul_9_2026_08_24_16_PM_spo5iy.png')]">
			<div
				ref={ref}
				className={`relative z-10 w-full max-w-6xl px-4 md:px-8 mx-auto flex flex-col items-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
			>
				{/* Section Header */}
				<div className="flex flex-col items-center text-center mb-12 md:mb-16">
					<p className="text-[#E0672A] uppercase tracking-[0.1em] text-[12px] md:text-[14px] font-semibold mb-4">
						WHO YOU&apos;LL MEET
					</p>
					<h2 className="font-serif text-[26px] md:text-[48px] lg:text-[56px] leading-[1.1] text-[#0D4D55] mb-5">
						Extraordinary People.
						<br />
						Meaningful Connections.
					</h2>
					<p className="font-sans text-[rgba(13,77,85,0.85)] text-[15px] md:text-[18px] max-w-[600px] leading-[1.6]">
						Join a curated group of high-achieving individuals from diverse
						industries and backgrounds.
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full">
					{participants.map((item, index) => {
						const Icon = item.icon;
						return (
							<div
								key={item.title}
								className={`flex flex-col items-center text-center bg-white p-5 md:p-8 rounded-[20px] border border-[rgba(13,77,85,0.08)] shadow-[0_4px_24px_rgba(13,77,85,0.02)] hover:-translate-y-1 hover:border-[rgba(13,77,85,0.15)] hover:shadow-[0_8px_32px_rgba(13,77,85,0.06)] transition-all duration-500 group transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
								style={{
									transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
								}}
							>
								<div className="mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
									<Icon
										size={40}
										strokeWidth={1}
										className="text-[#E0672A] transition-colors duration-500 group-hover:text-[#c25522]"
									/>
								</div>

								<h3 className="font-sans uppercase tracking-[0.15em] text-[11px] md:text-[13px] font-bold text-[#0D4D55] mb-2 md:mb-3">
									{item.title}
								</h3>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
