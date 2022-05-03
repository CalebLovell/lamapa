import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDataState } from './DataProvider';

export const TimelineSlider = () => {
	const { year } = useDataState();

	return (
		<div className='flex flex-col items-center justify-center w-1/2 p-4 bg-gray-800 rounded-md'>
			<p className='mb-1 text-base font-medium text-gray-100'>Select a Year</p>
			<Slider min={2000} max={2022} defaultValue={2022} />
		</div>
	);
};
