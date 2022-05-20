import { testData } from '@data/data';
import { useDataState } from './DataProvider';
import { format } from 'date-fns';

export const InfoPanel = () => {
	const { selectedCountryName, year } = useDataState();
	const selectedHeadOfState = testData.find(x => x.country === selectedCountryName);
	const formatDate = date => (date ? format(new Date(date), `MMM do, yyy`) : undefined);

	return (
		<div className='flex flex-col items-center justify-center w-full p-4 bg-gray-800 rounded-md'>
			<p className='mb-1 text-base font-medium text-gray-100'>{`${selectedHeadOfState?.country} on ${formatDate(year)}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Head of State: ${selectedHeadOfState?.name}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Political Leaning: ${selectedHeadOfState?.political_leaning}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Start Data: ${formatDate(selectedHeadOfState?.start_date)}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`End Data: ${formatDate(selectedHeadOfState?.end_date)}`}</p>
		</div>
	);
};
