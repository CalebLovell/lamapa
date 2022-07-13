import { useStore } from '@data/store';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const TimelineSlider = () => {
	const datetime = useStore(state => state.datetime);

	return (
		<div className='flex flex-col items-center justify-center p-4 bg-gray-800 rounded-md'>
			<p className='mb-1 text-base font-medium text-gray-100'>Select a Year</p>
			<Slider min={2000} max={2022} defaultValue={2022} />
		</div>
	);
};
