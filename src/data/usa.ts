import { HeadOfState } from '@prisma/client';

export const source = `https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States`;

export const usa: Omit<HeadOfState, `id`>[] = [
	{
		countryId: 1,
		name: `George Washington`,
		party: `Unaffiliated`,
		leaning: 0,
		tookOffice: new Date(`1789-04-30T00:00:00.000Z`),
		leftOffice: new Date(`1797-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `John Adams`,
		party: `Federalist Party`,
		leaning: 0,
		tookOffice: new Date(`1797-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1801-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Thomas Jefferson`,
		party: `Democratic-Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1801-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1809-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `James Madison`,
		party: `Democratic-Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1809-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1817-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `James Monroe`,
		party: `Democratic-Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1817-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1825-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `John Quincy Adams`,
		party: `Democratic-Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1825-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1829-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Andrew Jackson`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1829-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1837-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Martin Van Buren`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1837-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1841-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `William Henry Harrison`,
		party: `Whig Party`,
		leaning: 0,
		tookOffice: new Date(`1841-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1841-04-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `John Tyler`,
		party: `Whig Party`,
		leaning: 0,
		tookOffice: new Date(`1841-04-04T00:00:00.000Z`),
		leftOffice: new Date(`1845-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `James K. Polk`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1845-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1849-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Zachary Taylor`,
		party: `Whig Party`,
		leaning: 0,
		tookOffice: new Date(`1849-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1850-07-09T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Millard Fillmore`,
		party: `Whig Party`,
		leaning: 0,
		tookOffice: new Date(`1850-07-09T00:00:00.000Z`),
		leftOffice: new Date(`1853-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Franklin Pierce`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1853-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1857-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `James Buchanan`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1857-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1861-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Abraham Lincoln`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1861-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1865-04-15T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Andrew Johnson`,
		party: `National Union Party`,
		leaning: 0,
		tookOffice: new Date(`1865-04-15T00:00:00.000Z`),
		leftOffice: new Date(`1869-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Ulysses S. Grant`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1869-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1877-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Rutherford B. Hayes`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1877-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1881-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `James A. Garfield`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1881-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1881-09-19T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Chester A. Arthur`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1881-09-19T00:00:00.000Z`),
		leftOffice: new Date(`1885-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Grover Cleveland`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1885-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1889-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Benjamin Harrison`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1889-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1893-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Grover Cleveland`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1893-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1897-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `William McKinley`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1897-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1901-09-14T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Theodore Roosevelt`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1901-09-14T00:00:00.000Z`),
		leftOffice: new Date(`1909-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `William Howard Taft`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1909-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1913-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Woodrow Wilson`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1913-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1921-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Warren G. Harding`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1921-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1923-08-02T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Calvin Coolidge`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1923-08-02T00:00:00.000Z`),
		leftOffice: new Date(`1929-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Herbert Hoover`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1929-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1933-03-04T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Franklin D. Roosevelt`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1933-03-04T00:00:00.000Z`),
		leftOffice: new Date(`1945-04-12T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Harry S. Truman`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1945-04-12T00:00:00.000Z`),
		leftOffice: new Date(`1953-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Dwight D. Eisenhower`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1953-01-20T00:00:00.000Z`),
		leftOffice: new Date(`1961-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `John F. Kennedy`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1961-01-20T00:00:00.000Z`),
		leftOffice: new Date(`1963-11-22T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Lyndon B. Johnson`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1963-11-22T00:00:00.000Z`),
		leftOffice: new Date(`1969-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Richard Nixon`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1969-01-20T00:00:00.000Z`),
		leftOffice: new Date(`1974-08-09T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Gerald Ford`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1974-08-09T00:00:00.000Z`),
		leftOffice: new Date(`1977-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Jimmy Carter`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1977-01-20T00:00:00.000Z`),
		leftOffice: new Date(`1981-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Ronald Reagan`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1981-01-20T00:00:00.000Z`),
		leftOffice: new Date(`1989-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `George H. W. Bush`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`1989-01-20T00:00:00.000Z`),
		leftOffice: new Date(`1993-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Bill Clinton`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`1993-01-20T00:00:00.000Z`),
		leftOffice: new Date(`2001-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `George W. Bush`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`2001-01-20T00:00:00.000Z`),
		leftOffice: new Date(`2009-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Barack Obama`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`2009-01-20T00:00:00.000Z`),
		leftOffice: new Date(`2017-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Donald Trump`,
		party: `Republican Party`,
		leaning: 0,
		tookOffice: new Date(`2017-01-20T00:00:00.000Z`),
		leftOffice: new Date(`2021-01-20T00:00:00.000Z`),
	},
	{
		countryId: 1,
		name: `Joe Biden`,
		party: `Democratic Party`,
		leaning: 0,
		tookOffice: new Date(`2021-01-20T00:00:00.000Z`),
		leftOffice: new Date(),
	},
];