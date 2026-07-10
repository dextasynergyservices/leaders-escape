"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
	const [isLoading, setIsLoading] = useState(true);
	const [isFadingOut, setIsFadingOut] = useState(false);

	useEffect(() => {
		// Prevent scrolling while loading
		if (isLoading) {
			document.body.style.overflow = "hidden";
		}

		const timer = setTimeout(() => {
			setIsFadingOut(true);
			setTimeout(() => {
				setIsLoading(false);
				document.body.style.overflow = "unset";
			}, 800); // match fade out duration
		}, 2500); // How long the loading screen shows

		return () => {
			clearTimeout(timer);
			document.body.style.overflow = "unset";
		};
	}, [isLoading]);

	if (!isLoading) return null;

	return (
		<div
			className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D4D55] transition-opacity duration-700 ease-in-out ${
				isFadingOut ? "opacity-0" : "opacity-100"
			}`}
		>
			<div className="relative flex flex-col items-center">
				<div className="relative w-48 h-24 md:w-64 md:h-32 mb-8 animate-pulse">
					<Image
						src="https://res.cloudinary.com/dxoorukfj/image/upload/v1783673966/LEADERS_ESCAPE_LOGO_2_hoeq4i.png"
						alt="Leaders Escape Logo"
						fill
						className="object-contain"
						priority
					/>
				</div>
				<div className="flex gap-2">
					<div
						className="w-2 h-2 rounded-full bg-[#E0672A] animate-bounce"
						style={{ animationDelay: "0ms" }}
					></div>
					<div
						className="w-2 h-2 rounded-full bg-[#E0672A] animate-bounce"
						style={{ animationDelay: "150ms" }}
					></div>
					<div
						className="w-2 h-2 rounded-full bg-[#E0672A] animate-bounce"
						style={{ animationDelay: "300ms" }}
					></div>
				</div>
			</div>
		</div>
	);
}
