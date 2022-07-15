import { useStore } from '@data/store';
import { getLeaningColors, leaningLabels } from '@data/types';

export const MapKey = () => {
	const visible = useStore(state => state.keyVisible);
	const mapColorType = useStore(state => state.mapColorType);
	const test = getLeaningColors(mapColorType);
	const labels = Object.values(leaningLabels);

	if (!visible) return null;
	return (
		<div className='absolute bottom-0 left-2 flex h-2/3 w-36 flex-col rounded-sm p-2'>
			{labels.map((label, index) => (
				<div key={label} className='mt-1 flex h-full items-center'>
					<div className='mr-2 h-full w-1.5' style={{ backgroundColor: test[index] }} />
					<p className='text-sm font-semibold text-black'>{label}</p>
				</div>
			))}
		</div>
	);
};
