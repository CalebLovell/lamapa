import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== `GET`) return res.status(405).json({ message: `Method not allowed` });

	try {
		const countries = await prisma.country.findMany();
		res.status(200).json(countries);
	} catch (err) {
		res.status(400).json({ message: `Something went wrong.` });
	}
};
