import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getHeadsOfState = async ({ date }) => {
	const headsOfState = await prisma.headOfState.findMany({
		where: {
			startDate: {
				lte: date,
			},
			endDate: {
				gte: date,
			},
		},
	});
	const datesAsStrings = headsOfState.map(x => {
		return { ...x, startDate: x.startDate.toISOString(), endDate: x.endDate.toISOString() };
	});
	return datesAsStrings;
};
