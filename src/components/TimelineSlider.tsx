import { useStore } from '@data/store';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { handleRender } from './Tooltip';
import { useDebouncedCallback } from 'use-debounce';

export const TimelineSlider = () => {
	const setYear = useStore(state => state.setYear);
	const debouncedSetYear = useDebouncedCallback(value => setYear(value), 200);

	return (
		<div className='flex w-full p-6 bg-gray-800 rounded-md'>
			<Slider
				className='mb-2'
				min={1789}
				max={2022}
				marks={createMarks()}
				step={1}
				included={true}
				defaultValue={20}
				handleRender={handleRender}
				onChange={(newYear: number) => debouncedSetYear(newYear)}
				trackStyle={{}}
				handleStyle={
					{
						// borderColor: `blue`,
						// backgroundColor: `black`,
					}
				}
				railStyle={{}}
			/>
		</div>
	);
};

const createMarks = () => {
	const years = [1789, 1830, 1860, 1890, 1920, 1950, 1980, 2022];
	// for (let i = 1820; i <= 2022; i += 30) {
	// 	years.push(i);
	// }
	const asdf = years.map(year => [
		year,
		{
			label: <p className=''>{year}</p>,
			style: {
				color: `white`,
			},
		},
	]);
	const marks = Object.fromEntries(asdf);
	return marks;
};
