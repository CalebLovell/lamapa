import { Country, HeadOfState } from '@prisma/client';

const politicalLeanings = {
	LEFT: 1,
	CENTER_LEFT: 2,
	CENTRIST: 3,
	CENTER_RIGHT: 4,
	RIGHT: 5,
};

export const countries: Country[] = [
	{ id: 1, name: `United States of America` },
	{ id: 2, name: `Mexico` },
	{ id: 3, name: `Guatemala` },
	{ id: 4, name: `Belize` },
	{ id: 5, name: `El Salvador` },
	{ id: 6, name: `Honduras` },
	{ id: 7, name: `Nicaragua` },
	{ id: 8, name: `Costa Rica` },
	{ id: 9, name: `Panama` },
	{ id: 10, name: `Colombia` },
	{ id: 11, name: `Venezuela` },
	{ id: 12, name: `Ecuador` },
	{ id: 13, name: `Guyana` },
	{ id: 14, name: `Suriname` },
	{ id: 15, name: `French Guyana` },
	{ id: 16, name: `Peru` },
	{ id: 17, name: `Bolivia` },
	{ id: 18, name: `Paraguay` },
	{ id: 19, name: `Brazil` },
	{ id: 20, name: `Argentina` },
	{ id: 21, name: `Uruguay` },
	{ id: 22, name: `Chile` },
	{ id: 23, name: `Puerto Rico` },
	{ id: 24, name: `Cuba` },
	{ id: 25, name: `Jamaica` },
	{ id: 26, name: `Haiti` },
	{ id: 27, name: `Dominican Republic` },
	{ id: 28, name: `Trinidad and Tobago` },
];

const startDate = new Date(`2021-10-10`);
const endDate = new Date(`2022-10-10`);

export const headsOfState: Omit<HeadOfState, `id`>[] = [
	{ countryId: 1, name: `Biden`, politicalLeaning: politicalLeanings.CENTER_LEFT, startDate, endDate },
	{ countryId: 2, name: `AMLO`, politicalLeaning: politicalLeanings.LEFT, startDate, endDate },
	{ countryId: 24, name: `Miguel Díaz-Canel`, politicalLeaning: politicalLeanings.LEFT, startDate, endDate },
	{ countryId: 1, name: `Andrew Holness`, politicalLeaning: 7, startDate, endDate },
	{ countryId: 1, name: `Ariel Henry`, politicalLeaning: 5, startDate, endDate },
	{ countryId: 1, name: `Luis Abinader`, politicalLeaning: 4, startDate, endDate },
	{ countryId: 1, name: `Paula-Mae Weekes`, politicalLeaning: 5, startDate, endDate },
	{ countryId: 1, name: `Nayib Bukele`, politicalLeaning: 10, startDate, endDate },
	{ countryId: 1, name: `Xiomara Castro`, politicalLeaning: 3, startDate, endDate },
	{ countryId: 1, name: `John Antonio Briceño`, politicalLeaning: 6, startDate, endDate },
	{ countryId: 1, name: `Alejandro Giammattei`, politicalLeaning: 7, startDate, endDate },
	{ countryId: 1, name: `Daniel Ortega`, politicalLeaning: 0, startDate, endDate },
	{ countryId: 1, name: `Rodrigo Chaves`, politicalLeaning: 4, startDate, endDate },
	{ countryId: 1, name: `Laurentino Cortizo`, politicalLeaning: 4, startDate, endDate },
	{ countryId: 1, name: `Iván Duque`, politicalLeaning: 6, startDate, endDate },
	{ countryId: 1, name: `Nicolás Maduro`, politicalLeaning: 0, startDate, endDate },
	{ countryId: 1, name: `Irfaan Ali`, politicalLeaning: 2, startDate, endDate },
	{ countryId: 1, name: `Chan Santokhi`, politicalLeaning: 4, startDate, endDate },
	{ countryId: 1, name: `Guillermo Lasso`, politicalLeaning: 7, startDate, endDate },
	{ countryId: 1, name: `Pedro Castillo`, politicalLeaning: 1, startDate, endDate },
	{ countryId: 1, name: `Gabriel Borique`, politicalLeaning: 3, startDate, endDate },
	{ countryId: 1, name: `Alberto Fernández`, politicalLeaning: 2, startDate, endDate },
	{ countryId: 1, name: `Luis Lacalle Pou`, politicalLeaning: 6, startDate, endDate },
	{ countryId: 1, name: `Mario Abdo Benítez`, politicalLeaning: 8, startDate, endDate },
	{ countryId: 1, name: `Bolsonaro`, politicalLeaning: 10, startDate, endDate },
	{ countryId: 1, name: `Luis Arce`, politicalLeaning: 2, startDate, endDate },
	{ countryId: 1, name: `Gabriel Serville`, politicalLeaning: 0, startDate, endDate },
];
