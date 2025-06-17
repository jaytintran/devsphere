import React from "react";
import { Metadata } from "next";
import { AuthForm } from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

export const metadata: Metadata = {
	title: "Sign In | DevSphere",
	description: "Sign in to your DevSphere account",
};

const SignIn = () => {
	return (
		<div className="w-full">
			<h1 className="h3-bold mb-4">Sign In</h1>
			<p className="text-dark-400 dark:text-light-500 mb-6">
				Welcome back! Please sign in to continue.
			</p>

			{/* Form content will be rendered by the layout */}
			<AuthForm formType="SIGN_IN" schema={SignInSchema} />
		</div>
	);
};

export default SignIn;
