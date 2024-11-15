/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sour: "Sour Gummy",
			},
			// animation: {
			// 	shake: {
			// 		"0%": { transform: "translateX(0%)" },
			// 		"25%": { transform: "translateX(-10%)" },
			// 		"75%": { transform: "translateX(110%)" },
			// 		"100%": { transform: "translateX(0%)" },
			// 	},
			// },
		},
	},
	plugins: [],
};
