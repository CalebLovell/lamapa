import { PrismaClient, Country } from '@prisma/client';

import { brazil } from './seed/brazil';
import { mexico } from './seed/mexico';
import { puertoRico, usa } from './seed/usa';
import { bolivia } from './seed/bolivia';
import { argentina } from './seed/argentina';
import { peru } from './seed/peru';
import { chile } from './seed/chile';
import { cuba } from './seed/cuba';
import { paraguay } from './seed/paraguay';
import { uruguay } from './seed/uruguay';
import { guatemala } from './seed/guatemala';
import { belize } from './seed/belize';
import { elSalvador } from './seed/el-salvador';
import { honduras } from './seed/honduras';
import { nicaragua } from './seed/nicaragua';
import { costaRica } from './seed/costa-rica';
import { panama } from './seed/panama';
import { ecuador } from './seed/ecuador';
import { guyana } from './seed/guyana';
import { suriname } from './seed/suriname';
import { trinidadAndTobago } from './seed/trinidad-and-tobago';
import { jamaica } from './seed/jamaica';
import { haiti } from './seed/haiti';
import { dominicanRepublic } from './seed/dominican-republic';
import { venezuela } from './seed/venezuela';
import { colombia } from './seed/colombia';

const prisma = new PrismaClient();

const countries: Country[] = [
	{ id: 1, name: `United States of America` },
	{ id: 2, name: `Mexico` },
	{ id: 3, name: `Guatemala` },
	{ id: 4, name: `Belize` },
	{ id: 5, name: `El Salvador` },
	{ id: 6, name: `Honduras` },
	{ id: 7, name: `Nicaragua` },
	{ id: 8, name: `Costa Rica` },
	{ id: 9, name: `Panama` },
	{ id: 10, name: `Colombia` },
	{ id: 11, name: `Venezuela` },
	{ id: 12, name: `Ecuador` },
	{ id: 13, name: `Guyana` },
	{ id: 14, name: `Suriname` },
	{ id: 15, name: `French Guyana` },
	{ id: 16, name: `Peru` },
	{ id: 17, name: `Bolivia` },
	{ id: 18, name: `Paraguay` },
	{ id: 19, name: `Brazil` },
	{ id: 20, name: `Argentina` },
	{ id: 21, name: `Uruguay` },
	{ id: 22, name: `Chile` },
	{ id: 23, name: `Puerto Rico` },
	{ id: 24, name: `Cuba` },
	{ id: 25, name: `Jamaica` },
	{ id: 26, name: `Haiti` },
	{ id: 27, name: `Dominican Republic` },
	{ id: 28, name: `Trinidad and Tobago` },
];

const headsOfState = [
	...usa,
	...mexico,
	...guatemala,
	...belize,
	...elSalvador,
	...honduras,
	...nicaragua,
	...costaRica,
	...panama,
	...colombia,
	...venezuela,
	...ecuador,
	...guyana,
	...suriname,
	...peru,
	...bolivia,
	...brazil,
	...argentina,
	...chile,
	...paraguay,
	...uruguay,
	...cuba,
	...jamaica,
	...haiti,
	...dominicanRepublic,
	...trinidadAndTobago,
	...puertoRico,
];

async function main() {
	const createManyCountryPromises = countries.map(x => {
		const { id, name } = x;
		return prisma.country.create({ data: { id, name } });
	});
	const seededCountries = await Promise.all(createManyCountryPromises);
	console.log({ seededCountries });

	const createManyHeadsOfStatePromises = headsOfState.map(x => {
		const { countryId, name, party, leaning, tookOffice, leftOffice } = x;
		return prisma.headOfState.create({
			data: { countryId, name, party, leaning, tookOffice: new Date(tookOffice), leftOffice: leftOffice ? new Date(leftOffice) : new Date() },
		});
	});
	const seededHeadsOfState = await Promise.all(createManyHeadsOfStatePromises);
	console.log({ seededHeadsOfState });
}

main()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
