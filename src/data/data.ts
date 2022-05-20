export type MapColorType = `global` | `usa`;

export type Year = any;

export type HeadOfState = {
	id: string;
	country_id: string;
	name: string;
	political_leaning: number;
	state_date?: string;
	end_date?: string;
	// TODO
	country: string;
};

export const testData: HeadOfState[] = [
	{ id: `test`, country_id: `test`, country: `United States of America`, name: `Biden`, political_leaning: 4 },
	{ id: `test`, country_id: `test`, country: `Puerto Rico`, name: `Biden`, political_leaning: 4 },
	{ id: `test`, country_id: `test`, country: `Mexico`, name: `AMLO`, political_leaning: 2 },
	{ id: `test`, country_id: `test`, country: `Cuba`, name: `Miguel Díaz-Canel`, political_leaning: 1 },
	{ id: `test`, country_id: `test`, country: `Jamaica`, name: `Andrew Holness`, political_leaning: 7 },
	{ id: `test`, country_id: `test`, country: `Haiti`, name: `Ariel Henry`, political_leaning: 5 },
	{ id: `test`, country_id: `test`, country: `Dominican Republic`, name: `Luis Abinader`, political_leaning: 4 },
	{ id: `test`, country_id: `test`, country: `Trinidad and Tobago`, name: `Paula-Mae Weekes`, political_leaning: 5 },
	{ id: `test`, country_id: `test`, country: `El Salvador`, name: `Nayib Bukele`, political_leaning: 10 },
	{ id: `test`, country_id: `test`, country: `Honduras`, name: `Xiomara Castro`, political_leaning: 3 },
	{ id: `test`, country_id: `test`, country: `Belize`, name: `John Antonio Briceño`, political_leaning: 6 },
	{ id: `test`, country_id: `test`, country: `Guatemala`, name: `Alejandro Giammattei`, political_leaning: 7 },
	{ id: `test`, country_id: `test`, country: `Nicaragua`, name: `Daniel Ortega`, political_leaning: 0 },
	{ id: `test`, country_id: `test`, country: `Costa Rica`, name: `Rodrigo Chaves`, political_leaning: 4 },
	{ id: `test`, country_id: `test`, country: `Panama`, name: `Laurentino Cortizo`, political_leaning: 4 },
	{ id: `test`, country_id: `test`, country: `Colombia`, name: `Iván Duque`, political_leaning: 6 },
	{ id: `test`, country_id: `test`, country: `Venezuela`, name: `Nicolás Maduro`, political_leaning: 0 },
	{ id: `test`, country_id: `test`, country: `Guyana`, name: `Irfaan Ali`, political_leaning: 2 },
	{ id: `test`, country_id: `test`, country: `Suriname`, name: `Chan Santokhi`, political_leaning: 4 },
	{ id: `test`, country_id: `test`, country: `Ecuador`, name: `Guillermo Lasso`, political_leaning: 7 },
	{ id: `test`, country_id: `test`, country: `Peru`, name: `Pedro Castillo`, political_leaning: 1 },
	{ id: `test`, country_id: `test`, country: `Chile`, name: `Gabriel Borique`, political_leaning: 3 },
	{ id: `test`, country_id: `test`, country: `Argentina`, name: `Alberto Fernández`, political_leaning: 2 },
	{ id: `test`, country_id: `test`, country: `Uruguay`, name: `Luis Lacalle Pou`, political_leaning: 6 },
	{ id: `test`, country_id: `test`, country: `Paraguay`, name: `Mario Abdo Benítez`, political_leaning: 8 },
	{ id: `test`, country_id: `test`, country: `Brazil`, name: `Bolsonaro`, political_leaning: 10 },
	{ id: `test`, country_id: `test`, country: `Bolivia`, name: `Luis Arce`, political_leaning: 2 },
	// { id: 'test', country_id: 'test', country: `French Guyana`, name: `Gabriel Serville`, political_leaning: 0 },
];
