// Import NextAuth and providers
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
// Import Google provider only when not in middleware context
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

// Define the configuration separately
const authConfig: NextAuthConfig = {
	providers: [
		GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	pages: {
		signIn: "/sign-in",
	},
	callbacks: {
		async redirect({ url, baseUrl }) {
			return url.startsWith(baseUrl) ? url : baseUrl;
		},
	},
};

// Dynamically add Google provider in non-middleware contexts
if (typeof window !== "undefined" || process.env.NEXT_RUNTIME !== "edge") {
	import("next-auth/providers/google")
		.then((GoogleProvider) => {
			authConfig.providers.push(
				GoogleProvider.default({
					clientId: process.env.GOOGLE_CLIENT_ID!,
					clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
				})
			);
		})
		.catch((err) => {
			console.error("Failed to load Google provider:", err);
		});
}

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
