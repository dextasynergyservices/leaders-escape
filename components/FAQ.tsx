"use client";

import {
	ArrowRight,
	Briefcase,
	ChevronLeft,
	ChevronRight,
	Clock,
	Coffee,
	Gift,
	MapPin,
	Minus,
	Plane,
	Plus,
	ShieldCheck,
	Users,
	XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ContactModal from "./ContactModal";

const Bullet = ({ children }: { children: React.ReactNode }) => (
	<li className="flex items-start gap-2 mb-1.5 last:mb-0">
		<span className="w-1.5 h-1.5 rounded-full bg-[#E0672A] shrink-0 mt-1.5" />
		<span>{children}</span>
	</li>
);

const faqs = [
	{
		question: "1. What is included in my retreat investment?",
		answer: (
			<>
				Your investment covers:
				<ul className="mt-2 flex flex-col pl-2">
					<Bullet>Luxury accommodation throughout the retreat</Bullet>
					<Bullet>All meals and refreshments</Bullet>
					<Bullet>Leadership masterclasses and facilitated sessions</Bullet>
					<Bullet>Daily wellness and body movement activities</Bullet>
					<Bullet>Fireside conversations</Bullet>
					<Bullet>Guided reflection experiences</Bullet>
					<Bullet>The curated cultural tour</Bullet>
					<Bullet>The Legacy Gala Night</Bullet>
					<Bullet>Retreat materials and welcome package</Bullet>
					<Bullet>Group photographs</Bullet>
					<Bullet>
						Round-trip group transportation from our designated assembly point
						in Port Harcourt to the retreat venue in Bonny/Finima and back.
					</Bullet>
				</ul>
			</>
		),
		icon: <Gift className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "2. What is not included in my investment?",
		answer: (
			<>
				Your investment does not include:
				<ul className="mt-2 flex flex-col pl-2">
					<Bullet>Travel to and from Port Harcourt</Bullet>
					<Bullet>Personal shopping and incidental expenses</Bullet>
					<Bullet>Optional spa treatments not included in the programme</Bullet>
					<Bullet>Travel insurance (recommended)</Bullet>
					<Bullet>Tour expenses</Bullet>
				</ul>
			</>
		),
		icon: <XCircle className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "3. Is transportation to the retreat included?",
		answer: (
			<>
				Yes. To ensure a seamless, secure, and stress-free experience,{" "}
				<strong>
					all participants will travel together from our designated assembly
					point in Port Harcourt.
				</strong>
				<br />
				<br />
				Your retreat investment includes:
				<ul className="mt-2 flex flex-col pl-2">
					<Bullet>Ground transfer to the jetty</Bullet>
					<Bullet>Boat transfer to Bonny/Finima</Bullet>
					<Bullet>Ground transfer from the jetty to the retreat venue</Bullet>
					<Bullet>
						Return transfers to Port Harcourt at the end of the retreat
					</Bullet>
				</ul>
				<div className="mt-2">
					Complete travel instructions, departure times, and the assembly
					location will be shared before the retreat.
				</div>
			</>
		),
		icon: <Plane className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "4. Why do all participants travel together?",
		answer: (
			<>
				As part of our commitment to safety and excellence, Leaders Escape uses
				coordinated group transportation. This approach:
				<ul className="mt-2 flex flex-col pl-2">
					<Bullet>Enhances participant security</Bullet>
					<Bullet>Eliminates travel-related confusion</Bullet>
					<Bullet>Ensures timely arrival</Bullet>
					<Bullet>
						Allows our team to provide concierge-level support throughout the
						journey
					</Bullet>
				</ul>
			</>
		),
		icon: <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "5. Where do I meet the group?",
		answer: (
			<>
				Participants will meet at a designated location in Port Harcourt on{" "}
				<strong>27th at 10:00 a.m.</strong> Registration, refreshments, luggage
				handling, and guest assistance will be available before departure.
			</>
		),
		icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "6. Is Bonny/Finima a safe destination?",
		answer: (
			<>
				Participant safety is our highest priority. Leaders Escape partners with
				reputable transportation providers and carefully selected venues with
				established security measures. All movements during the retreat are
				coordinated by our logistics team to ensure a safe and comfortable
				experience.
			</>
		),
		icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "7. What time should I arrive in Port Harcourt?",
		answer: (
			<>
				We recommend arriving in Port Harcourt{" "}
				<strong>before 9:00 a.m. on 27th</strong> to allow sufficient time to
				reach the assembly point before departure. Participants travelling from
				outside Rivers State may wish to arrive the evening before for added
				convenience.
			</>
		),
		icon: <Clock className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "8. What should I pack?",
		answer: (
			<>
				We recommend bringing:
				<ul className="mt-2 flex flex-col pl-2">
					<Bullet>Comfortable casual wear</Bullet>
					<Bullet>Activewear for morning wellness sessions</Bullet>
					<Bullet>Walking shoes</Bullet>
					<Bullet>Resort wear for leisure periods</Bullet>
					<Bullet>
						Formal attire for <strong>The Legacy Gala</strong>
					</Bullet>
					<Bullet>Personal medications and toiletries</Bullet>
					<Bullet>A light sweater or jacket for evenings</Bullet>
				</ul>
				<div className="mt-2">
					A detailed packing guide will be included in your Welcome & Travel
					Pack.
				</div>
			</>
		),
		icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "9. Will there be free time?",
		answer: (
			<>
				Yes. Leaders Escape is intentionally designed to balance leadership
				development with rest and renewal. Each day includes dedicated time for
				relaxation, networking, personal reflection, or enjoying the
				resort&apos;s amenities.
			</>
		),
		icon: <Coffee className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
	{
		question: "10. Who is Leaders Escape designed for?",
		answer: (
			<>
				Leaders Escape is curated for founders, CEOs, executives, school
				leaders, ministry leaders, entrepreneurs, and senior professionals
				seeking rest, strategic clarity, personal renewal, meaningful
				connections, and sustainable leadership.
			</>
		),
		icon: <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
	},
];

export default function FAQ() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		// Set initial value
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const itemsPerPage = isMobile ? 3 : 4;
	const totalPages = Math.ceil(faqs.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedFaqs = faqs.slice(startIndex, startIndex + itemsPerPage);

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
					{paginatedFaqs.map((faq, idx) => {
						const index = startIndex + idx;
						const isOpen = openIndex === index;

						return (
							<div
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
										<div className="font-sans text-[rgba(13,77,85,0.75)] text-[14px] md:text-[16px] leading-relaxed">
											{faq.answer}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Pagination Controls */}
				{totalPages > 1 && (
					<div className="flex items-center justify-center gap-6 mt-8 md:mt-12 w-full">
						<button
							type="button"
							onClick={() => {
								setCurrentPage((prev) => Math.max(prev - 1, 1));
								setOpenIndex(null);
							}}
							disabled={currentPage === 1}
							className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-[rgba(13,77,85,0.1)] text-[#0D4D55] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[rgba(13,77,85,0.05)] transition-colors bg-white shadow-sm"
						>
							<ChevronLeft
								className="w-5 h-5 md:w-6 md:h-6"
								strokeWidth={1.5}
							/>
						</button>
						<span className="font-sans text-[#0D4D55] text-[14px] md:text-[16px] font-medium tracking-wide">
							Page {currentPage} of {totalPages}
						</span>
						<button
							type="button"
							onClick={() => {
								setCurrentPage((prev) => Math.min(prev + 1, totalPages));
								setOpenIndex(null);
							}}
							disabled={currentPage === totalPages}
							className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-[rgba(13,77,85,0.1)] text-[#0D4D55] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[rgba(13,77,85,0.05)] transition-colors bg-white shadow-sm"
						>
							<ChevronRight
								className="w-5 h-5 md:w-6 md:h-6"
								strokeWidth={1.5}
							/>
						</button>
					</div>
				)}

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
