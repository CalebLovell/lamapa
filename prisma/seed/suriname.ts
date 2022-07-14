import { HeadOfStateNoId, leanings } from '../../src/data/types';

export const source = `https://en.wikipedia.org/wiki/President_of_Suriname`;

const countryId = 14;

export const suriname: HeadOfStateNoId[] = [
	{
		countryId,
		name: `Johan Ferrier`,
		tookOffice: new Date(`25 November 1975`),
		leftOffice: new Date(`13 August 1980`),
		party: `National Party of Suriname`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Henk Chin A Sen`,
		tookOffice: new Date(`15 August 1980`),
		leftOffice: new Date(`4 February 1982`),
		party: `Nationalist Republican Party`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Fred Ramdat Misier`,
		tookOffice: new Date(`8 February 1982`),
		leftOffice: new Date(`25 January 1988`),
		party: `Independent`,
		leaning: leanings.CENTRIST,
	},
	{
		countryId,
		name: `Ramsewak Shankar`,
		tookOffice: new Date(`25 January 1988`),
		leftOffice: new Date(`24 December 1990`),
		party: `Progressive Reform Party`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Johan Kraag`,
		tookOffice: new Date(`29 December 1990`),
		leftOffice: new Date(`16 September 1991`),
		party: `National Party of Suriname`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Ronald Venetiaan`,
		tookOffice: new Date(`16 September 1991`),
		leftOffice: new Date(`15 September 1996`),
		party: `National Party of Suriname`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Jules Wijdenbosch`,
		tookOffice: new Date(`15 September 1996`),
		leftOffice: new Date(`12 August 2000`),
		party: `National Democratic Party`,
		leaning: leanings.LEFT,
	},
	{
		countryId,
		name: `Ronald Venetiaan`,
		tookOffice: new Date(`12 August 2000`),
		leftOffice: new Date(`12 August 2010`),
		party: `National Party of Suriname`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Dési Bouterse`,
		tookOffice: new Date(`12 August 2010`),
		leftOffice: new Date(`16 July 2020`),
		party: `National Democratic Party`,
		leaning: leanings.LEFT,
	},
	{
		countryId,
		name: `Chan Santokhi`,
		tookOffice: new Date(`16 July 2020`),
		leftOffice: new Date(),
		party: `Progressive Reform Party`,
		leaning: leanings.CENTER_LEFT,
	},
];
