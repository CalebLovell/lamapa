import { Country } from '@prisma/client';
import { brazil } from './brazil';
import { mexico } from './mexico';
import { usa } from './usa';
import { bolivia } from './bolivia';
import { argentina } from './argentina';
import { peru } from './peru';
import { chile } from './chile';
import { cuba } from './cuba';
import { paraguay } from './paraguay';
import { uruguay } from './uruguay';
import { guatemala } from './guatemala';
import { belize } from './belize';
import { elsalvador } from './el-salvador';
import { honduras } from './honduras';
import { nicaragua } from './nicaragua';
import { costaRica } from './costa-rica';
import { panama } from './panama';

export const leanings = {
	LEFT: 1,
	CENTER_LEFT: 2,
	CENTRIST: 3,
	CENTER_RIGHT: 4,
	RIGHT: 5,
};

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

export const raw = [
	...usa,
	...mexico,
	...brazil,
	...bolivia,
	...argentina,
	...cuba,
	...peru,
	...chile,
	...paraguay,
	...uruguay,
	...guatemala,
	...belize,
	...elsalvador,
	...honduras,
	...nicaragua,
	...costaRica,
	...panama,
];

export const headsOfState = raw.map(x => {
	const { tookOffice, leftOffice } = x;
	return { ...x, tookOffice: new Date(tookOffice), leftOffice: new Date(leftOffice) };
});

// const tookOffice = new Date(`2021-10-10`);
// const leftOffice = new Date(`2022-10-10`);

// export const headsOfState: Omit<HeadOfState, `id`>[] = [
// 	{ countryId: 24, name: `Miguel Díaz-Canel`, leaning: leanings.LEFT, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Andrew Holness`, leaning: 7, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Ariel Henry`, leaning: 5, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Luis Abinader`, leaning: 4, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Paula-Mae Weekes`, leaning: 5, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Nayib Bukele`, leaning: 10, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Xiomara Castro`, leaning: 3, tookOffice, leftOffice },
// 	{ countryId: 5, name: `John Antonio Briceño`, leaning: 6, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Alejandro Giammattei`, leaning: 7, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Daniel Ortega`, leaning: 0, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Rodrigo Chaves`, leaning: 4, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Laurentino Cortizo`, leaning: 4, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Iván Duque`, leaning: 6, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Nicolás Maduro`, leaning: 0, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Irfaan Ali`, leaning: 2, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Chan Santokhi`, leaning: 4, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Guillermo Lasso`, leaning: 7, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Pedro Castillo`, leaning: 1, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Gabriel Borique`, leaning: 3, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Alberto Fernández`, leaning: 2, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Luis Lacalle Pou`, leaning: 6, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Mario Abdo Benítez`, leaning: 8, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Bolsonaro`, leaning: 10, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Luis Arce`, leaning: 2, tookOffice, leftOffice },
// 	{ countryId: 5, name: `Gabriel Serville`, leaning: 0, tookOffice, leftOffice },
// ];
