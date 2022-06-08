import { HeadOfState } from '@prisma/client';

export const source = `https://en.wikipedia.org/wiki/List_of_prime_ministers_of_Belize`;

const countryId = 4;

export const belize: Omit<HeadOfState, `id`>[] = [
	{
		countryId,
		name: `George Cadle Price`,
		tookOffice: new Date(`12 September 1981`),
		leftOffice: new Date(`17 December 1984`),
		party: `People's United Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Manuel Esquivel`,
		tookOffice: new Date(`17 December 1984`),
		leftOffice: new Date(`7 September 1989`),
		party: `United Democratic Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `George Cadle Price`,
		tookOffice: new Date(`7 September 1989`),
		leftOffice: new Date(`13 July 1993`),
		party: `People's United Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Manuel Esquivel`,
		tookOffice: new Date(`13 July 1993`),
		leftOffice: new Date(`28 August 1998`),
		party: `United Democratic Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Said Musa`,
		tookOffice: new Date(`28 August 1998`),
		leftOffice: new Date(`8 February 2008`),
		party: `People's United Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Dean Barrow`,
		tookOffice: new Date(`8 February 2008`),
		leftOffice: new Date(`12 November 2020`),
		party: `United Democratic Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Johnny Briceño`,
		tookOffice: new Date(`12 November 2020`),
		leftOffice: new Date(),
		party: `People's United Party`,
		leaning: 0,
	},
];
