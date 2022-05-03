export type Country = {
	name: string;
	headOfState: string;
	color: string;
};

export type Year = Country[];

const year2022: Year = [
	{ name: `United States of America`, headOfState: `Biden`, color: `blue` },
	{ name: `Mexico`, headOfState: `AMLO`, color: `blue` },
	{ name: `Colombia`, headOfState: `Iván Duque`, color: `red` },
	{ name: `Brazil`, headOfState: `Bolsonaro`, color: `red` },
	{ name: `Bolivia`, headOfState: `Luis Arce`, color: `blue` },
];

export const years = [year2022];
