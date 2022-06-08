import { HeadOfState } from '@prisma/client';

export const source = `https://www.mapsofworld.com/list-of/presidents-colombia/`;

const countryId = 10;

export const colombia: Omit<HeadOfState, `id`>[] = [
	{
		countryId,
		name: `Iván Duque Márquez`,
		tookOffice: new Date(`7 August 2018`),
		leftOffice: new Date(),
		party: `Democratic Centery`,
		leaning: 0,
	},
	{
		countryId,
		name: `Juan Manuel Santos`,
		tookOffice: new Date(`7 August 2010`),
		leftOffice: new Date(`7 August 2018`),
		party: `National Unity`,
		leaning: 0,
	},
	{
		countryId,
		name: `Álvaro Uribe`,
		tookOffice: new Date(`7 August 2002`),
		leftOffice: new Date(`7 August 2010`),
		party: `Colombia First`,
		leaning: 0,
	},
	{
		countryId,
		name: `Andrés Pastrana Arango`,
		tookOffice: new Date(`7 August 1998`),
		leftOffice: new Date(`7 August 2002`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ernesto Samper Pizano`,
		tookOffice: new Date(`7 August 1994`),
		leftOffice: new Date(`7 August 1998`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `César Gaviria`,
		tookOffice: new Date(`7 August 1990`),
		leftOffice: new Date(`7 August 1994`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Virgilio Barco Vargas`,
		tookOffice: new Date(`7 August 1986`),
		leftOffice: new Date(`7 August 1990`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Belisario Betancur Cuartas`,
		tookOffice: new Date(`7 August 1982`),
		leftOffice: new Date(`7 August 1986`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Julio César Turbay Ayala`,
		tookOffice: new Date(`7 August 1978`),
		leftOffice: new Date(`7 August 1982`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Alfonso López Michelsen`,
		tookOffice: new Date(`7 August 1974`),
		leftOffice: new Date(`7 August 1978`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Misael Pastrana Borrero`,
		tookOffice: new Date(`7 August 1970`),
		leftOffice: new Date(`7 August 1974`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Carlos Lleras Restrepo`,
		tookOffice: new Date(`7 August 1966`),
		leftOffice: new Date(`7 August 1970`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Guillermo León Valencia`,
		tookOffice: new Date(`7 August 1962`),
		leftOffice: new Date(`7 August 1966`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Alberto Lleras Camargo`,
		tookOffice: new Date(`7 August 1958`),
		leftOffice: new Date(`7 August 1962`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Military Junta`,
		tookOffice: new Date(`10 May 1957`),
		leftOffice: new Date(`7 August 1958`),
		party: ``,
		leaning: 0,
	},
	{
		countryId,
		name: `Gustavo Rojas Pinilla`,
		tookOffice: new Date(`13 June 1953`),
		leftOffice: new Date(`10 May 1957`),
		party: `National Popular Alliance`,
		leaning: 0,
	},
	{
		countryId,
		name: `Laureano Gómez`,
		tookOffice: new Date(`7 August 1950`),
		leftOffice: new Date(`5 November 1951`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Mariano Ospina Pérez`,
		tookOffice: new Date(`7 August 1946`),
		leftOffice: new Date(`7 August 1950`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Alfonso López Pumarejo`,
		tookOffice: new Date(`7 August 1942`),
		leftOffice: new Date(`7 August 1946`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Eduardo Santos Montejo`,
		tookOffice: new Date(`7 August 1938`),
		leftOffice: new Date(`7 August 1942`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Alfonso López Pumarejo`,
		tookOffice: new Date(`7 August 1934`),
		leftOffice: new Date(`7 August 1938`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Enrique Olaya Herrera`,
		tookOffice: new Date(`7 August 1930`),
		leftOffice: new Date(`7 August 1934`),
		party: `Liberal`,
		leaning: 0,
	},
	{
		countryId,
		name: `Miguel Abadía Méndez`,
		tookOffice: new Date(`7 August 1926`),
		leftOffice: new Date(`7 August 1930`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Pedro Nel Ospina`,
		tookOffice: new Date(`7 August 1922`),
		leftOffice: new Date(`7 August 1926`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Jorge Holguín`,
		tookOffice: new Date(`11 November 1921`),
		leftOffice: new Date(`7 August 1922`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Marco Fidel Suárez`,
		tookOffice: new Date(`7 August 1918`),
		leftOffice: new Date(`11 November 1921`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `José Vicente Concha`,
		tookOffice: new Date(`7 August 1914`),
		leftOffice: new Date(`7 August 1918`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Carlos Eugenio Restrepo`,
		tookOffice: new Date(`7 August 1910`),
		leftOffice: new Date(`7 August 1914`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ramón González Valencia`,
		tookOffice: new Date(`7 August 1909`),
		leftOffice: new Date(`7 August 1910`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Rafael Reyes Prieto`,
		tookOffice: new Date(`7 August 1904`),
		leftOffice: new Date(`27 July 1909`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `José Manuel Marroquín`,
		tookOffice: new Date(`31 July 1900`),
		leftOffice: new Date(`7 August 1904`),
		party: `Conservative`,
		leaning: 0,
	},
	{
		countryId,
		name: `Manuel Antonio Sanclemente`,
		tookOffice: new Date(`7 August 1898`),
		leftOffice: new Date(`31 July 1900`),
		party: `National Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Miguel Antonio Caro`,
		tookOffice: new Date(`18 September 1894`),
		leftOffice: new Date(`7 August 1898`),
		party: `National Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Rafael Núñez Moledo`,
		tookOffice: new Date(`1 April 1886`),
		leftOffice: new Date(`18 September 1894`),
		party: `National Party`,
		leaning: 0,
	},
];