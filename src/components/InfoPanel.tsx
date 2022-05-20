import { testData } from '@data/data';
import { useDataState } from './DataProvider';

export const InfoPanel = () => {
	const { selectedCountryName, year } = useDataState();
	const selectedHeadOfState = testData.find(x => x.country === selectedCountryName);

	return (
		<div className='flex flex-col items-center justify-center w-full p-4 bg-gray-800 rounded-md'>
			<p className='mb-1 text-base font-medium text-gray-100'>{`${selectedHeadOfState?.country} on ${year}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Head of State: ${selectedHeadOfState?.name}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Political Leaning: ${selectedHeadOfState?.political_leaning}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Start Data: ${selectedHeadOfState?.state_date}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`End Data: ${selectedHeadOfState?.end_date}`}</p>
		</div>
	);
};
