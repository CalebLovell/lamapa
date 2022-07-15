import { PageWrapper } from '@components/PageWrapper';
import { MapHeader } from '@components/MapHeader';
import { MapTimeline } from '@components/MapTimeline';
import dynamic from 'next/dynamic';
import { useHeadsOfState } from '@hooks/useHeadsOfState';
import { useStore } from '@data/store';
import { MapKey } from '@components/MapKey';
import { Toolbar } from '@components/Toolbar';
import { InfoModal } from '@components/InfoModal';

const DynamicMap = dynamic(() => import(`@components/Map`), {
	ssr: false,
});

const Index = () => {
	const { data: headsOfState } = useHeadsOfState();

	const selectedCountryName = useStore(state => state.selectedCountryName);
	const selectedHeadOfState = headsOfState?.find(x => x.country.name === selectedCountryName);

	return (
		<PageWrapper>
			<div className='flex flex-col items-center h-screen bg-gray-300'>
				<div className='flex flex-col w-full h-full max-w-3xl'>
					<InfoModal />
					<main className='flex flex-col h-full'>
						<div className='relative px-2'>
							<MapHeader headOfState={selectedHeadOfState} />
							<Toolbar />
						</div>
						<div className='relative flex items-center justify-center h-full'>
							<MapKey />
							<div className='h-full'>
								<DynamicMap />
							</div>
						</div>
						<MapTimeline />
					</main>
				</div>
			</div>
		</PageWrapper>
	);
};

export default Index;
