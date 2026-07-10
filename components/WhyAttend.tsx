"use client";

import { Compass, ShieldCheck, Zap } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const features = [
	{
		icon: Compass,
		title: "Clarity of Vision",
	},
	{
		icon: ShieldCheck,
		title: "Trusted Environment",
	},
	{
		icon: Zap,
		title: "Renewed Energy",
	},
];

export default function WhyAttend() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);

	return (
		<section className="relative w-full overflow-hidden bg-[#FAF8F3] py-14 sm:py-20 md:py-28 lg:py-36">
			{/* Subtle decorative background elements */}
			<div className="pointer-events-none absolute inset-0 select-none">
				{/* Top-right soft radial glow */}
				<div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#E0672A]/[0.04] blur-[120px]" />
				{/* Bottom-left soft radial glow */}
				<div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-[#0D4D55]/[0.04] blur-[100px]" />
			</div>

			<div
				ref={ref}
				className={`relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center transition-all duration-1000 ease-out ${
					isVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"
				}`}
			>
				{/* Section Header — shortened headline */}
				<div className="flex flex-col items-center text-center mb-10 sm:mb-14 md:mb-20">
					{/* Small accent line above the label */}
					<div className="mb-5 h-[2px] w-10 rounded-full bg-[#E0672A]/60" />

					<p className="text-[#E0672A] uppercase tracking-[0.14em] text-[11px] sm:text-[12px] md:text-[13px] font-semibold mb-5 md:mb-6">
						Why Attend
					</p>

					<h2 className="font-serif text-[32px] sm:text-[28px] md:text-[36px] lg:text-[48px] leading-[1.08] text-[#0D4D55] mb-4 md:mb-6 max-w-2xl tracking-tight">
						Pause. Reflect. <br className="sm:hidden" />
						<span className="text-[#E0672A]">Lead Forward.</span>
					</h2>

					<p className="font-sans text-[#0D4D55]/70 text-[14px] sm:text-[12px] md:text-[14px] max-w-[520px] leading-[1.7] font-light sm:hidden">
						Break the cycle of burnout and uncover the clarity that only emerges
						in stillness.
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 w-full max-w-5xl">
					{features.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<div
								key={feature.title}
								className={`group relative flex flex-col items-center text-center bg-white p-7 sm:p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-[#0D4D55]/[0.06] shadow-[0_2px_16px_rgba(13,77,85,0.03)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#0D4D55]/[0.14] hover:shadow-[0_12px_40px_rgba(13,77,85,0.08)] ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
								style={{
									transitionDelay: isVisible ? `${300 + index * 120}ms` : "0ms",
								}}
							>
								{/* Subtle top accent line on hover */}
								<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 rounded-b-full bg-[#E0672A] transition-all duration-500 group-hover:w-12 sm:group-hover:w-14 md:group-hover:w-16" />

								{/* Icon container */}
								<div className="mb-5 sm:mb-6 md:mb-7 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E0672A]/[0.06] transition-all duration-500 group-hover:bg-[#E0672A]/[0.1] group-hover:scale-105">
									<Icon
										size={36}
										strokeWidth={1.2}
										className="text-[#E0672A] transition-colors duration-500 group-hover:text-[#c25522]"
									/>
								</div>

								<h3 className="font-serif text-[22px] sm:text-[20px] md:text-[26px] lg:text-[30px] text-[#0D4D55] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-tight">
									{feature.title}
								</h3>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
