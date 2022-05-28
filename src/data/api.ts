import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCountries = async () => {
	const countries = await prisma.country.findMany();
	return countries;
};

export const getHeadsOfState = async () => {
	const headsOfState = await prisma.headOfState.findMany();
	return headsOfState;
};
