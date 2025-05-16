import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SocialAuthForm = () => {
	return (
		<div className="mt-6">
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t border-gray-300 dark:border-gray-700" />
				</div>
				<div className="relative flex justify-center text-sm">
					<span className="bg-light-900 px-2 text-dark-400 dark:bg-dark-300 dark:text-light-500">
						Or continue with
					</span>
				</div>
			</div>

			<div className="mt-6 grid grid-cols-2 gap-3">
				<Button
					variant="outline"
					className="flex items-center justify-center gap-2"
				>
					<Image
						src="/icons/github.svg"
						alt="GitHub"
						width={20}
						height={20}
						className="inver-colors"
					/>
					<span>GitHub</span>
				</Button>

				<Button
					variant="outline"
					className="flex items-center justify-center gap-2"
				>
					<Image src="/icons/google.svg" alt="Google" width={20} height={20} />
					<span>Google</span>
				</Button>
			</div>

			<div className="mt-6 text-center text-sm text-dark-400 dark:text-light-500">
				By signing in, you agree to our{" "}
				<a href="#" className="font-medium text-primary-500 hover:underline">
					Terms of Service
				</a>{" "}
				and{" "}
				<a href="#" className="font-medium text-primary-500 hover:underline">
					Privacy Policy
				</a>
				.
			</div>
		</div>
	);
};

export default SocialAuthForm;
