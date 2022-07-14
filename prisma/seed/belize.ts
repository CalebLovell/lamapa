import { HeadOfStateNoId, leanings } from '../../src/data/types';

export const source = `https://en.wikipedia.org/wiki/List_of_prime_ministers_of_Belize`;

const countryId = 4;

export const belize: HeadOfStateNoId[] = [
	{
		countryId,
		name: `George Cadle Price`,
		party: `People's United Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: new Date(`12 September 1981`),
		leftOffice: new Date(`17 December 1984`),
	},
	{
		countryId,
		name: `Manuel Esquivel`,
		party: `United Democratic Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: new Date(`17 December 1984`),
		leftOffice: new Date(`7 September 1989`),
	},
	{
		countryId,
		name: `George Cadle Price`,
		party: `People's United Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: new Date(`7 September 1989`),
		leftOffice: new Date(`13 July 1993`),
	},
	{
		countryId,
		name: `Manuel Esquivel`,
		party: `United Democratic Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: new Date(`13 July 1993`),
		leftOffice: new Date(`28 August 1998`),
	},
	{
		countryId,
		name: `Said Musa`,
		party: `People's United Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: new Date(`28 August 1998`),
		leftOffice: new Date(`8 February 2008`),
	},
	{
		countryId,
		name: `Dean Barrow`,
		party: `United Democratic Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: new Date(`8 February 2008`),
		leftOffice: new Date(`12 November 2020`),
	},
	{
		countryId,
		name: `Johnny Briceño`,
		party: `People's United Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: new Date(`12 November 2020`),
		leftOffice: new Date(),
	},
];
