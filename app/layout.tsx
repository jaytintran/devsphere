import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../context/Theme";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
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

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await auth();

	console.log(session);

	return (
		<html
			lang="en"
			className={`${poppins.variable} ${spaceGrotesk.variable}`}
			suppressHydrationWarning
		>
			<body>
				<SessionProvider session={session}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<Toaster />
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	);
};

export default RootLayout;
