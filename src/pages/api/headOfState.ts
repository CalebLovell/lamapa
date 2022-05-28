import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== `GET`) return res.status(405).json({ message: `Method not allowed` });

	try {
		const headsOfState = await prisma.headOfState.findMany({
			where: {
				startDate: {
					lte: req.body.date,
				},
				endDate: {
					gte: req.body.date,
				},
			},
			include: {
				country: true,
			},
		});
		const datesAsStrings = headsOfState.map(x => {
			return { ...x, startDate: x.startDate.toISOString(), endDate: x.endDate.toISOString() };
		});
		res.status(200).json(datesAsStrings);
	} catch (err) {
		res.status(400).json({ message: `Something went wrong.` });
	}
};
