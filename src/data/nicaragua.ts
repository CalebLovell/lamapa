import { HeadOfState } from '@prisma/client';

export const source = `https://www.mapsofworld.com/list-of/presidents-nicaragua/`;

const countryId = 7;

export const nicaragua: Omit<HeadOfState, `id`>[] = [
	{
		countryId,
		name: `Daniel Ortega`,
		tookOffice: new Date(`10 January 2007`),
		leftOffice: new Date(),
		party: `Sandinista National Liberation Front`,
		leaning: 0,
	},
	{
		countryId,
		name: `Enrique Bolaños Geyer`,
		tookOffice: new Date(`10 January 2002`),
		leftOffice: new Date(`10 January 2007`),
		party: `Constitutionalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `José Arnoldo Alemán Lacayo`,
		tookOffice: new Date(`10 January 1997`),
		leftOffice: new Date(`10 January 2002`),
		party: `Constitutionalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Violeta Chamorro`,
		tookOffice: new Date(`25 April 1990`),
		leftOffice: new Date(`10 January 1997`),
		party: `Democratic Union of Liberation`,
		leaning: 0,
	},
	{
		countryId,
		name: `Daniel Ortega`,
		tookOffice: new Date(`10 January 1985`),
		leftOffice: new Date(`25 April 1990`),
		party: `Sandinista National Liberation Front`,
		leaning: 0,
	},
	{
		countryId,
		name: `Junta of National Reconstruction`,
		tookOffice: new Date(`18 July 1979`),
		leftOffice: new Date(`10 January 1985`),
		party: `Multipartisan / Sandinista National Liberation Front`,
		leaning: 0,
	},
	{
		countryId,
		name: `Francisco Urcuyo`,
		tookOffice: new Date(`17 July 1979`),
		leftOffice: new Date(`18 July 1979`),
		party: `Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Anastasio Somoza DeBayle`,
		tookOffice: new Date(`1 December 1974`),
		leftOffice: new Date(`17 July 1979`),
		party: `Military/Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Liberal-Conservative Junta`,
		tookOffice: new Date(`1 May 1972`),
		leftOffice: new Date(`1 December 1974`),
		party: `Nationalist Liberal Party/Social Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Anastasio Somoza DeBayle`,
		tookOffice: new Date(`1 May 1967`),
		leftOffice: new Date(`1 May 1972`),
		party: `Military/Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Lorenzo Guerrero`,
		tookOffice: new Date(`4 August 1966`),
		leftOffice: new Date(`1 May 1967`),
		party: `Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `René Schick`,
		tookOffice: new Date(`1 May 1963`),
		leftOffice: new Date(`3 August 1966`),
		party: `Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Luis Somoza Debayle`,
		tookOffice: new Date(`29 September 1956`),
		leftOffice: new Date(`1 May 1963`),
		party: `Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Anastasio Somoza García`,
		tookOffice: new Date(`21 May 1950`),
		leftOffice: new Date(`29 September 1956`),
		party: `Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Víctor Manuel Román y Reyes`,
		tookOffice: new Date(`15 August 1947`),
		leftOffice: new Date(`6 May 1950`),
		party: `Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Benjamín Lacayo Sacasa`,
		tookOffice: new Date(`26 May 1947`),
		leftOffice: new Date(`15 August 1947`),
		party: `Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Leonardo Argüello Barreto`,
		tookOffice: new Date(`1 May 1947`),
		leftOffice: new Date(`26 May 1947`),
		party: `Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Anastasio Somoza García`,
		tookOffice: new Date(`1 January 1937`),
		leftOffice: new Date(`1 May 1947`),
		party: `Military/Nationalist Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Carlos Alberto Brenes`,
		tookOffice: new Date(`9 June 1936`),
		leftOffice: new Date(`1 January 1937`),
		party: `Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Juan Bautista Sacasa`,
		tookOffice: new Date(`1 January 1933`),
		leftOffice: new Date(`9 June 1936`),
		party: `Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Jose Maria Moncada Tapia`,
		tookOffice: new Date(`1 January 1929`),
		leftOffice: new Date(`1 January 1933`),
		party: `Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Adolfo Díaz`,
		tookOffice: new Date(`14 November 1926`),
		leftOffice: new Date(`1 January 1929`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Emiliano Chamorro Vargas`,
		tookOffice: new Date(`14 March 1926`),
		leftOffice: new Date(`11 November 1926`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Carlos José Solórzano`,
		tookOffice: new Date(`1 January 1925`),
		leftOffice: new Date(`14 March 1926`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Bartolomé Martínez`,
		tookOffice: new Date(`27 October 1923`),
		leftOffice: new Date(`1 January 1925`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Rosendo Chamorro`,
		tookOffice: new Date(`12 October 1923`),
		leftOffice: new Date(`27 October 1923`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Diego Manuel Chamorro`,
		tookOffice: new Date(`1 January 1921`),
		leftOffice: new Date(`12 October 1923`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Emiliano Chamorro Vargas`,
		tookOffice: new Date(`1 January 1917`),
		leftOffice: new Date(`1 January 1921`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Adolfo Díaz`,
		tookOffice: new Date(`9 May 1911`),
		leftOffice: new Date(`1 January 1917`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Juan José Estrada`,
		tookOffice: new Date(`30 August 1910`),
		leftOffice: new Date(`9 May 1911`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Luis Mena`,
		tookOffice: new Date(`27 August 1910`),
		leftOffice: new Date(`30 August 1910`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `José Dolores Estrada`,
		tookOffice: new Date(`20 August 1910`),
		leftOffice: new Date(`27 August 1910`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `José Madriz`,
		tookOffice: new Date(`21 December 1909`),
		leftOffice: new Date(`20 August 1910`),
		party: `Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `José Santos Zelaya`,
		tookOffice: new Date(`25 July 1893`),
		leftOffice: new Date(`21 December 1909`),
		party: `Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Roberto Sacasa`,
		tookOffice: new Date(`1 March 1891`),
		leftOffice: new Date(`11 July 1893`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ignacio Chávez`,
		tookOffice: new Date(`1 January 1891`),
		leftOffice: new Date(`1 March 1891`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Roberto Sacasa`,
		tookOffice: new Date(`5 August 1889`),
		leftOffice: new Date(`1 January 1891`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Evaristo Carazo`,
		tookOffice: new Date(`1 March 1887`),
		leftOffice: new Date(`1 August 1889`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Adán Cárdenas`,
		tookOffice: new Date(`1 March 1883`),
		leftOffice: new Date(`1 March 1887`),
		party: `Conservative Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Joaquín Zavala`,
		tookOffice: new Date(`1 March 1879`),
		leftOffice: new Date(`1 March 1883`),
		party: `Conservative Party`,
		leaning: 0,
	},
];
