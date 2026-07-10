"use client";

import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
	const [isClosing, setIsClosing] = useState(false);
	const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

	if (isOpen !== prevIsOpen) {
		setPrevIsOpen(isOpen);
		if (isOpen) {
			setIsClosing(false);
		}
	}

	// Prevent scrolling on body when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			onClose();
			setIsClosing(false);
		}, 300);
	};

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	if (!isOpen && !isClosing) return null;

	return (
		<div
			className={`fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"}`}
			onClick={handleOverlayClick}
			onKeyDown={(e) => {
				if (e.key === "Escape") handleClose();
			}}
			role="dialog"
			aria-modal="true"
		>
			<div
				className={`w-full md:max-w-lg bg-white rounded-t-3xl md:rounded-3xl shadow-2xl flex flex-col transition-transform duration-300 transform ${isClosing ? "translate-y-full md:scale-95" : "translate-y-0 md:scale-100"}`}
			>
				{/* Mobile Drag Handle */}
				<button
					type="button"
					className="w-full flex justify-center py-3 md:hidden cursor-pointer"
					onClick={handleClose}
					aria-label="Close modal"
				>
					<div className="w-12 h-1.5 bg-gray-200 rounded-full pointer-events-none" />
				</button>

				{/* Header */}
				<div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 border-b border-gray-100">
					<div>
						<h2 className="font-serif text-[20px] md:text-3xl text-[#0D4D55]">
							Contact Our Team
						</h2>
						<p className="font-sans text-[12px] md:text-sm text-[rgba(13,77,85,0.7)] mt-1">
							We&apos;ll get back to you as soon as possible.
						</p>
					</div>
					<button
						type="button"
						onClick={handleClose}
						className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors shrink-0"
					>
						<X size={18} className="md:w-5 md:h-5" />
					</button>
				</div>

				{/* Content */}
				<div className="flex flex-col gap-3 md:gap-4 px-4 md:px-8 py-4 md:py-8">
					<a
						href="mailto:presentationplusintl@gmail.com"
						className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl border border-[rgba(13,77,85,0.08)] hover:bg-[rgba(13,77,85,0.02)] transition-colors group"
					>
						<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F3EFE9] text-[#0D4D55] flex items-center justify-center shrink-0 border border-[rgba(13,77,85,0.03)] group-hover:bg-[#EBE5DB] transition-colors">
							<Mail size={18} className="md:w-5 md:h-5" strokeWidth={1.5} />
						</div>
						<div className="flex flex-col flex-1 min-w-0">
							<span className="font-sans text-[11px] md:text-[13px] text-[rgba(13,77,85,0.7)]">
								Email Us
							</span>
							<span className="font-sans text-[13px] md:text-[16px] font-semibold text-[#0D4D55] transition-colors break-all md:break-normal">
								presentationplusintl@gmail.com
							</span>
						</div>
					</a>

					<a
						href="tel:+2348035521747"
						className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl border border-[rgba(13,77,85,0.08)] hover:bg-[rgba(13,77,85,0.02)] transition-colors group"
					>
						<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F3EFE9] text-[#0D4D55] flex items-center justify-center shrink-0 border border-[rgba(13,77,85,0.03)] group-hover:bg-[#EBE5DB] transition-colors">
							<Phone size={18} className="md:w-5 md:h-5" strokeWidth={1.5} />
						</div>
						<div className="flex flex-col flex-1 min-w-0">
							<span className="font-sans text-[11px] md:text-[13px] text-[rgba(13,77,85,0.7)]">
								Call Us
							</span>
							<span className="font-sans text-[13px] md:text-[16px] font-semibold text-[#0D4D55] transition-colors">
								0803 552 1747
							</span>
						</div>
					</a>

					<a
						href="https://wa.me/2348035521747"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl border border-[rgba(13,77,85,0.08)] hover:bg-[rgba(13,77,85,0.02)] transition-colors group"
					>
						<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F3EFE9] text-[#0D4D55] flex items-center justify-center shrink-0 border border-[rgba(13,77,85,0.03)] group-hover:bg-[#EBE5DB] transition-colors">
							<MessageCircle
								size={18}
								className="md:w-5 md:h-5"
								strokeWidth={1.5}
							/>
						</div>
						<div className="flex flex-col flex-1 min-w-0">
							<span className="font-sans text-[11px] md:text-[13px] text-[rgba(13,77,85,0.7)]">
								WhatsApp
							</span>
							<span className="font-sans text-[13px] md:text-[16px] font-semibold text-[#0D4D55] transition-colors">
								Chat with our support
							</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
