import { PageWrapper } from '@components/PageWrapper';
import { InfoPanel } from '@components/InfoPanel';
import { TimelineSlider } from '@components/TimelineSlider';
import dynamic from 'next/dynamic';
import { useHeadsOfState } from '@hooks/useHeadsOfState';
import { useStore } from '@data/store';

const DynamicMap = dynamic(() => import(`@components/Map`), {
	ssr: false,
});

const Index = () => {
	const { data: headsOfState } = useHeadsOfState();

	const selectedCountryName = useStore(state => state.selectedCountryName);
	const selectedHeadOfState = headsOfState?.find(x => x.country.name === selectedCountryName);

	return (
		<PageWrapper>
			<main className='flex flex-col items-center justify-center h-full'>
				<h1 className='py-4 text-3xl font-medium text-gray-100'>Latin America Political History</h1>
				<div className='w-full mb-4'>
					<TimelineSlider />
				</div>
				<div className='flex justify-center'>
					<div id='map-container' className='w-full h-full'>
						<DynamicMap />
					</div>
					<div className='w-full h-full'>
						<div className='w-full mb-4'></div>
						<div className='w-full'>
							<InfoPanel headOfState={selectedHeadOfState} />
						</div>
					</div>
				</div>
			</main>
		</PageWrapper>
	);
};

export default Index;
