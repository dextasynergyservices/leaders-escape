"use client";

import { Users } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function LimitedAttendance() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);

	return (
		<section className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center bg-[#FAF8F3] overflow-hidden border-t border-[rgba(13,77,85,0.05)]">
			<div
				ref={ref}
				className={`relative z-10 w-full max-w-4xl px-4 md:px-6 mx-auto flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
			>
				<div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(13,77,85,0.08)] mb-6 md:mb-10">
					<Users
						size={32}
						className="text-[#E0672A] md:w-[40px] md:h-[40px]"
						strokeWidth={1.5}
					/>
				</div>

				<h2 className="font-serif text-[32px] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] md:leading-[1.05] text-[#0D4D55] mb-6">
					Exclusivity is Guaranteed.
				</h2>

				<p className="font-sans text-[rgba(13,77,85,0.85)] text-base md:text-xl max-w-2xl leading-[1.6]">
					To preserve the intimacy, depth, and quality of the networking
					experience, attendance is strictly capped. Once the cohort is filled,
					applications will close until the following year.
				</p>
			</div>
		</section>
	);
}
