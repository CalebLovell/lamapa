import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDataState } from './DataProvider';

export const TimelineSlider = () => {
	const { year } = useDataState();

	return (
		<>
			<p>Select a Year</p>
			<Slider min={2000} max={2022} defaultValue={2022} />
		</>
	);
};
