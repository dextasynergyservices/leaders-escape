"use client";

import {
	ChevronDown,
	ConciergeBell,
	Map as MapIcon,
	MapPin,
	Plane,
	ShieldCheck,
} from "lucide-react";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const logisticsSections = [
	{
		tag: "PHASE 1",
		title: "Your Journey to Leaders Escape",
		details: [
			{
				time: "Step 1",
				event: "Arrive in Port Harcourt",
				description:
					"Participants are responsible for making their way to Port Harcourt. We recommend arriving before 9:00 a.m. on 27th. Guests travelling from outside Rivers State may choose to arrive the evening before.",
				Icon: Plane,
			},
			{
				time: "Step 2",
				event: "Executive Assembly & Registration",
				description:
					"Date: 27th\n\nTime: 10:00 a.m.\n\nLocation: Designated Port Harcourt Assembly Point (to be communicated)\n\nUpon arrival, participants will enjoy:",
				bullets: [
					"Welcome refreshments",
					"Concierge-style registration",
					"Luggage handling and tagging",
					"Meet-and-greet with the Leaders Escape team",
					"Networking with fellow participants",
				],
				Icon: MapPin,
			},
			{
				time: "Step 3",
				event: "Coordinated Transfer to Bonny/Finima",
				description: "Our logistics team will escort participants through:",
				bullets: [
					"Ground transportation to the jetty",
					"Secure boat transfer to Bonny/Finima",
					"Ground transportation to the retreat venue",
				],
				postDescription:
					"All movements are professionally coordinated to ensure safety, comfort, and convenience.",
				Icon: MapIcon,
			},
			{
				time: "Step 4",
				event: "Arrival at the Retreat Venue",
				description:
					"Expected Arrival: 12:00 noon\n\nUpon arrival, participants will receive:",
				bullets: [
					"Welcome reception",
					"Check-in assistance",
					"Retreat welcome package",
					"Accommodation allocation",
					"Access to lunch and leisure activities before the official opening session",
				],
				Icon: ConciergeBell,
			},
		],
	},
	{
		tag: "PHASE 2",
		title: "Return Journey",
		details: [
			{
				time: "Aug 30th",
				event: "Departure from Resort",
				description:
					"On 30th, following the closing ceremony and farewell activities, participants will be transported back to Port Harcourt using the same coordinated transfer process.\n\nExpected Arrival in Port Harcourt: Late afternoon.",
				Icon: MapPin,
			},
		],
	},
	{
		tag: "SUPPORT",
		title: "Safety & Security",
		details: [
			{
				time: "Priority",
				event: "Comprehensive Security",
				description: "Your safety is our priority.\n\nLeaders Escape provides:",
				bullets: [
					"Coordinated group transportation",
					"Vetted transportation partners",
					"Dedicated logistics support",
					"On-site event coordination",
					"Emergency contact support",
					"Professionally managed guest movement throughout the retreat",
				],
				postDescription:
					"Our collettive management of transportation eliminates uncertainty, reduces travel-related stress, and creates a premium retreat experience from the moment participants join us.",
				Icon: ShieldCheck,
			},
		],
	},
	{
		tag: "EXPERIENCE",
		title: "A Concierge Experience",
		details: [
			{
				time: "Service",
				event: "Thoughtfully Managed",
				description:
					"From the time you arrive at our assembly point until your return to Port Harcourt, every aspect of your journey is thoughtfully managed so you can focus on what matters most:\n\nPausing. Reflecting. Renewing. Leading.",
				Icon: ConciergeBell,
			},
		],
	},
];

export default function TravelAndLogistics() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);
	const [openSection, setOpenSection] = useState<number | null>(null);

	const toggleSection = (index: number) => {
		setOpenSection(openSection === index ? null : index);
	};

	return (
		<section className="relative w-full py-12 md:py-20 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#F9F7F3] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783672116/ChatGPT_Image_Jul_10_2026_09_28_07_AM_imyih7.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783672071/ChatGPT_Image_Jul_10_2026_09_25_50_AM_dnw5sy.png')] overflow-hidden">
			<div
				ref={ref}
				className={`relative z-10 w-full max-w-4xl px-4 md:px-6 mx-auto flex flex-col items-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
			>
				<div className="flex flex-col items-center text-center mb-8 md:mb-16">
					<p className="text-[#E0672A] uppercase tracking-[0.2em] text-[11px] md:text-[13px] font-bold mb-3 md:mb-4">
						Travel & Logistics
					</p>
					<h2 className="font-serif text-[28px] md:text-[4rem] lg:text-[4.5rem] leading-[1.2] md:leading-[1.1] text-[#0D4D55] mb-4 px-2 md:px-0">
						Your Journey Begins Here.
					</h2>
					<p className="font-sans text-[#5A6A6F] text-[13px] md:text-[16px] max-w-xl leading-[1.6]">
						To ensure a seamless, secure, and stress-free journey, all
						transportation from our designated assembly point in Port Harcourt
						to the retreat venue is professionally coordinated by our team.
					</p>
				</div>

				<div className="w-full flex flex-col gap-3 md:gap-4">
					{logisticsSections.map((sectionData, index) => {
						const isOpen = openSection === index;

						return (
							<div
								key={sectionData.tag}
								className={`w-full bg-[#FCFBF8]/95 backdrop-blur-sm rounded-[24px] md:rounded-[32px] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 overflow-hidden transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
								style={{
									transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
								}}
							>
								<button
									type="button"
									onClick={() => toggleSection(index)}
									className="w-full flex items-center justify-between p-3.5 md:p-6 text-left hover:bg-black/5 transition-colors focus:outline-none"
								>
									<div className="flex flex-col md:flex-row items-start md:items-center gap-1.5 md:gap-6">
										<span className="bg-[#0D4D55] text-white px-3 md:px-5 py-1 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-widest uppercase whitespace-nowrap shrink-0">
											{sectionData.tag}
										</span>
										<span className="font-serif text-[17px] md:text-[28px] text-[#0D4D55] leading-tight">
											{sectionData.title}
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
											{sectionData.details.map((slot, i) => (
												<div
													key={slot.event}
													className="flex gap-2.5 md:gap-6 relative pb-6 md:pb-8 last:pb-0"
												>
													{/* Time Column (Reused as Step/Tag column here) */}
													<div className="w-[70px] md:w-[96px] text-right pt-[10px] md:pt-[12px] shrink-0">
														<span className="font-bold text-[#E0672A] text-[11px] md:text-[13px] leading-tight block">
															{slot.time}
														</span>
													</div>

													{/* Line and Dot Column */}
													<div className="relative flex flex-col items-center shrink-0 w-3 md:w-4">
														<div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#E0672A] mt-[14px] md:mt-[17px] z-10" />
														{i !== sectionData.details.length - 1 && (
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
																<p className="text-[#5A6A6F] text-[11px] md:text-[13px] leading-relaxed max-w-md pr-1 whitespace-pre-line">
																	{slot.description}
																</p>
															)}
															{slot.bullets && (
																<ul className="mt-2 flex flex-col gap-1.5">
																	{slot.bullets.map((bullet, bi) => (
																		<li
																			// biome-ignore lint/suspicious/noArrayIndexKey: Static content
																			key={bi}
																			className="flex items-start gap-2 text-[#5A6A6F] text-[11px] md:text-[13px] leading-relaxed max-w-md"
																		>
																			<span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#E0672A] shrink-0 mt-1.5" />
																			<span>{bullet}</span>
																		</li>
																	))}
																</ul>
															)}
															{slot.postDescription && (
																<p className="text-[#5A6A6F] text-[11px] md:text-[13px] leading-relaxed max-w-md pr-1 whitespace-pre-line mt-2">
																	{slot.postDescription}
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
