import { HeadOfStateNoId, leanings } from '../../src/data/types';

export const source = `https://en.wikipedia.org/wiki/List_of_heads_of_state_of_Trinidad_and_Tobago`;

const countryId = 28;

export const trinidadAndTobago: HeadOfStateNoId[] = [
	{
		countryId,
		name: `Sir Solomon Hochoy`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: new Date(`31 August 1962`),
		leftOffice: new Date(`15 September 1972`),
	},
	{
		countryId,
		name: `Sir Ellis Clarke`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: new Date(`15 September 1972`),
		leftOffice: new Date(`19 March 1987`),
	},
	{
		countryId,
		name: `Noor Hassanali`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: new Date(`20 March 1987`),
		leftOffice: new Date(`17 March 1997`),
	},
	{
		countryId,
		name: `A. N. R. Robinson`,
		party: `People's National Movement, Democratic Action Congress, National Alliance for Reconstruction`,
		leaning: leanings.CENTRIST,
		tookOffice: new Date(`18 March 1997`),
		leftOffice: new Date(`16 March 2003`),
	},
	{
		countryId,
		name: `George Maxwell Richards`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: new Date(`17 March 2003`),
		leftOffice: new Date(`18 March 2013`),
	},
	{
		countryId,
		name: `Anthony Carmona`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: new Date(`18 March 2013`),
		leftOffice: new Date(`19 March 2018`),
	},
	{
		countryId,
		name: `Paula-Mae Weekes`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: new Date(`19 March 2018`),
		leftOffice: new Date(),
	},
];
