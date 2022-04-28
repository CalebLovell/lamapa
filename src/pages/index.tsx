import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import(`@components/Map`), {
	ssr: false,
});

const Home: NextPage = () => {
	return (
		<div style={{ width: `100vw`, height: `100vh` }}>
			<DynamicMap />
		</div>
	);
};

export default Home;
