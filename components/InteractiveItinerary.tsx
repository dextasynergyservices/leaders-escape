"use client";

import {
	Activity,
	ArrowUpRight,
	CheckCircle,
	ChevronDown,
	ConciergeBell,
	Flame,
	Leaf,
	MessageSquare,
	Plane,
	Presentation,
	Sprout,
	Sunrise,
	TrendingUp,
	Users,
} from "lucide-react";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const itinerary = [
	{
		day: "Day 1",
		title: "Arrival & Deep Reset",
		schedule: [
			{
				time: "14:00",
				event: "Private VIP Check-In & Welcome Reception",
				description:
					"Personalized arrival, concierge welcome, and exclusive networking.",
				Icon: Plane,
			},
			{
				time: "16:00",
				event: "Orientation & Intention Setting Session",
				description: "Aligning purpose, expectations, and outcomes.",
				Icon: Presentation,
			},
			{
				time: "18:30",
				event: "Curated Executive Dinner",
				description: "Fine dining experience with curated conversations.",
				Icon: ConciergeBell,
			},
			{
				time: "20:30",
				event: "Fireside Chat: The Burden of Leadership",
				description: "Honest dialogue on leadership challenges and resilience.",
				Icon: Flame,
			},
		],
	},
	{
		day: "Day 2",
		title: "Clarity & Strategy",
		schedule: [
			{
				time: "07:30",
				event: "Guided Mindfulness & Movement",
				description: "Start your day with intention and clarity.",
				Icon: Activity,
			},
			{
				time: "09:00",
				event: "Masterclass: Future-Proofing Your Vision",
				description: "Deep dive into strategic foresight.",
				Icon: TrendingUp,
			},
			{
				time: "12:30",
				event: "Networking Luncheon",
				description: "Connect with peers over a curated meal.",
				Icon: Users,
			},
			{
				time: "14:00",
				event: "Peer-to-Peer Strategy Roundtables",
				description: "Collaborative problem solving sessions.",
				Icon: MessageSquare,
			},
			{
				time: "16:30",
				event: "Rest & Wellness Integration",
				description: "Time for personal reflection and spa services.",
				Icon: Sprout,
			},
			{
				time: "19:00",
				event: "Gala Dinner & Keynote Address",
				description: "An evening of celebration and insights.",
				Icon: ConciergeBell,
			},
		],
	},
	{
		day: "Day 3",
		title: "Action & Integration",
		schedule: [
			{
				time: "08:00",
				event: "Reflection & Nature Walk",
				description: "Morning integration in nature.",
				Icon: Sunrise,
			},
			{
				time: "10:00",
				event: "Workshop: Building Your Execution Framework",
				description: "Translating strategy into actionable steps.",
				Icon: ArrowUpRight,
			},
			{
				time: "12:00",
				event: "Closing Ceremony & Commitments",
				description: "Final reflections and accountability.",
				Icon: CheckCircle,
			},
			{
				time: "13:30",
				event: "Farewell Brunch & Departures",
				description: "Final goodbyes until next time.",
				Icon: Plane,
			},
		],
	},
];

export default function InteractiveItinerary() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);
	const [openDay, setOpenDay] = useState<number | null>(null);

	const toggleDay = (index: number) => {
		setOpenDay(openDay === index ? null : index);
	};

	return (
		<section className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#F7F4EE] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625210/ChatGPT_Image_Jul_9_2026_08_26_40_PM_cbvu9q.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625083/ChatGPT_Image_Jul_9_2026_08_24_16_PM_spo5iy.png')] overflow-hidden">
			<div
				ref={ref}
				className={`relative z-10 w-full max-w-4xl px-4 md:px-6 mx-auto flex flex-col items-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
			>
				<div className="flex flex-col items-center text-center mb-8 md:mb-16">
					<p className="text-[#E0672A] uppercase tracking-[0.2em] text-[11px] md:text-[13px] font-bold mb-3 md:mb-4">
						The Schedule
					</p>
					<h2 className="font-serif text-[28px] md:text-[4rem] lg:text-[4.5rem] leading-[1.2] md:leading-[1.1] text-[#0D4D55] mb-2 px-2 md:px-0">
						Your Interactive Itinerary.
					</h2>
					<div className="mb-3 md:mb-4 flex justify-center">
						<Leaf
							className="w-4 h-4 md:w-6 md:h-6 text-[#0D4D55] opacity-60"
							strokeWidth={1}
						/>
					</div>
					<p className="font-sans text-[#5A6A6F] text-[13px] md:text-[16px] max-w-xl leading-[1.6]">
						Three days meticulously designed to balance deep strategic work,
						transformative wellness, and unstructured networking.
					</p>
				</div>

				<div className="w-full flex flex-col gap-3 md:gap-4">
					{itinerary.map((dayData, index) => {
						const isOpen = openDay === index;

						return (
							<div
								key={dayData.day}
								className={`w-full bg-[#FCFBF8]/95 backdrop-blur-sm rounded-[24px] md:rounded-[32px] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 overflow-hidden transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
								style={{
									transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
								}}
							>
								<button
									type="button"
									onClick={() => toggleDay(index)}
									className="w-full flex items-center justify-between p-3.5 md:p-6 text-left hover:bg-black/5 transition-colors focus:outline-none"
								>
									<div className="flex items-center gap-3 md:gap-6">
										<span className="bg-[#0D4D55] text-white px-3 md:px-5 py-1 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-widest uppercase whitespace-nowrap shrink-0">
											{dayData.day}
										</span>
										<span className="font-serif text-[18px] md:text-[28px] text-[#0D4D55] leading-tight">
											{dayData.title}
										</span>
									</div>
									<div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#0D4D55]/20 flex items-center justify-center shrink-0 bg-white ml-2">
										<ChevronDown
											className={`text-[#0D4D55] transition-transform duration-300 w-4 h-4 md:w-5 md:h-5 ${isOpen ? "rotate-180" : "rotate-0"}`}
											strokeWidth={2}
										/>
									</div>
								</button>

								<div
									className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}
								>
									<div className="px-2 md:px-8 pb-4 md:pb-8">
										<div className="pt-1 md:pt-4 ml-0 md:ml-8">
											{dayData.schedule.map((slot, i) => (
												<div
													key={slot.event}
													className="flex gap-3 md:gap-6 relative pb-6 md:pb-8 last:pb-0"
												>
													{/* Time Column */}
													<div className="w-12 md:w-16 text-right pt-[10px] md:pt-[12px] shrink-0">
														<span className="font-bold text-[#E0672A] text-[12px] md:text-[14px]">
															{slot.time}
														</span>
													</div>

													{/* Line and Dot Column */}
													<div className="relative flex flex-col items-center shrink-0 w-3 md:w-4">
														<div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#E0672A] mt-[14px] md:mt-[17px] z-10" />
														{i !== dayData.schedule.length - 1 && (
															<div className="w-px bg-[#E0672A]/30 absolute top-[21px] md:top-[25px] bottom-0 left-1/2 -translate-x-1/2" />
														)}
													</div>

													{/* Content Column */}
													<div className="flex-1 flex items-start gap-3 md:gap-5">
														<div className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] md:rounded-[14px] bg-[#F4EFE6] flex items-center justify-center text-[#0D4D55] shrink-0 mt-1 md:mt-0.5">
															<slot.Icon
																className="w-4 h-4 md:w-5 md:h-5"
																strokeWidth={1.5}
															/>
														</div>

														<div className="pt-[4px] md:pt-[8px]">
															<h4 className="text-[#0D4D55] font-bold text-[13px] md:text-[15px] leading-tight mb-1 pr-2">
																{slot.event}
															</h4>
															<p className="text-[#5A6A6F] text-[11px] md:text-[13px] leading-relaxed max-w-md pr-1">
																{slot.description}
															</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
