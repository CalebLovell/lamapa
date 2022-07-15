import { format } from 'date-fns';
import { getLeaningColors, HeadOfStateReturn } from '@data/types';
import { useStore } from '@data/store';

type Props = {
	headOfState: HeadOfStateReturn | undefined;
};

export const MapHeader = ({ headOfState }: Props) => {
	const year = useStore(state => state.year);
	const mapColorType = useStore(state => state.mapColorType);

	const formatDate = (date: Date | undefined) => (date ? format(new Date(date), `yyy`) : undefined);

	const color = headOfState ? getLeaningColors(mapColorType)[headOfState.leaning] : `black`;

	return (
		<div className='mt-2 flex w-full flex-col justify-between rounded-md border-2 border-gray-400 bg-gray-200 p-2' style={{ borderColor: color }}>
			<div className='flex items-center justify-between'>
				<p className='mr-2 text-xs font-semibold uppercase tracking-normal text-gray-600 sm:tracking-wide'>
					{headOfState?.party ? headOfState?.party : `Unknown Political Party`}
				</p>
				<p className='text-right text-sm font-bold text-gray-900'>{headOfState?.country ? `${headOfState?.country.name} in ${year}` : year}</p>
			</div>
			<div className='flex items-center justify-between'>
				<p className='mr-2 text-base font-bold text-gray-900 sm:text-lg'>{headOfState?.name ? headOfState?.name : `Unknown Head of State`}</p>
				<p className='pt-0.5 text-xs font-semibold text-gray-800'>
					{headOfState?.tookOffice && headOfState?.leftOffice
						? `${formatDate(headOfState?.tookOffice)}-${formatDate(headOfState?.leftOffice)}`
						: ``}
				</p>
			</div>
		</div>
	);
};
