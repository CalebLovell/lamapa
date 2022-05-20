export type MapColorType = `global` | `usa`;

export type Year = any;

export type HeadOfState = {
	id?: string;
	country_id?: string;
	name: string;
	political_leaning: number;
	start_date?: string;
	end_date?: string;
	// TODO
	country: string;
};

export const testData: HeadOfState[] = [
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `United States of America`, name: `Biden`, political_leaning: 4 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Puerto Rico`, name: `Biden`, political_leaning: 4 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Mexico`, name: `AMLO`, political_leaning: 2 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Cuba`, name: `Miguel Díaz-Canel`, political_leaning: 1 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Jamaica`, name: `Andrew Holness`, political_leaning: 7 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Haiti`, name: `Ariel Henry`, political_leaning: 5 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Dominican Republic`, name: `Luis Abinader`, political_leaning: 4 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Trinidad and Tobago`, name: `Paula-Mae Weekes`, political_leaning: 5 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `El Salvador`, name: `Nayib Bukele`, political_leaning: 10 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Honduras`, name: `Xiomara Castro`, political_leaning: 3 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Belize`, name: `John Antonio Briceño`, political_leaning: 6 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Guatemala`, name: `Alejandro Giammattei`, political_leaning: 7 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Nicaragua`, name: `Daniel Ortega`, political_leaning: 0 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Costa Rica`, name: `Rodrigo Chaves`, political_leaning: 4 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Panama`, name: `Laurentino Cortizo`, political_leaning: 4 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Colombia`, name: `Iván Duque`, political_leaning: 6 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Venezuela`, name: `Nicolás Maduro`, political_leaning: 0 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Guyana`, name: `Irfaan Ali`, political_leaning: 2 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Suriname`, name: `Chan Santokhi`, political_leaning: 4 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Ecuador`, name: `Guillermo Lasso`, political_leaning: 7 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Peru`, name: `Pedro Castillo`, political_leaning: 1 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Chile`, name: `Gabriel Borique`, political_leaning: 3 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Argentina`, name: `Alberto Fernández`, political_leaning: 2 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Uruguay`, name: `Luis Lacalle Pou`, political_leaning: 6 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Paraguay`, name: `Mario Abdo Benítez`, political_leaning: 8 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Brazil`, name: `Bolsonaro`, political_leaning: 10 },
	{ start_date: `2021-10-10`, end_date: `2022-10-10`, country: `Bolivia`, name: `Luis Arce`, political_leaning: 2 },
	// { start_date: `2021-10-10`, end_date: `2022-10-10`, country: `French Guyana`, name: `Gabriel Serville`, political_leaning: 0 },
];
