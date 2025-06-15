"use client";

import { Toaster } from "sonner";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html lang="en">
			<body>
				<div className="flex min-h-screen flex-col items-center justify-center">
					<h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
					<p className="mb-4 text-gray-600 dark:text-gray-400">
						{error.message || "An unexpected error occurred"}
					</p>
					<button
						onClick={() => reset()}
						className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
					>
						Try again
					</button>
				</div>
				<Toaster />
			</body>
		</html>
	);
}
