import { auth } from "@/auth";
import SignOutButton from "@/components/auth/SignOutButton";

const Home = async () => {
	const session = await auth();
	return (
		<>
			<h1 className="text-3xl text-violet-200 font-normal font-space-grotesk">
				DevSphere
			</h1>

			<div className="px-10 pt-10">
				<SignOutButton />
			</div>
		</>
	);
};

export default Home;
