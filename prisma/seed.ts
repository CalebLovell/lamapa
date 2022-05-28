import { countries } from '../src/data/seeders';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const createManyCountryPromises = countries.map(x => {
		const { id, name } = x;
		return prisma.country.create({ data: { id, name } });
	});
	const seededCountries = await Promise.all(createManyCountryPromises);
	console.log({ seededCountries });
}

main()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
