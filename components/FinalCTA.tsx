"use client";

import { Mail, Phone } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const XIcon = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="currentColor" className={className}>
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
	</svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
	>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect x="2" y="9" width="4" height="12" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
	>
		<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
		<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
		<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
	</svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
	>
		<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
		<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
	</svg>
);

const SocialLink = ({
	icon,
	href,
}: {
	icon: React.ReactNode;
	href: string;
}) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#E0672A] hover:text-[#E0672A] transition-colors"
	>
		{icon}
	</a>
);

export default function FinalCTA() {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIntersectionObserver(ref);

	return (
		<section className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[#0D4D55] bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783624321/ChatGPT_Image_Jul_9_2026_08_12_00_PM_vmlswu.png')] md:bg-[url('https://res.cloudinary.com/dxoorukfj/image/upload/v1783624215/ChatGPT_Image_Jul_9_2026_08_10_13_PM_jssz7h.png')] overflow-hidden border-t border-[rgba(255,255,255,0.05)]">
			<div
				ref={ref}
				className={`relative z-10 w-full max-w-6xl px-6 md:px-8 mx-auto flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
			>
				{/* Footer Links & Info */}
				<div className="w-full flex flex-col mt-2">
					{/* Mobile layout */}
					<div className="flex lg:hidden flex-col w-full text-left">
						<a
							href="mailto:concierge@leadersescape.com"
							className="flex items-center gap-4 pb-6 border-b border-white/10 group cursor-pointer w-full hover:bg-white/5 transition-colors -mx-6 px-6"
						>
							<div className="w-12 h-12 rounded-full border border-[rgba(224,103,42,0.3)] text-[#E0672A] flex items-center justify-center shrink-0 group-hover:bg-[#E0672A]/10 transition-colors">
								<Mail size={20} strokeWidth={1.5} />
							</div>
							<span className="text-[rgba(255,255,255,0.85)] text-[15px] font-sans truncate group-hover:text-white transition-colors">
								concierge@leadersescape.com
							</span>
						</a>
						<a
							href="tel:+234800532337"
							className="flex items-center gap-4 py-6 border-b border-white/10 group cursor-pointer w-full hover:bg-white/5 transition-colors -mx-6 px-6"
						>
							<div className="w-12 h-12 rounded-full border border-[rgba(224,103,42,0.3)] text-[#E0672A] flex items-center justify-center shrink-0 group-hover:bg-[#E0672A]/10 transition-colors">
								<Phone size={20} strokeWidth={1.5} />
							</div>
							<span className="text-[rgba(255,255,255,0.85)] text-[15px] font-sans group-hover:text-white transition-colors">
								+234 (0) 800 LEADER
							</span>
						</a>

						<div className="flex items-center justify-center gap-4 py-8 border-b border-white/10 w-full">
							<SocialLink
								icon={<LinkedinIcon className="w-[18px] h-[18px]" />}
								href="#"
							/>
							<SocialLink
								icon={<XIcon className="w-[18px] h-[18px]" />}
								href="#"
							/>
							<SocialLink
								icon={<InstagramIcon className="w-[18px] h-[18px]" />}
								href="#"
							/>
							<SocialLink
								icon={<YoutubeIcon className="w-[18px] h-[18px]" />}
								href="#"
							/>
						</div>
					</div>

					{/* Desktop layout */}
					<div className="hidden lg:flex items-center justify-between w-full pb-8 border-b border-white/10">
						<a
							href="mailto:presentationplusintl@gmail.com"
							className="flex items-center gap-4 group cursor-pointer"
						>
							<div className="w-12 h-12 rounded-full border border-[rgba(224,103,42,0.3)] text-[#E0672A] flex items-center justify-center group-hover:bg-[#E0672A]/10 transition-colors">
								<Mail size={20} strokeWidth={1.5} />
							</div>
							<span className="text-[rgba(255,255,255,0.85)] text-[15px] font-sans group-hover:text-white transition-colors">
								presentationplusintl@gmail.com
							</span>
						</a>

						<div className="w-px h-8 bg-white/10" />

						<a
							href="tel:+2348035521747"
							className="flex items-center gap-4 group cursor-pointer"
						>
							<div className="w-12 h-12 rounded-full border border-[rgba(224,103,42,0.3)] text-[#E0672A] flex items-center justify-center group-hover:bg-[#E0672A]/10 transition-colors">
								<Phone size={20} strokeWidth={1.5} />
							</div>
							<span className="text-[rgba(255,255,255,0.85)] text-[15px] font-sans group-hover:text-white transition-colors">
								0803 552 1747
							</span>
						</a>

						<div className="w-px h-8 bg-white/10" />

						<div className="flex items-center gap-4">
							<SocialLink
								icon={<LinkedinIcon className="w-[18px] h-[18px]" />}
								href="#"
							/>
							<SocialLink
								icon={<XIcon className="w-[18px] h-[18px]" />}
								href="#"
							/>
							<SocialLink
								icon={<InstagramIcon className="w-[18px] h-[18px]" />}
								href="#"
							/>
							<SocialLink
								icon={<YoutubeIcon className="w-[18px] h-[18px]" />}
								href="#"
							/>
						</div>
					</div>

					<div className="w-full text-center mt-6 md:mt-8">
						<p className="font-sans text-[rgba(255,255,255,0.5)] text-[12px] md:text-[13px]">
							© 2026 Leaders&apos; Escape. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
