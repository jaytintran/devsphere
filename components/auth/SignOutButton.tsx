"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const SignOutButton = () => {
	const handleSignOut = async () => {
		await signOut({ callbackUrl: ROUTES.SIGN_IN });
	};

	return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default SignOutButton;
