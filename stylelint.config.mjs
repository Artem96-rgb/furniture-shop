/** @type {import('stylelint').Config} */
const styleLintConfig = {
	extends: ["stylelint-config-tailwindcss"],
	rules: {
		"property-no-unknown": [true, { ignoreProperties: ["tailwind"] }], // игнорировать tailwind-классы
	},
};

export default styleLintConfig;
