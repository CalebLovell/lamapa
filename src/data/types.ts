import { Country, HeadOfState } from '@prisma/client';

export type CountryReturn = Country;
export type HeadOfStateReturn = HeadOfState & { country: Country };
export type HeadOfStateNoId = Omit<HeadOfState, `id`>;

export const leanings = {
	LEFT: 1,
	CENTER_LEFT: 2,
	CENTRIST: 3,
	CENTER_RIGHT: 4,
	RIGHT: 5,
};
