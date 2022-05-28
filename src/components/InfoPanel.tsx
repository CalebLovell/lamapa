import { useDataState } from './DataProvider';
import { format } from 'date-fns';

export const InfoPanel = ({ headOfState }) => {
	const { year } = useDataState();
	const formatDate = date => (date ? format(new Date(date), `MMM do, yyy`) : undefined);

	return (
		<div className='flex flex-col items-center justify-center w-full p-4 bg-gray-800 rounded-md'>
			<p className='mb-1 text-base font-medium text-gray-100'>{`${headOfState?.country.name} on ${formatDate(year)}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Head of State: ${headOfState?.name}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Political Leaning: ${headOfState?.politicalLeaning}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Start Data: ${formatDate(headOfState?.startDate)}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`End Data: ${formatDate(headOfState?.endDate)}`}</p>
		</div>
	);
};
