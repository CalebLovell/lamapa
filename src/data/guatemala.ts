import { HeadOfState } from '@prisma/client';

export const source = `https://www.mapsofworld.com/list-of/presidents-guatemala/`;

const countryId = 3;

export const guatemala: Omit<HeadOfState, `id`>[] = [
	{
		countryId,
		name: `Alejandro Giammattei`,
		tookOffice: new Date(`14 January 2020`),
		leftOffice: new Date(),
		party: `Vamos`,
		leaning: 0,
	},
	{
		countryId,
		name: `Jimmy Morales`,
		tookOffice: new Date(`14 January 2016`),
		leftOffice: new Date(`14 January 2020`),
		party: `National Convergence Front`,
		leaning: 0,
	},
	{
		countryId,
		name: `Alejandro Maldonado`,
		tookOffice: new Date(`3 September 2015`),
		leftOffice: new Date(`14 January 2016`),
		party: `Independent`,
		leaning: 0,
	},
	{
		countryId,
		name: `Otto Pérez Molina`,
		tookOffice: new Date(`14 January 2012`),
		leftOffice: new Date(`3 September 2015`),
		party: `Patriotic Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Álvaro Colom`,
		tookOffice: new Date(`14 January 2008`),
		leftOffice: new Date(`14 January 2012`),
		party: `National Unity of Hope`,
		leaning: 0,
	},
	{
		countryId,
		name: `Óscar Berger`,
		tookOffice: new Date(`14 January 2004`),
		leftOffice: new Date(`14 January 2008`),
		party: `National Solidarity Party/Grand National Alliance`,
		leaning: 0,
	},
	{
		countryId,
		name: `Alfonso Portillo`,
		tookOffice: new Date(`14 January 2000`),
		leftOffice: new Date(`14 January 2004`),
		party: `Guatemalan Republican Front`,
		leaning: 0,
	},
	{
		countryId,
		name: `Álvaro Arzú`,
		tookOffice: new Date(`14 January 1996`),
		leftOffice: new Date(`14 January 2000`),
		party: `National Advancement Party / Unionist Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ramiro de León`,
		tookOffice: new Date(`6 June 1993`),
		leftOffice: new Date(`14 January 1996`),
		party: `Independent`,
		leaning: 0,
	},
	{
		countryId,
		name: `Gustavo Espina`,
		tookOffice: new Date(`1 June 1993`),
		leftOffice: new Date(`5 June 1993`),
		party: `Solidarity Action Movement`,
		leaning: 0,
	},
	{
		countryId,
		name: `Jorge Serrano`,
		tookOffice: new Date(`14 January 1991`),
		leftOffice: new Date(`1 June 1993`),
		party: `Solidarity Action Movement`,
		leaning: 0,
	},
	{
		countryId,
		name: `Vinicio Cerezo`,
		tookOffice: new Date(`14 January 1986`),
		leftOffice: new Date(`14 January 1991`),
		party: `Guatemalan Christian Democrats`,
		leaning: 0,
	},
	{
		countryId,
		name: `Óscar Humberto Mejía Victores`,
		tookOffice: new Date(`8 August 1983`),
		leftOffice: new Date(`14 January 1986`),
		party: `Military`,
		leaning: 0,
	},
	{
		countryId,
		name: `Efraín Ríos Montt`,
		tookOffice: new Date(`23 March 1982`),
		leftOffice: new Date(`8 August 1983`),
		party: `Military`,
		leaning: 0,
	},
	{
		countryId,
		name: `Fernando Romeo Lucas Garcia`,
		tookOffice: new Date(`1 July 1978`),
		leftOffice: new Date(`23 March 1982`),
		party: `Institutional Democratic Party/Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Kjell Eugenio Laugerud García`,
		tookOffice: new Date(`1 July 1974`),
		leftOffice: new Date(`1 July 1978`),
		party: `National Liberation Movement/Institutional Democratic Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Carlos Arana Osorio`,
		tookOffice: new Date(`1 July 1970`),
		leftOffice: new Date(`1 July 1974`),
		party: `Military/National Liberation Movement`,
		leaning: 0,
	},
	{
		countryId,
		name: `Julio César Méndez Montenegro`,
		tookOffice: new Date(`1 July 1966`),
		leftOffice: new Date(`1 July 1970`),
		party: `Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Enrique Peralta Azurdia`,
		tookOffice: new Date(`31 March 1963`),
		leftOffice: new Date(`1 July 1966`),
		party: `Institutional Democratic Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Miguel Ydígoras Fuentes`,
		tookOffice: new Date(`2 March 1958`),
		leftOffice: new Date(`31 March 1963`),
		party: `National Democratic Reconciliation Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Guillermo Flores Avendaño`,
		tookOffice: new Date(`26 October 1957`),
		leftOffice: new Date(`2 March 1958`),
		party: `Military`,
		leaning: 0,
	},
	{
		countryId,
		name: `Óscar Mendoza Azurdia`,
		tookOffice: new Date(`24 October 1957`),
		leftOffice: new Date(`26 October 1957`),
		party: `Military`,
		leaning: 0,
	},
	{
		countryId,
		name: `Luis Arturo González López`,
		tookOffice: new Date(`27 July 1957`),
		leftOffice: new Date(`24 October 1957`),
		party: `National Liberation Movement`,
		leaning: 0,
	},
	{
		countryId,
		name: `Carlos Castillo Armas`,
		tookOffice: new Date(`8 July 1954`),
		leftOffice: new Date(`26 July 1957`),
		party: `National Liberation Movement`,
		leaning: 0,
	},
	{
		countryId,
		name: `Elfego Hernán Monzón Aguirre`,
		tookOffice: new Date(`29 June 1954`),
		leftOffice: new Date(`8 July 1954`),
		party: `Military`,
		leaning: 0,
	},
	{
		countryId,
		name: `Carlos Enrique Díaz de León`,
		tookOffice: new Date(`27 June 1954`),
		leftOffice: new Date(`28 June 1954`),
		party: `Military`,
		leaning: 0,
	},
	{
		countryId,
		name: `Jacobo Árbenz`,
		tookOffice: new Date(`15 March 1951`),
		leftOffice: new Date(`27 June 1954`),
		party: `Revolutionary Action Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Juan José Arévalo`,
		tookOffice: new Date(`15 March 1945`),
		leftOffice: new Date(`15 March 1951`),
		party: `Revolutionary Action Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Revolutionary Government Junta`,
		tookOffice: new Date(`20 October 1944`),
		leftOffice: new Date(`15 March 1945`),
		party: `Military`,
		leaning: 0,
	},
	{
		countryId,
		name: `Juan Federico Ponce Vaides`,
		tookOffice: new Date(`4 July 1944`),
		leftOffice: new Date(`20 October 1944`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Jorge Ubico Castañeda`,
		tookOffice: new Date(`14 February 1931`),
		leftOffice: new Date(`4 July 1944`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `José María Reina Andrade`,
		tookOffice: new Date(`2 January 1931`),
		leftOffice: new Date(`14 February 1931`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Lázaro Chacón González`,
		tookOffice: new Date(`26 September 1926`),
		leftOffice: new Date(`2 January 1931`),
		party: `Unionist Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `José María Orellana Pinto`,
		tookOffice: new Date(`10 December 1921`),
		leftOffice: new Date(`26 September 1926`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Carlos Herrera y Luna`,
		tookOffice: new Date(`15 April 1920`),
		leftOffice: new Date(`10 December 1921`),
		party: `Unionist Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Manuel Estrada Cabrera`,
		tookOffice: new Date(`8 February 1898`),
		leftOffice: new Date(`15 April 1920`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `José María Reina Barrios`,
		tookOffice: new Date(`15 March 1892`),
		leftOffice: new Date(`8 February 1898`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Manuel Barillas`,
		tookOffice: new Date(`6 April 1885`),
		leftOffice: new Date(`15 March 1892`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Alejandro M. Sinibaldi`,
		tookOffice: new Date(`2 April 1885`),
		leftOffice: new Date(`5 April 1885`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Justo Rufino Barrios`,
		tookOffice: new Date(`4 June 1873`),
		leftOffice: new Date(`2 April 1885`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Miguel García Granados`,
		tookOffice: new Date(`29 June 1871`),
		leftOffice: new Date(`4 June 1873`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Vicente Cerna Sandoval`,
		tookOffice: new Date(`24 May 1865`),
		leftOffice: new Date(`29 June 1871`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Pedro de Aycinena y Piñol`,
		tookOffice: new Date(`14 April 1865`),
		leftOffice: new Date(`24 May 1865`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Rafael Carrera`,
		tookOffice: new Date(`6 November 1851`),
		leftOffice: new Date(`14 April 1865`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Mariano Peredes`,
		tookOffice: new Date(`1 January 1849`),
		leftOffice: new Date(`6 November 1851`),
		party: `Non-partisan`,
		leaning: 0,
	},
	{
		countryId,
		name: `José Bernardo Escobar`,
		tookOffice: new Date(`28 November 1848`),
		leftOffice: new Date(`1 January 1849`),
		party: `Conservative`,
		leaning: 0,
	},
];