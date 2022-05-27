import { PageWrapper } from '@components/PageWrapper';
import { InfoPanel } from '@components/InfoPanel';
import { TimelineSlider } from '@components/TimelineSlider';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import(`@components/Map`), {
	ssr: false,
});

const Index = () => {
	return (
		<PageWrapper>
			<main className='flex flex-col items-center justify-center h-full'>
				<h1 className='py-4 text-3xl font-medium text-gray-100'>Latin America Political History</h1>
				<div className='flex justify-center'>
					<div id='map-container' className='w-full h-full'>
						<DynamicMap />
					</div>
					<div className='w-full h-full'>
						<div className='w-full mb-4'>
							<TimelineSlider />
						</div>
						<div className='w-full'>
							<InfoPanel />
						</div>
					</div>
				</div>
			</main>
		</PageWrapper>
	);
};

export default Index;
