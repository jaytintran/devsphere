import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import Navbar from "@/components/navigation/navbar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"], // Pick the weights you need
	variable: "--font-poppins", // You can name your CSS variable
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
	title: "DevSphere",
	description: "DevSphere is StackOverflow + A.I",
	icons: {
		icon: "/images/site-logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${poppins.variable} ${spaceGrotesk.variable}`}
			suppressHydrationWarning
		>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
			>
				<Navbar />
				<body>{children}</body>
			</ThemeProvider>
		</html>
	);
}
