import { HeadOfStateNoId, leanings } from '../../src/data/types';

export const source = `https://en.wikipedia.org/wiki/Prime_Minister_of_Jamaica`;

const countryId = 25;

export const jamaica: HeadOfStateNoId[] = [
	{
		countryId,
		name: `Sir Alexander Bustamante`,
		party: `Jamaica Labour Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: new Date(`6 August 1962`),
		leftOffice: new Date(`23 February 1967`),
	},
	{
		countryId,
		name: `Sir Donald Sangster`,
		party: `Jamaica Labour Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: new Date(`23 February 1967`),
		leftOffice: new Date(`11 April 1967`),
	},
	{
		countryId,
		name: `Hugh Shearer`,
		party: `Jamaica Labour Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: new Date(`11 April 1967`),
		leftOffice: new Date(`2 March 1972`),
	},
	{
		countryId,
		name: `Michael Manley`,
		party: `People's National Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: new Date(`2 March 1972`),
		leftOffice: new Date(`1 November 1980`),
	},
	{
		countryId,
		name: `Edward Seaga`,
		party: `Jamaica Labour Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: new Date(`1 November 1980`),
		leftOffice: new Date(`10 February 1989`),
	},
	{
		countryId,
		name: `Michael Manley`,
		party: `People's National Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: new Date(`10 February 1989`),
		leftOffice: new Date(`30 March 1992`),
	},
	{
		countryId,
		name: `P. J. Patterson`,
		party: `People's National Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: new Date(`30 March 1992`),
		leftOffice: new Date(`30 March 2006`),
	},
	{
		countryId,
		name: `Portia Simpson-Miller`,
		party: `People's National Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: new Date(`30 March 2006`),
		leftOffice: new Date(`11 September 2007`),
	},
	{
		countryId,
		name: `Bruce Golding`,
		party: `Jamaica Labour Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: new Date(`11 September 2007`),
		leftOffice: new Date(`23 October 2011`),
	},
	{
		countryId,
		name: `Andrew Holness`,
		party: `Jamaica Labour Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: new Date(`23 October 2011`),
		leftOffice: new Date(`5 January 2012`),
	},
	{
		countryId,
		name: `Portia Simpson-Miller`,
		party: `People's National Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: new Date(`5 January 2012`),
		leftOffice: new Date(`3 March 2016`),
	},
	{
		countryId,
		name: `Andrew Holness`,
		party: `Jamaica Labour Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: new Date(`3 March 2016`),
		leftOffice: new Date(),
	},
];
