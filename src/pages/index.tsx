import { TimelineSlider } from '@components/TimelineSlider';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import(`@components/Map`), {
	ssr: false,
});

const Home: NextPage = () => {
	return (
		<div className='flex justify-center w-full h-full'>
			<div className='w-10'>
				<TimelineSlider />
			</div>
			<DynamicMap />
		</div>
	);
};

export default Home;
