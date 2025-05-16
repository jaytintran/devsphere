import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex min-h-screen w-full bg-(url('/images/auth-light.png')) dark:bg-[url('/images/auth-dark.png')] bg-cover bg-no-repeat bg-center">
			{/* Left side - Auth form */}
			<div className="flex w-full flex-col items-center justify-center px-4 py-10 sm:w-1/2 lg:px-8">
				{/* Logo */}
				<Link href="/" className="mb-8 flex items-center gap-2">
					<Image
						src="/images/site-logo.svg"
						alt="DevSphere"
						width={50}
						height={50}
						className="object-contain"
					/>
					<p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
						Dev<span className="text-primary-500">Sphere</span>
					</p>
				</Link>

				{/* Auth card */}
				<div className="w-full max-w-md rounded-lg bg-light-900 p-8 shadow-light100_dark100 dark:bg-dark-300">
					<div className="text-center pb-6">
						<p className="h3-bold">Join DevSphere</p>
						<span className="dark:text-light-400 text-dark-100">
							To get all of your technical questions answered.
						</span>
					</div>
					{children}
					<SocialAuthForm />
				</div>

				{/* Footer */}
				<p className="mt-8 text-center text-sm text-dark-400 dark:text-light-500">
					&copy; {new Date().getFullYear()} DevSphere. All rights reserved.
				</p>
			</div>

			{/* Right side - Background image with overlay */}
			<div className="hidden bg-auth-light bg-cover bg-center bg-no-repeat dark:bg-auth-black sm:block sm:w-1/2">
				<div className="flex h-full flex-col items-center justify-center bg-light-800/50 px-8 text-center dark:bg-dark-500/60">
					<div className="max-w-md">
						<h1 className="h1-bold mb-4 text-dark-100 dark:text-light-900">
							Welcome to DevSphere
						</h1>
						<p className="body-regular text-dark-400 dark:text-light-500">
							Where developers don't just ask – they build, share, and evolve.
							Join our community of problem solvers today.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AuthLayout;
