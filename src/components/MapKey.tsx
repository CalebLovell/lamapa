import { useStore } from '@data/store';
import { getLeaningColors, leaningLabels } from '@data/types';

export const MapKey = () => {
	const visible = useStore(state => state.keyVisible);
	const mapColorType = useStore(state => state.mapColorType);
	const test = getLeaningColors(mapColorType);
	const labels = Object.values(leaningLabels);

	if (!visible) return null;
	return (
		<div className='absolute bottom-0 flex flex-col p-2 rounded-md left-2 h-2/3 w-36'>
			{labels.map((label, index) => (
				<div key={label} className='flex items-center h-full mt-1'>
					<div className='mr-2 w-1.5 h-full' style={{ backgroundColor: test[index] }} />
					<p className='text-sm font-semibold text-black'>{label}</p>
				</div>
			))}
		</div>
	);
};
