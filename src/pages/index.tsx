import { PageWrapper } from '@components/PageWrapper';
import { TimelineSlider } from '@components/TimelineSlider';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import(`@components/Map`), {
	ssr: false,
});

const Home = () => {
	return (
		<PageWrapper>
			<main className='flex flex-col items-center justify-center h-full'>
				<h1 className='mt-4 text-3xl font-medium text-gray-100'>Latin America Political History</h1>
				<div className='flex justify-center w-full mt-4'>
					<TimelineSlider />
				</div>
				<div id='map-container' className='w-full h-full'>
					<DynamicMap />
				</div>
			</main>
		</PageWrapper>
	);
};

export default Home;
