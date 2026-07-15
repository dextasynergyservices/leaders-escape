import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Leaders' Escape",
	description: "An exclusive retreat for leaders.",
	icons: {
		icon: "https://res.cloudinary.com/dxoorukfj/image/upload/v1783673966/LEADERS_ESCAPE_LOGO_2_hoeq4i.png",
	},
};

export default function LeaderEscapeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
