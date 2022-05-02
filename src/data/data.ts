export type Country = {
	name: string;
	headOfState: string;
	color: string;
};

export type Year = Country[];

const year2022: Year = [
	{ name: `United States of America`, headOfState: `Biden`, color: `blue` },
	{ name: `Brazil`, headOfState: `Bolsonaro`, color: `red` },
];

export const years = [year2022];
