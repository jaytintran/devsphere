/** @type {import('tailwindcss').Config} */
module.exports = {
	// ... other config
	theme: {
		extend: {
			// ... other extensions
			backgroundImage: {
				"auth-light": "url('/images/auth-light.png')",
				"auth-black": "url('/images/auth-dark.png')",
			},
		},
	},
	// ... other config
};
