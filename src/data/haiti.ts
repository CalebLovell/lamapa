import { HeadOfState } from '@prisma/client';

export const source = `https://en.wikipedia.org/wiki/List_of_heads_of_state_of_Haiti`;

const countryId = 26;

export const haiti: Omit<HeadOfState, `id`>[] = [];
