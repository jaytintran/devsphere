import Navbar from "@/components/navigation/navbar/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="min-h-screen bg-background">
			<Navbar />
			<section className="background-light-850-dark-100">{children}</section>
		</main>
	);
};

export default RootLayout;
