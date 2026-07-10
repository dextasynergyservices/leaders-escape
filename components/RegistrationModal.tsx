"use client";

import { CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";

interface RegistrationModalProps {
	isOpen: boolean;
	onClose: () => void;
}

type Step = "details" | "payment" | "success";

export default function RegistrationModal({
	isOpen,
	onClose,
}: RegistrationModalProps) {
	const [step, setStep] = useState<Step>("details");
	const [isClosing, setIsClosing] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);
	const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

	if (isOpen !== prevIsOpen) {
		setPrevIsOpen(isOpen);
		if (isOpen) {
			setStep("details");
			setIsClosing(false);
			setIsProcessing(false);
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
		}, 300); // match animation duration
	};

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	const handleDetailsSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStep("payment");
	};

	const handlePaymentSubmit = () => {
		setIsProcessing(true);
		// Simulate payment processing
		setTimeout(() => {
			setIsProcessing(false);
			setStep("success");
		}, 2000);
	};

	if (!isOpen && !isClosing) return null;

	return (
		<div
			className={`fixed inset-0 z-100 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"}`}
			onClick={handleOverlayClick}
			onKeyDown={(e) => {
				if (e.key === "Escape") handleClose();
			}}
			role="dialog"
			aria-modal="true"
		>
			<div
				className={`w-full md:max-w-2xl bg-white rounded-t-3xl md:rounded-3xl shadow-2xl flex flex-col max-h-[95vh] md:max-h-[85vh] transition-transform duration-300 transform ${isClosing ? "translate-y-full md:scale-95" : "translate-y-0 md:scale-100"}`}
			>
				{/* Mobile Drag Handle */}
				<button
					type="button"
					className="w-full flex justify-center py-3 md:hidden cursor-pointer shrink-0"
					onClick={handleClose}
					aria-label="Close modal"
				>
					<div className="w-12 h-1.5 bg-gray-200 rounded-full pointer-events-none" />
				</button>

				{/* Header */}
				<div className="flex items-center justify-between px-6 md:px-10 py-4 md:py-6 border-b border-gray-100 shrink-0">
					<div>
						<h2 className="font-serif text-[20px] md:text-3xl text-[#0D4D55]">
							{step === "details" && "Reserve Your Place"}
							{step === "payment" && "Secure Payment"}
							{step === "success" && "Registration Confirmed"}
						</h2>
						{step !== "success" && (
							<p className="font-sans text-xs md:text-sm text-gray-500 mt-1">
								Step {step === "details" ? "1" : "2"} of 2
							</p>
						)}
					</div>
					{step !== "success" && (
						<button
							type="button"
							onClick={handleClose}
							className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
						>
							<X size={20} />
						</button>
					)}
				</div>

				{/* Content Area - Scrollable */}
				<div className="flex-1 overflow-y-auto px-6 md:px-10 py-6 md:py-8 custom-scrollbar">
					{step === "details" && (
						<div className="flex flex-col gap-5 h-[500px]">
							<iframe
								title="Registration Form"
								src="https://docs.google.com/forms/d/e/1FAIpQLSdXMlLtPaswzpsejDzjmP6hW5RyuIvU-BuznNub3gGJrGDdcA/viewform?embedded=true"
								width="100%"
								height="100%"
								frameBorder="0"
								marginHeight={0}
								marginWidth={0}
								className="rounded-xl bg-gray-50"
							>
								Loading...
							</iframe>
						</div>
					)}

					{step === "payment" && (
						<div className="flex flex-col gap-6 h-full min-h-[300px]">
							<div className="bg-[#FAF8F3] p-5 rounded-2xl border border-[rgba(13,77,85,0.08)] flex flex-col gap-4">
								<div className="flex justify-between items-center pb-4 border-b border-[rgba(13,77,85,0.08)]">
									<span className="font-sans font-semibold text-[#0D4D55]">
										Retreat Fee
									</span>
									<span className="font-serif text-2xl text-[#0D4D55]">
										₦500,000
									</span>
								</div>
								<ul className="flex flex-col gap-2">
									<li className="flex items-center gap-3 text-sm text-[rgba(13,77,85,0.85)]">
										<CheckCircle2 size={16} className="text-[#E0672A]" /> 3
										Days, 2 Nights Accommodation
									</li>
									<li className="flex items-center gap-3 text-sm text-[rgba(13,77,85,0.85)]">
										<CheckCircle2 size={16} className="text-[#E0672A]" /> All
										Gourmet Meals & Beverages
									</li>
									<li className="flex items-center gap-3 text-sm text-[rgba(13,77,85,0.85)]">
										<CheckCircle2 size={16} className="text-[#E0672A]" />{" "}
										Facilitated Workshops & Materials
									</li>
								</ul>
							</div>

							<div className="flex flex-col gap-6 mt-4">
								<div className="flex flex-col gap-3">
									<h4 className="font-sans font-semibold text-[#0D4D55]">
										Option 1: Mainstack Payment
									</h4>
									<a
										href="https://mainstack.store/"
										target="_blank"
										rel="noopener noreferrer"
										className="w-full h-10 md:h-12 text-sm md:text-base bg-white hover:bg-gray-50 text-[#0D4D55] rounded-xl font-medium transition-colors flex items-center justify-center border border-[#0D4D55]/20 shadow-sm"
									>
										Pay via Mainstack
									</a>
								</div>

								<div className="flex flex-col gap-3">
									<h4 className="font-sans font-semibold text-[#0D4D55]">
										Option 2: Local Bank Transfer
									</h4>
									<div className="bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm font-sans flex flex-col gap-3">
										<div className="flex justify-between items-center">
											<span className="text-gray-500">Bank Name:</span>
											<strong className="text-[#0D4D55]">Your Bank</strong>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-gray-500">Account Name:</span>
											<strong className="text-[#0D4D55]">Leaders Escape</strong>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-gray-500">Account Number:</span>
											<strong className="text-[#0D4D55] text-lg">
												0123456789
											</strong>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					{step === "success" && (
						<div className="flex flex-col items-center justify-center text-center py-12 px-4">
							<div className="w-20 h-20 bg-[#E0672A]/10 rounded-full flex items-center justify-center mb-6">
								<CheckCircle2 size={40} className="text-[#E0672A]" />
							</div>
							<h3 className="font-serif text-2xl md:text-3xl text-[#0D4D55] mb-4">
								Application Received
							</h3>
							<p className="font-sans text-sm md:text-base text-gray-600 mb-8 max-w-md leading-relaxed">
								Thank you for your interest. Our team will review your
								application and send the official welcome packet to your email
								shortly.
							</p>
							<button
								type="button"
								onClick={handleClose}
								className="w-full max-w-[200px] md:max-w-none md:w-auto px-6 md:px-10 h-10 md:h-12 text-sm md:text-base bg-[#0D4D55] text-white rounded-xl font-medium hover:bg-[#0a3d44] transition-colors"
							>
								Close
							</button>
						</div>
					)}
				</div>

				{/* Footer / CTA Actions */}
				{step !== "success" && (
					<div className="p-4 md:p-6 md:px-10 border-t border-gray-100 flex flex-col md:flex-row justify-end gap-3 bg-white md:rounded-b-3xl shrink-0">
						{step === "payment" && (
							<button
								type="button"
								onClick={() => setStep("details")}
								disabled={isProcessing}
								className="w-full max-w-[200px] md:max-w-none md:w-auto h-10 md:h-12 px-4 md:px-6 text-sm md:text-base rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-colors border border-gray-200 disabled:opacity-50 mx-auto md:mx-0"
							>
								Back
							</button>
						)}
						{step === "details" ? (
							<button
								type="button"
								onClick={handleDetailsSubmit}
								className="w-full max-w-[240px] md:max-w-none md:w-auto h-10 md:h-12 px-4 md:px-8 text-sm md:text-base bg-[#E0672A] hover:bg-[#c25522] text-white rounded-xl font-medium transition-colors shadow-lg mx-auto md:mx-0"
							>
								I&apos;ve filled the form, Continue
							</button>
						) : (
							<a
								href="https://wa.me/234800532337?text=I%20have%20made%20payment%20for%20Leaders%20Escape"
								target="_blank"
								rel="noopener noreferrer"
								onClick={handlePaymentSubmit}
								className="w-full max-w-[240px] md:max-w-none md:w-auto h-10 md:h-12 px-4 md:px-8 text-sm md:text-base bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-medium transition-colors shadow-lg flex items-center justify-center gap-2 mx-auto md:mx-0"
							>
								Confirm via WhatsApp
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
