"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroProps {
	onRegister?: () => void;
}

export default function Hero({ onRegister }: HeroProps) {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 40);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="relative w-full flex flex-col font-sans text-brand-light bg-brand-teal">
			{/* 100vh Hero Container */}
			<section className="relative w-full h-screen flex flex-col overflow-hidden">
				{/* Background Video */}
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover z-0"
				>
					<source
						src="https://res.cloudinary.com/dxoorukfj/video/upload/v1783618597/video_kdfvvd.mp4"
						type="video/mp4"
					/>
				</video>
				<div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

				{/* Top layer containers */}
				<div className="relative z-20 flex flex-col w-full">
					{/* Header Navigation */}
					<nav
						className={`w-full px-4 md:px-12 lg:px-24 py-1 flex justify-between items-center transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 bg-brand-teal/95 backdrop-blur-md shadow-lg z-50" : "relative bg-transparent z-40"}`}
					>
						<div className="flex items-center">
							{/* Logo */}
							<Link
								href="/"
								className="relative h-16 w-32 md:h-20 md:w-48 flex items-center justify-start hover:opacity-80 transition-opacity -ml-2"
							>
								<Image
									src="https://res.cloudinary.com/dxoorukfj/image/upload/v1783673966/LEADERS_ESCAPE_LOGO_2_hoeq4i.png"
									alt="Leaders Escape Logo"
									fill
									sizes="(max-width: 768px) 128px, 192px"
									className="object-contain"
									priority
								/>
							</Link>
						</div>

						{/* Nav CTA Button */}
						<div className="hidden md:block">
							<button
								type="button"
								onClick={onRegister}
								className="bg-[#E0672A] hover:bg-[#c25522] text-white px-4 py-2.5 md:px-6 md:py-3 text-[13px] md:text-[15px] font-medium transition-colors inline-block rounded-xl shadow-md h-10 md:h-12 flex items-center justify-center"
							>
								Reserve Your Place
							</button>
						</div>
					</nav>
				</div>

				{/* Hero Content */}
				<div className="relative z-10 flex-1 flex flex-col justify-center px-4 md:px-16 lg:px-24">
					<div className="max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] animate-fade-in -mt-16 md:-mt-20 text-center md:text-left mx-auto md:mx-0">
						<h1 className="font-serif text-[40px] md:text-[7rem] lg:text-[8.5rem] leading-[1.05] md:leading-[0.95] lg:leading-[0.9] mb-6 md:mb-4 lg:mb-6 text-brand-light">
							Escape.
							<br />
							Reconnect.
							<br />
							Be Present.
						</h1>
						<p className="text-base md:text-2xl lg:text-3xl text-brand-muted mb-10 leading-[1.6] md:leading-[1.4] lg:leading-[1.35]">
							A nature retreat on Nigeria&apos;s coast,
							<br /> where luxury meets tranquility.
						</p>
						<button
							type="button"
							onClick={onRegister}
							className="bg-[#E0672A] hover:bg-[#c25522] text-white px-8 py-3.5 md:py-5 font-medium transition-all group inline-flex items-center justify-center gap-3 text-[15px] md:text-lg rounded-xl shadow-lg h-12 md:h-auto w-auto"
						>
							Reserve Your Place
							<span className="transform group-hover:translate-x-1 transition-transform">
								→
							</span>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
