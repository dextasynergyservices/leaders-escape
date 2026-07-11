"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function About() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);

	return (
		<section
			className="
				relative overflow-hidden
				bg-[#F7F4EE]
				bg-cover bg-center bg-no-repeat
				bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625210/ChatGPT_Image_Jul_9_2026_08_26_40_PM_cbvu9q.png')]
				md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783625083/ChatGPT_Image_Jul_9_2026_08_24_16_PM_spo5iy.png')]
			"
		>
			<div
				ref={ref}
				className={`mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-36 transition-all duration-1000 ${
					isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
				}`}
			>
				<div className="flex flex-col items-center text-center">
					<p className="mb-3 md:mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#E0672A] md:text-[13px]">
						ABOUT LEADERS&apos; ESCAPE
					</p>

					<h2 className="mb-4 md:mb-8 max-w-4xl font-serif text-[32px] leading-[1.1] text-[#0D4D55] md:text-[4.2rem] lg:text-[4.8rem]">
						Step Away.
						<br />
						Lead Forward.
					</h2>

					<p className="max-w-3xl text-[13px] leading-relaxed text-[#45646A] md:text-[20px] md:leading-10">
						Leaders&apos; Escape is an exclusive three-day executive retreat
						designed for accomplished leaders seeking space to reflect,
						reconnect, and return with renewed clarity, meaningful
						relationships, and a stronger vision for what comes next.
					</p>
				</div>
			</div>
		</section>
	);
}
