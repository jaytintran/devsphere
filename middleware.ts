import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

export async function middleware(request: NextRequest) {
	const session = await auth();

	// Protected routes logic
	const isAuthRoute =
		request.nextUrl.pathname.startsWith("/sign-in") ||
		request.nextUrl.pathname.startsWith("/sign-up");

	if (!session && !isAuthRoute) {
		// Redirect to sign-in if trying to access protected route without session
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	if (session && isAuthRoute) {
		// Redirect to home if trying to access auth routes with session
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}

// Specify which routes this middleware should run on
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)"],
};
