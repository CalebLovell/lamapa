import { PageWrapper } from '@components/PageWrapper';
import { InfoPanel } from '@components/InfoPanel';
import { TimelineSlider } from '@components/TimelineSlider';
import dynamic from 'next/dynamic';
import { useHeadsOfState } from '@hooks/useHeadsOfState';
import { useStore } from '@data/store';
import { MapKey } from '@components/MapKey';
import { Header } from '@components/Header';

const DynamicMap = dynamic(() => import(`@components/Map`), {
	ssr: false,
});

const Index = () => {
	const { data: headsOfState } = useHeadsOfState();

	const selectedCountryName = useStore(state => state.selectedCountryName);
	const selectedHeadOfState = headsOfState?.find(x => x.country.name === selectedCountryName);

	return (
		<PageWrapper>
			<div className='flex flex-col items-center h-screen bg-orange-100'>
				<div className='flex flex-col h-full max-w-3xl'>
					<Header />
					<main className='flex flex-col h-full'>
						<div className='relative flex items-center justify-center h-full'>
							<MapKey />
							<div className='h-full'>
								<DynamicMap />
							</div>
						</div>
						<TimelineSlider />
					</main>
				</div>
			</div>
		</PageWrapper>
	);
};

export default Index;

const working = (
	<div className='flex flex-col w-full h-1 max-w-3xl' style={{ minHeight: `inherit` }}>
		<DynamicMap />
		<TimelineSlider />
	</div>
);
