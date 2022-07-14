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
	const date = new Date(`2018-01-01`);
	const { data: headsOfState } = useHeadsOfState(date);

	const selectedCountryName = useStore(state => state.selectedCountryName);
	const selectedHeadOfState = headsOfState?.find(x => x.country.name === selectedCountryName);

	return (
		<PageWrapper>
			<main className='flex h-full flex-col items-center justify-center'>
				<h1 className='py-4 text-3xl font-medium text-gray-100'>Latin America Political History</h1>
				<div className='flex justify-center'>
					<div id='map-container' className='h-full w-full'>
						<DynamicMap headsOfState={headsOfState} />
					</div>
					<div className='h-full w-full'>
						<div className='mb-4 w-full'>
							<TimelineSlider />
						</div>
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
