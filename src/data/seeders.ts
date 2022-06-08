import { Country } from '@prisma/client';
import { brazil } from './brazil';
import { mexico } from './mexico';
import { puertoRico, usa } from './usa';
import { bolivia } from './bolivia';
import { argentina } from './argentina';
import { peru } from './peru';
import { chile } from './chile';
import { cuba } from './cuba';
import { paraguay } from './paraguay';
import { uruguay } from './uruguay';
import { guatemala } from './guatemala';
import { belize } from './belize';
import { elSalvador } from './el-salvador';
import { honduras } from './honduras';
import { nicaragua } from './nicaragua';
import { costaRica } from './costa-rica';
import { panama } from './panama';
import { ecuador } from './ecuador';
import { guyana } from './guyana';
import { suriname } from './suriname';
import { trinidadAndTobago } from './trinidad-and-tobago';
import { jamaica } from './jamaica';
import { haiti } from './haiti';
import { dominicanRepublic } from './dominican-republic';
import { venezuela } from './venezuela';
import { colombia } from './colombia';

export const countries: Country[] = [
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

const raw = [
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

export const headsOfState = raw.map(x => {
	const { tookOffice, leftOffice } = x;
	return { ...x, tookOffice: new Date(tookOffice), leftOffice: new Date(leftOffice) };
});

export const leanings = {
	LEFT: 1,
	CENTER_LEFT: 2,
	CENTRIST: 3,
	CENTER_RIGHT: 4,
	RIGHT: 5,
};
