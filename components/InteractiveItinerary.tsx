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
	// Day Zero
	{
		day: "DAY ZERO – 27th",
		title: "Arrival and Deep Reset",
		schedule: [
			{
				time: "12:00 – 2:00 PM",
				event: "Guest Arrival, Concierge Check-in & Welcome Refreshments",
				description: "",
				Icon: ConciergeBell,
			},
			{
				time: "12:30 – 2:30 PM",
				event: "Executive Welcome Lunch",
				description: "",
				Icon: ConciergeBell,
			},
			{
				time: "2:30 – 4:00 PM",
				event: "Check-in, Settle into Rooms & Leisure Time",
				description: "",
				Icon: Plane,
			},
			{
				time: "4:00 – 5:00 PM",
				event:
					"Welcome Circle: The Beginning of the Escape (Introductions, Retreat Intentions & Community Agreements)",
				description: "",
				Icon: Users,
			},
			{
				time: "5:00 – 5:30 PM",
				event: "Sunset Tea & Quiet Reflection",
				description: "",
				Icon: Sunrise,
			},
			{
				time: "5:30 – 6:30 PM",
				event: "Gentle Stretching, Breathwork & Guided Mindfulness",
				description: "",
				Icon: Activity,
			},
			{
				time: "7:00 – 9:00 PM",
				event: "Executive Welcome Dinner",
				description: "",
				Icon: ConciergeBell,
			},
			{
				time: "9:00 – 9:45 PM",
				event:
					"Fireside Welcome Conversation: Why Great Leaders Must Learn to Pause",
				description: "",
				Icon: Flame,
			},
		],
	},

	// Day One
	{
		day: "DAY ONE – 28th",
		title: "Leading Yourself",
		schedule: [
			{
				time: "6:30 – 7:45 AM",
				event:
					"Sunrise Wellness Session ( Mobility, Stretching and Breathwork)",
				description: "",
				Icon: Activity,
			},
			{
				time: "8:00 – 9:00 AM",
				event: "Executive Breakfast",
				description: "",
				Icon: ConciergeBell,
			},
			{
				time: "9:15 – 10:45 AM",
				event: "Leadership Masterclass 1: Future-Proofing Your Vision",
				description: "",
				Icon: Presentation,
			},
			{
				time: "10:45 – 11:15 AM",
				event: "Coffee Break & Networking",
				description: "",
				Icon: Users,
			},
			{
				time: "11:15 AM – 12:30 PM",
				event: "Leadership Masterclass 2: Leading Without Burning Out",
				description: "",
				Icon: Presentation,
			},
			{
				time: "12:30 – 2:00 PM",
				event: "Executive Networking Luncheon – Conversations That Matter",
				description: "",
				Icon: MessageSquare,
			},
			{
				time: "2:00 – 3:30 PM",
				event: "The Clarity Walk & Guided Reflection Journaling",
				description: "",
				Icon: Sprout,
			},
			{
				time: "3:30 – 4:00 PM",
				event: "Tea Break",
				description: "",
				Icon: ConciergeBell,
			},
			{
				time: "4:00 – 5:30 PM",
				event:
					"Fireside Conversation: What Leadership Has Cost Me—and What It Has Given Me",
				description: "",
				Icon: Flame,
			},
			{
				time: "5:30 – 7:00 PM",
				event: "Curated Dinner",
				description: "",
				Icon: ConciergeBell,
			},
			{
				time: "7:00 – 9:00 PM",
				event: "Free time( Spa, swimming, reading, quiet reflection and rest)",
				description: "",
				Icon: Activity,
			},
			{
				time: "9:00 PM",
				event: "Quiet Reflection & Rest",
				description: "",
				Icon: Leaf,
			},
		],
	},

	// Day Two
	{
		day: "DAY TWO – 29th",
		title: "Discover. Connect. Celebrate.",
		schedule: [
			{
				time: "6:30 – 7:30 AM",
				event: "Morning Nature Walk, Body Movement & Stretching",
				description: "",
				Icon: Leaf,
			},
			{
				time: "7:30 – 8:00 AM",
				event: "Mindfulness & Gratitude Session",
				description: "",
				Icon: Sprout,
			},
			{
				time: "8:00 – 9:00 AM",
				event: "Executive Breakfast",
				description: "",
				Icon: ConciergeBell,
			},
			{
				time: "9:00 AM – 3:00 PM",
				event: "Curated Tour & Cultural Experience (Including Lunch)",
				description: "",
				Icon: Plane,
			},
			{
				time: "3:00 – 4:00 PM",
				event: "Return to Resort & Leisure Time",
				description: "",
				Icon: Activity,
			},
			{
				time: "4:00 – 5:00 PM",
				event: "Wellness Lounge (Massage, Tea Bar)",
				description: "",
				Icon: Leaf,
			},
			{
				time: "5:30 – 6:45 PM",
				event:
					"Leadership Masterclass 3: Building Organizations That Outlive You",
				description: "",
				Icon: Flame,
			},
			{
				time: "7:45 – 10 PM",
				event:
					"The Legacy Gala – Red Carpet Reception, Fine Dining, Live Entertainment, Leadership Recognition & Celebration",
				description: "",
				Icon: TrendingUp,
			},
		],
	},

	// Day Three
	{
		day: "DAY THREE – 30th",
		title: "Return with Purpose",
		schedule: [
			{
				time: "6:30 – 7:15 AM",
				event: "Dance Aerobics",
				description: "",
				Icon: Activity,
			},
			{
				time: "7:15 – 7:45 AM",
				event: "Reflection Walk",
				description: "",
				Icon: Leaf,
			},
			{
				time: "8:00 – 9:00 AM",
				event: "Executive Breakfast",
				description: "",
				Icon: ConciergeBell,
			},
			{
				time: "9:15 – 10:45 AM",
				event:
					"Fireside Conversation: Building a Leadership Legacy Beyond Success",
				description: "",
				Icon: Presentation,
			},
			{
				time: "10:45 – 11:15 AM",
				event: "Coffee Break",
				description: "",
				Icon: Users,
			},
			{
				time: "11:15 AM – 12:30 PM",
				event:
					"Executive Action Planning Workshop: My 90-Day Leadership Blueprint",
				description: "",
				Icon: ArrowUpRight,
			},
			{
				time: "12:30 – 1:30 PM",
				event: "Farewell Lunch",
				description: "",
				Icon: ConciergeBell,
			},
			{
				time: "1:30 – 2:30 PM",
				event: "Leadership Commitment Ceremony & Letters to My Future Self",
				description: "",
				Icon: CheckCircle,
			},
			{
				time: "2:30 – 3:00 PM",
				event:
					"Closing Reflections, Appreciation, Presentation of Retreat Souvenirs & Official Group Photograph",
				description: "",
				Icon: Presentation,
			},
			{
				time: "3:00 PM",
				event: "Check-out & Departure",
				description: "",
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
									<div className="flex flex-col md:flex-row items-start md:items-center gap-1.5 md:gap-6">
										<span className="bg-[#0D4D55] text-white px-3 md:px-5 py-1 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-widest uppercase whitespace-nowrap shrink-0">
											{dayData.day}
										</span>
										<span className="font-serif text-[17px] md:text-[28px] text-[#0D4D55] leading-tight">
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
													className="flex gap-2.5 md:gap-6 relative pb-6 md:pb-8 last:pb-0"
												>
													{/* Time Column */}
													<div className="w-[70px] md:w-[96px] text-right pt-[10px] md:pt-[12px] shrink-0">
														<span className="font-bold text-[#E0672A] text-[11px] md:text-[13px] leading-tight block">
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
													<div className="flex-1 flex items-start gap-2.5 md:gap-5">
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
															{slot.description && (
																<p className="text-[#5A6A6F] text-[11px] md:text-[13px] leading-relaxed max-w-md pr-1">
																	{slot.description}
																</p>
															)}
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
