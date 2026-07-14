"use client";

import { useState } from "react";
import About from "@/components/About";
import CostOfNotResetting from "@/components/CostOfNotResetting";
import Countdown from "@/components/Countdown";
// import DressCode from "@/components/DressCode";
import FAQ from "@/components/FAQ";
import Facilitators from "@/components/Facilitators";
import FinalCTA from "@/components/FinalCTA";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import InteractiveItinerary from "@/components/InteractiveItinerary";
import InvestmentValue from "@/components/InvestmentValue";
import LoadingScreen from "@/components/LoadingScreen";
import RegistrationModal from "@/components/RegistrationModal";
// import WhyAttend from "@/components/WhyAttend";
import TravelAndLogistics from "@/components/TravelAndLogistics";
// import Testimonials from "@/components/Testimonials";
import WhoYoullMeet from "@/components/WhoYoullMeet";

export default function LeaderEscapePage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	return (
		<main className="flex min-h-screen flex-col bg-[#FAF8F3]">
			<LoadingScreen />
			<Hero onRegister={handleOpenModal} />
			<About />
			{/* <WhyAttend /> */}
			<WhoYoullMeet />
			<Facilitators />
			<InteractiveItinerary />
			<Gallery />
			<Countdown onRegister={handleOpenModal} />
			<InvestmentValue onRegister={handleOpenModal} />
			{/* <DressCode /> */}
			{/* <Testimonials /> */}
			<CostOfNotResetting />
			<TravelAndLogistics />
			<FAQ />
			<FinalCTA />

			<RegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
		</main>
	);
}
