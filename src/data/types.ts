import { Country, HeadOfState } from '@prisma/client';

export type MapColorType = `global` | `usa`;

export type Year = any;

export type CountryReturn = Country;
export type HeadOfStateReturn = HeadOfState & { country: Country };
