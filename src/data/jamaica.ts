import { HeadOfState } from '@prisma/client';

export const source = `https://en.wikipedia.org/wiki/Prime_Minister_of_Jamaica`;

const countryId = 25;

export const jamaica: Omit<HeadOfState, `id`>[] = [
	{
		countryId,
		name: `Sir Alexander Bustamante`,
		tookOffice: new Date(`6 August 1962`),
		leftOffice: new Date(`23 February 1967`),
		party: `Jamaica Labour Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Sir Donald Sangster`,
		tookOffice: new Date(`23 February 1967`),
		leftOffice: new Date(`11 April 1967`),
		party: `Jamaica Labour Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Hugh Shearer`,
		tookOffice: new Date(`11 April 1967`),
		leftOffice: new Date(`2 March 1972`),
		party: `Jamaica Labour Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Michael Manley`,
		tookOffice: new Date(`2 March 1972`),
		leftOffice: new Date(`1 November 1980`),
		party: `People's National Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Edward Seaga`,
		tookOffice: new Date(`1 November 1980`),
		leftOffice: new Date(`10 February 1989`),
		party: `Jamaica Labour Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Michael Manley`,
		tookOffice: new Date(`10 February 1989`),
		leftOffice: new Date(`30 March 1992`),
		party: `People's National Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `P. J. Patterson`,
		tookOffice: new Date(`30 March 1992`),
		leftOffice: new Date(`30 March 2006`),
		party: `People's National Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Portia Simpson-Miller`,
		tookOffice: new Date(`30 March 2006`),
		leftOffice: new Date(`11 September 2007`),
		party: `People's National Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Bruce Golding`,
		tookOffice: new Date(`11 September 2007`),
		leftOffice: new Date(`23 October 2011`),
		party: `Jamaica Labour Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Andrew Holness`,
		tookOffice: new Date(`23 October 2011`),
		leftOffice: new Date(`5 January 2012`),
		party: `Jamaica Labour Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Portia Simpson-Miller`,
		tookOffice: new Date(`5 January 2012`),
		leftOffice: new Date(`3 March 2016`),
		party: `People's National Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Andrew Holness`,
		tookOffice: new Date(`3 March 2016`),
		leftOffice: new Date(),
		party: `Jamaica Labour Party`,
		leaning: 0,
	},
];
