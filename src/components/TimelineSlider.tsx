import { useStore } from '@data/store';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { handleRender } from './Tooltip';
import { useDebouncedCallback } from 'use-debounce';

export const TimelineSlider = () => {
	const setYear = useStore(state => state.setYear);
	const debouncedSetYear = useDebouncedCallback(value => setYear(value), 200);

	return (
		<div className='flex flex-col items-center justify-center p-8 bg-gray-800 rounded-md'>
			{/* <p className='mb-1 text-base font-medium text-gray-100'>Select a Year</p> */}
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
	const years = [1789, 2022];
	for (let i = 1800; i <= 2022; i += 30) {
		years.push(i);
	}
	const asdf = years.map(year => [
		year,
		{
			label: <p className=''>{year}</p>,
			style: {
				color: `red`,
			},
		},
	]);
	const marks = Object.fromEntries(asdf);
	return marks;
};
