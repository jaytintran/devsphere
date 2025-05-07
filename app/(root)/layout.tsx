import Navbar from "@/components/navigation/navbar/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="min-h-screen bg-background">
			<Navbar />
			{children}
		</main>
	);
};

export default RootLayout;
