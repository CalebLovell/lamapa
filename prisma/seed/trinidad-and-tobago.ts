import { HeadOfStateNoId } from '../../src/data/types';

export const source = `https://en.wikipedia.org/wiki/List_of_heads_of_state_of_Trinidad_and_Tobago`;

const countryId = 28;

export const trinidadAndTobago: HeadOfStateNoId[] = [
	{
		countryId,
		name: `Sir Solomon Hochoy`,
		tookOffice: new Date(`31 August 1962`),
		leftOffice: new Date(`15 September 1972`),
		party: `Independent`,
		leaning: 0,
	},
	{
		countryId,
		name: `Sir Ellis Clarke`,
		tookOffice: new Date(`15 September 1972`),
		leftOffice: new Date(`19 March 1987`),
		party: `None`,
		leaning: 0,
	},
	{
		countryId,
		name: `Noor Hassanali`,
		tookOffice: new Date(`20 March 1987`),
		leftOffice: new Date(`17 March 1997`),
		party: `Independent`,
		leaning: 0,
	},
	{
		countryId,
		name: `A. N. R. Robinson`,
		tookOffice: new Date(`18 March 1997`),
		leftOffice: new Date(`16 March 2003`),
		party: `People's National Movement, Democratic Action Congress, National Alliance for Reconstruction`,
		leaning: 0,
	},
	{
		countryId,
		name: `George Maxwell Richards`,
		tookOffice: new Date(`17 March 2003`),
		leftOffice: new Date(`18 March 2013`),
		party: `Independent`,
		leaning: 0,
	},
	{
		countryId,
		name: `Anthony Carmona`,
		tookOffice: new Date(`18 March 2013`),
		leftOffice: new Date(`19 March 2018`),
		party: `Independent`,
		leaning: 0,
	},
	{
		countryId,
		name: `Paula-Mae Weekes`,
		tookOffice: new Date(`19 March 2018`),
		leftOffice: new Date(),
		party: `Independent`,
		leaning: 0,
	},
];
