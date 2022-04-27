// import { MyResponsiveChoropleth } from '@components/Map2';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import(`@components/MyResponsiveChoropleth`), {
	ssr: false,
});

const Home: NextPage = () => {
	return (
		<div style={{ width: `100vw`, height: `100vh` }}>
			{/* <DynamicMap x={500} y={500} /> */}
			<DynamicMap />
		</div>
	);
};

export default Home;
