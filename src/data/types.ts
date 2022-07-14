import { Country, HeadOfState } from '@prisma/client';

export type CountryReturn = Country;
export type HeadOfStateReturn = HeadOfState & { country: Country };
export type HeadOfStateNoId = {
	countryId: HeadOfState[`countryId`];
	name: HeadOfState[`name`];
	party: HeadOfState[`party`];
	leaning: HeadOfState[`leaning`];
	tookOffice: string;
	leftOffice: string;
};

export const leanings = {
	FAR_LEFT: 1,
	LEFT: 2,
	CENTER_LEFT: 3,
	CENTRIST: 4,
	CENTER_RIGHT: 5,
	RIGHT: 6,
	FAR_RIGHT: 7,

	MONARCHY: 9,
};

export const leaningLabels = {
	0: `Uknown`,
	1: `Far Left`,
	2: `Left Wing`,
	3: `Center Left`,
	4: `Center`,
	5: `Center Right`,
	6: `Right Wing`,
	7: `Far Right`,
	9: `Monarchy`,
};
