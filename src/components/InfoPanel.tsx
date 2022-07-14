import { format } from 'date-fns';
import { HeadOfStateReturn, leaningLabels } from '@data/types';
import { useStore } from '@data/store';

type Props = {
	headOfState: HeadOfStateReturn | undefined;
};

export const InfoPanel = ({ headOfState }: Props) => {
	const year = useStore(state => state.year);

	const formatDate = (date: Date | undefined) => (date ? format(new Date(date), `MMM do, yyy`) : undefined);

	return (
		<div className='flex flex-col items-center justify-center p-4 bg-gray-800 rounded-md w-96'>
			<p className='mb-1 text-base font-medium text-gray-100'>{`${headOfState?.country.name} in ${year}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Head of State: ${headOfState?.name}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Political Party: ${headOfState?.party}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Political Leaning: ${
				leaningLabels[headOfState?.leaning ? headOfState?.leaning : 0]
			}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`Start Data: ${formatDate(headOfState?.tookOffice)}`}</p>
			<p className='mb-1 text-base font-medium text-gray-100'>{`End Data: ${formatDate(headOfState?.leftOffice)}`}</p>
		</div>
	);
};
