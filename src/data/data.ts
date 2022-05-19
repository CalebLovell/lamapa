export type Country = {
	name: string;
	headOfState: string;
	value: number;
};

export type Year = Country[];

const year2022: Year = [
	{ name: `United States of America`, headOfState: `Biden`, value: 4 },
	{ name: `Puerto Rico`, headOfState: `Biden`, value: 4 },
	{ name: `Mexico`, headOfState: `AMLO`, value: 2 },
	{ name: `Cuba`, headOfState: `Miguel Díaz-Canel`, value: 1 },
	{ name: `Jamaica`, headOfState: `Andrew Holness`, value: 7 },
	{ name: `Haiti`, headOfState: `Ariel Henry`, value: 5 },
	{ name: `Dominican Republic`, headOfState: `Luis Abinader`, value: 4 },
	{ name: `Trinidad and Tobago`, headOfState: `Paula-Mae Weekes`, value: 5 },
	{ name: `El Salvador`, headOfState: `Nayib Bukele`, value: 10 },
	{ name: `Honduras`, headOfState: `Xiomara Castro`, value: 3 },
	{ name: `Belize`, headOfState: `John Antonio Briceño`, value: 6 },
	{ name: `Guatemala`, headOfState: `Alejandro Giammattei`, value: 7 },
	{ name: `Nicaragua`, headOfState: `Daniel Ortega`, value: 0 },
	{ name: `Costa Rica`, headOfState: `Rodrigo Chaves`, value: 4 },
	{ name: `Panama`, headOfState: `Laurentino Cortizo`, value: 4 },
	{ name: `Colombia`, headOfState: `Iván Duque`, value: 6 },
	{ name: `Venezuela`, headOfState: `Nicolás Maduro`, value: 0 },
	{ name: `Guyana`, headOfState: `Irfaan Ali`, value: 2 },
	{ name: `Suriname`, headOfState: `Chan Santokhi`, value: 4 },
	// { name: `French Guyana`, headOfState: `Gabriel Serville`, value: 0 },
	{ name: `Ecuador`, headOfState: `Guillermo Lasso`, value: 7 },
	{ name: `Peru`, headOfState: `Pedro Castillo`, value: 1 },
	{ name: `Chile`, headOfState: `Gabriel Borique`, value: 3 },
	{ name: `Argentina`, headOfState: `Alberto Fernández`, value: 2 },
	{ name: `Uruguay`, headOfState: `Luis Lacalle Pou`, value: 6 },
	{ name: `Paraguay`, headOfState: `Mario Abdo Benítez`, value: 8 },
	{ name: `Brazil`, headOfState: `Bolsonaro`, value: 10 },
	{ name: `Bolivia`, headOfState: `Luis Arce`, value: 2 },
];

export const years = [year2022];

export type MapColorType = `global` | `usa`;

export const initialMapColorType: MapColorType = `global`;
