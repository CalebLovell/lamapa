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
	0: `Unknown`,
	1: `Far Left`,
	2: `Left Wing`,
	3: `Center Left`,
	4: `Center`,
	5: `Center Right`,
	6: `Right Wing`,
	7: `Far Right`,
	9: `Monarchy`,
};

export const getLeaningColors = (mapColorType: `global` | `usa`) => {
	const globalColors = {
		0: `#000000`,
		1: `rgb(157,0,0)`,
		2: `rgb(215,17,27)`,
		3: `rgb(223,139,139)`,
		4: `rgb(203,200,146)`,
		5: `rgb(147,184,200)`,
		6: `rgb(28,133,196)`,
		7: `rgb(0,96,147)`,
		9: `rgb(67,0,65)`,
	};
	const usaColors = {
		0: `#000000`,
		7: `rgb(157,0,0)`,
		6: `rgb(215,17,27)`,
		5: `rgb(223,139,139)`,
		4: `rgb(203,200,146)`,
		3: `rgb(147,184,200)`,
		2: `rgb(28,133,196)`,
		1: `rgb(0,96,147)`,
		9: `rgb(67,0,65)`,
	};
	return mapColorType === `global` ? globalColors : usaColors;
};
