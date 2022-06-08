import { HeadOfState } from '@prisma/client';

export const source = `https://www.mapsofworld.com/list-of/presidents-panama/`;

const countryId = 9;

export const panama: Omit<HeadOfState, `id`>[] = [
	{
		countryId,
		name: `Laurentino Cortizo`,
		tookOffice: new Date(`1 July 2019`),
		leftOffice: new Date(),
		party: `Democratic Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Juan Carlos Varela`,
		tookOffice: new Date(`1 July 2014`),
		leftOffice: new Date(`1 July 2019`),
		party: `Panameñista Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ricardo Martinelli`,
		tookOffice: new Date(`1 July 2009`),
		leftOffice: new Date(`1 July 2014`),
		party: `Democratic Change`,
		leaning: 0,
	},
	{
		countryId,
		name: `Martín Torrijos`,
		tookOffice: new Date(`1 September 2004`),
		leftOffice: new Date(`1 July 2009`),
		party: `Democratic Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Mireya Moscoso`,
		tookOffice: new Date(`1 September 1999`),
		leftOffice: new Date(`1 September 2004`),
		party: `Panameñista Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ernesto Pérez Balladares`,
		tookOffice: new Date(`1 September 1994`),
		leftOffice: new Date(`1 September 1999`),
		party: `Democratic Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Guillermo Endara`,
		tookOffice: new Date(`20 December 1989`),
		leftOffice: new Date(`1 September 1994`),
		party: `Panameñista Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Francisco Rodríguez`,
		tookOffice: new Date(`1 September 1989`),
		leftOffice: new Date(`20 December 1989`),
		party: `Democratic Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Manuel Solís Palma`,
		tookOffice: new Date(`26 February 1988`),
		leftOffice: new Date(`1 September 1989`),
		party: `Democratic Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Eric Arturo Delvalle`,
		tookOffice: new Date(`28 September 1985`),
		leftOffice: new Date(`26 February 1988`),
		party: `Republican Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Nicolás Ardito Barletta Vallarino`,
		tookOffice: new Date(`11 October 1984`),
		leftOffice: new Date(`28 September 1985`),
		party: `Democratic Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Jorge Illueca`,
		tookOffice: new Date(`13 February 1984`),
		leftOffice: new Date(`11 October 1984`),
		party: `Independent`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ricardo de la Espriella`,
		tookOffice: new Date(`31 July 1982`),
		leftOffice: new Date(`13 February 1984`),
		party: `Democratic Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Aristides Royo`,
		tookOffice: new Date(`11 October 1978`),
		leftOffice: new Date(`31 July 1982`),
		party: `Democratic Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Demetrio B. Lakas`,
		tookOffice: new Date(`19 December 1969`),
		leftOffice: new Date(`11 October 1978`),
		party: `Independent`,
		leaning: 0,
	},
	{
		countryId,
		name: `Bolivar Urrutia Parrilla`,
		tookOffice: new Date(`12 October 1968`),
		leftOffice: new Date(`18 December 1969`),
		party: `National Guard`,
		leaning: 0,
	},
	{
		countryId,
		name: `Arnulfo Arias`,
		tookOffice: new Date(`1 October 1968`),
		leftOffice: new Date(`11 October 1968`),
		party: `Panameñista Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Marco Aurelio Robles`,
		tookOffice: new Date(`1 October 1964`),
		leftOffice: new Date(`1 October 1968`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Roberto Francisco Chiari Remón`,
		tookOffice: new Date(`1 October 1960`),
		leftOffice: new Date(`1 October 1964`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ernesto de la Guardia`,
		tookOffice: new Date(`1 October 1956`),
		leftOffice: new Date(`1 October 1960`),
		party: `National Patriotic Coalition`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ricardo Arias`,
		tookOffice: new Date(`29 March 1955`),
		leftOffice: new Date(`1 October 1956`),
		party: `National Patriotic Coalition`,
		leaning: 0,
	},
	{
		countryId,
		name: `José Ramón Guizado`,
		tookOffice: new Date(`2 January 1955`),
		leftOffice: new Date(`29 March 1955`),
		party: `National Patriotic Coalition`,
		leaning: 0,
	},
	{
		countryId,
		name: `José Antonio Remón Cantera`,
		tookOffice: new Date(`1 October 1952`),
		leftOffice: new Date(`2 January 1955`),
		party: `National Patriotic Coalition`,
		leaning: 0,
	},
	{
		countryId,
		name: `Alcibíades Arosemena`,
		tookOffice: new Date(`9 May 1951`),
		leftOffice: new Date(`1 October 1952`),
		party: `Authentic Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Arnulfo Arias`,
		tookOffice: new Date(`24 November 1949`),
		leftOffice: new Date(`9 May 1951`),
		party: `Panameñista Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Roberto Francisco Chiari Remón`,
		tookOffice: new Date(`20 November 1949`),
		leftOffice: new Date(`24 November 1949`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Daniel Chanis Pinzón`,
		tookOffice: new Date(`28 July 1949`),
		leftOffice: new Date(`20 November 1949`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Domingo Díaz Arosemena`,
		tookOffice: new Date(`7 August 1948`),
		leftOffice: new Date(`28 July 1949`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Enrique Adolfo Jiménez`,
		tookOffice: new Date(`15 June 1945`),
		leftOffice: new Date(`7 August 1948`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ricardo Adolfo de la Guardia Arango`,
		tookOffice: new Date(`9 October 1941`),
		leftOffice: new Date(`15 June 1945`),
		party: `Independent`,
		leaning: 0,
	},
	{
		countryId,
		name: `Arnulfo Arias`,
		tookOffice: new Date(`1 October 1940`),
		leftOffice: new Date(`9 October 1941`),
		party: `Panameñista Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Augusto Samuel Boyd`,
		tookOffice: new Date(`18 December 1939`),
		leftOffice: new Date(`1 October 1940`),
		party: `National Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ezequiel Fernández`,
		tookOffice: new Date(`16 December 1939`),
		leftOffice: new Date(`18 December 1939`),
		party: ``,
		leaning: 0,
	},
	{
		countryId,
		name: `Juan Demóstenes Arosemena`,
		tookOffice: new Date(`1 October 1936`),
		leftOffice: new Date(`16 December 1939`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Harmodio Arias Madrid`,
		tookOffice: new Date(`5 June 1932`),
		leftOffice: new Date(`1 October 1936`),
		party: `National Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ricardo Joaquín Alfaro Jované`,
		tookOffice: new Date(`16 January 1931`),
		leftOffice: new Date(`5 June 1932`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Harmodio Arias Madrid`,
		tookOffice: new Date(`3 January 1931`),
		leftOffice: new Date(`16 January 1931`),
		party: `National Revolutionary Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Florencio Harmodio Arosemena`,
		tookOffice: new Date(`1 October 1928`),
		leftOffice: new Date(`3 January 1931`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Rodolfo Chiari`,
		tookOffice: new Date(`1 October 1924`),
		leftOffice: new Date(`1 October 1928`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Belisario Porras Barahona`,
		tookOffice: new Date(`1 October 1920`),
		leftOffice: new Date(`1 October 1924`),
		party: `National Liberal Party`,
		leaning: 0,
	},
	{
		countryId,
		name: `Ernesto Tisdel Lefevre`,
		tookOffice: new Date(`30 January 1920`),
		leftOffice: new Date(`1 October 1920`),
		party: `National Liberal Party`,
		leaning: 0,
	},
];
