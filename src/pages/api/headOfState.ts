import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== `GET`) return res.status(405).json({ message: `Method not allowed` });

	try {
		const headsOfState = await prisma.headOfState.findMany({
			where: {
				tookOffice: {
					lte: req.query.date,
				},
				leftOffice: {
					gte: req.query.date,
				},
			},
			include: {
				country: true,
			},
		});
		const datesAsStrings = headsOfState.map(x => {
			return { ...x, tookOffice: x.tookOffice.toISOString(), leftOffice: x.leftOffice.toISOString() };
		});
		res.status(200).json(datesAsStrings);
	} catch (err) {
		res.status(400).json({ message: `Something went wrong.` });
	}
};
