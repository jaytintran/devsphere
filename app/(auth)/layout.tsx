import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return <main className="min-h-screen w-full bg-background">{children}</main>;
};

export default AuthLayout;
