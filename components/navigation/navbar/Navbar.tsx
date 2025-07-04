import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggler from "./ThemeToggler";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import ROUTES from "@/constants/routes";

const Navbar = () => {
	return (
		<nav className="flex-between background-light900_dark200 fixed z-10 w-full p-6 dark:shadow-none sm:px-12 shadow-light-300 gap-5">
			<Link href="/" className="flex items-center gap-1">
				<Image
					src="/images/site-logo.svg"
					alt="DevSphere"
					width={23}
					height={23}
				/>

				<p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
					Dev<span className="text-primary-500">Sphere</span>
				</p>
			</Link>
			<p>Global Search</p>

			<div className="flex-between gap-5">
				<ThemeToggler />
			</div>
		</nav>
	);
};

export default Navbar;
