import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import(`@components/Map`), {
	ssr: false,
});

const Home: NextPage = () => {
	return (
		<div>
			<DynamicMap />
			<p>Test</p>
		</div>
	);
};

export default Home;
