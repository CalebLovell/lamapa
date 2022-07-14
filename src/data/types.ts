import { Country, HeadOfState } from '@prisma/client';

export type CountryReturn = Country;
export type HeadOfStateReturn = HeadOfState & { country: Country };
export type HeadOfStateNoId = Omit<HeadOfState, `id`>;

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
