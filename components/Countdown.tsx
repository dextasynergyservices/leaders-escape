"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface CountdownProps {
	onRegister?: () => void;
}

export default function Countdown({ onRegister }: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	const [isMounted, setIsMounted] = useState(false);

	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);

	useEffect(() => {
		const timeoutId = setTimeout(() => setIsMounted(true), 0);
		const targetTime = new Date("2026-08-28T00:00:00").getTime();

		const calculateTimeLeft = () => {
			const now = Date.now();
			const difference = targetTime - now;

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				});
			}
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 1000);

		return () => {
			clearInterval(timer);
			clearTimeout(timeoutId);
		};
	}, []);

	if (!isMounted) return null;

	return (
		<section className="relative w-full py-16 md:py-28 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#072429] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783671008/ChatGPT_Image_Jul_10_2026_09_09_36_AM_yd5cc4.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783671104/ChatGPT_Image_Jul_10_2026_09_11_29_AM_x8dnty.png')] overflow-hidden px-4">
			<div
				ref={ref}
				className={`relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
			>
				{/* LIMITED SPOTS AVAILABLE */}
				<div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6 w-full">
					<span className="text-[#E0672A] text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
						Limited Spots Available
					</span>
				</div>

				{/* Headline */}
				<h2 className="font-serif text-[42px] md:text-[5rem] lg:text-[6rem] leading-[1.1] md:leading-[1.05] text-[#F9F7F3] mb-6">
					The Escape
					<br className="md:hidden" /> Begins In
					<span className="text-[#E0672A]">.</span>
				</h2>

				{/* Decorative divider */}

				{/* Countdown Container */}
				<div className="flex items-center justify-center w-full max-w-3xl mx-auto bg-[#09353B]/50 backdrop-blur-md border border-white/10 rounded-[16px] md:rounded-[32px] p-5 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
					{/* Days */}
					<div className="flex flex-col items-center flex-1">
						<span className="font-serif text-[36px] md:text-[4.5rem] lg:text-[5.5rem] text-[#F9F7F3] leading-none mb-1 md:mb-3">
							{String(timeLeft.days).padStart(2, "0")}
						</span>
						<span className="font-sans uppercase tracking-[0.2em] text-[#E0672A] text-[9px] md:text-sm font-bold whitespace-nowrap">
							Days
						</span>
					</div>

					<div className="w-px h-16 md:h-32 bg-white/10" />

					{/* Hours */}
					<div className="flex flex-col items-center flex-1">
						<span className="font-serif text-[36px] md:text-[4.5rem] lg:text-[5.5rem] text-[#F9F7F3] leading-none mb-1 md:mb-3">
							{String(timeLeft.hours).padStart(2, "0")}
						</span>
						<span className="font-sans uppercase tracking-[0.2em] text-[#E0672A] text-[9px] md:text-sm font-bold whitespace-nowrap">
							Hours
						</span>
					</div>

					<div className="w-px h-16 md:h-32 bg-white/10" />

					{/* Mins */}
					<div className="flex flex-col items-center flex-1">
						<span className="font-serif text-[36px] md:text-[4.5rem] lg:text-[5.5rem] text-[#F9F7F3] leading-none mb-1 md:mb-3">
							{String(timeLeft.minutes).padStart(2, "0")}
						</span>
						<span className="font-sans uppercase tracking-[0.2em] text-[#E0672A] text-[9px] md:text-sm font-bold whitespace-nowrap">
							Mins
						</span>
					</div>

					<div className="w-px h-16 md:h-32 bg-white/10" />

					{/* Secs */}
					<div className="flex flex-col items-center flex-1">
						<span className="font-serif text-[36px] md:text-[4.5rem] lg:text-[5.5rem] text-[#F9F7F3] leading-none mb-1 md:mb-3">
							{String(timeLeft.seconds).padStart(2, "0")}
						</span>
						<span className="font-sans uppercase tracking-[0.2em] text-[#E0672A] text-[9px] md:text-sm font-bold whitespace-nowrap">
							Secs
						</span>
					</div>
				</div>

				{/* Text Below */}
				<div className="mt-8 md:mt-12 flex flex-col items-center">
					<p className="text-[#F9F7F3]/90 text-[13px] md:text-[18px] font-sans mb-1 md:mb-2">
						An unforgettable experience is waiting.
					</p>
					<p className="text-[#F1E0C5] text-[15px] md:text-[22px] font-serif italic font-medium">
						Secure your spot today.
					</p>
				</div>

				{/* Button */}
				<button
					type="button"
					onClick={onRegister}
					className="mt-6 md:mt-10 flex items-center justify-center gap-2 md:gap-3 bg-[#E0672A] hover:bg-[#c25522] text-white h-[44px] md:h-14 px-8 md:px-12 rounded-[10px] md:rounded-[12px] font-sans font-medium text-[14px] md:text-[16px] transition-colors shadow-[0_8px_24px_rgba(224,103,42,0.25)] w-auto group"
				>
					<ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
					Reserve Your Place
				</button>
			</div>
		</section>
	);
}
