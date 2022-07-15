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
			{/* <div className='flex items-center h-full' style={{ minHeight: `inherit` }}> */}
			<div className='flex flex-col w-full max-w-3xl p-2 h-96' style={{ minHeight: `inherit` }}>
				<DynamicMap />
				<TimelineSlider />
			</div>
			{/* <div>
					<InfoPanel headOfState={selectedHeadOfState} />
				</div> */}
			{/* </div> */}
		</PageWrapper>
	);
};

export default Index;
