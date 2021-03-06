/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require(`tailwindcss/defaultTheme`);
const { orange } = require(`tailwindcss/colors`);

module.exports = {
	mode: `jit`,
	content: [`./src/pages/**/*.{js,ts,jsx,tsx}`, `./src/components/**/*.{js,ts,jsx,tsx}`],
	darkMode: `class`,
	theme: {
		extend: {
			fontFamily: {
				sans: [`Inter`, ...fontFamily.sans],
			},
			colors: {
				orange,
			},
		},
	},
};
