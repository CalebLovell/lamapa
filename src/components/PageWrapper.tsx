import Head from 'next/head';
import PlausibleProvider from 'next-plausible';
import { useRouter } from 'next/router';
import { Header } from './Header';
import { Footer } from './Footer';

interface Props {
	metadata?: {
		title?: string;
		description?: string;
		image?: string;
	};
}

export const PageWrapper: React.FC<Props> = ({ metadata, children }) => {
	const router = useRouter();

	const defaultMetadata = {
		title: ``,
		description: ``,
		image: ``,
		...metadata,
	};
	const { title, description, image } = defaultMetadata;
	const domain = `example`;
	const siteName = ``;

	return (
		<>
			<PlausibleProvider domain={`${domain}.com`}>
				<Head>
					<title>{title}</title>
					<meta name='description' content={description} />
					<meta property='og:title' content={title} />
					<meta property='og:description' content={description} />
					<meta property='og:url' content={`https://www.${domain}.com${router.asPath}`} />
					<link rel='canonical' href={`https://www.${domain}.com${router.asPath}`} />
					<meta property='og:site_name' content={siteName} />
					<meta property='og:type' content='website' />
					<meta property='og:image' content={image} />
					<meta property='og:image:width' content='1200' />
					<meta property='og:image:height' content='627' />
					<meta property='og:image:type' content='image/png' />
					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:site' content='@Caleb__Lovell' />
					<meta name='twitter:title' content={title} />
					<meta name='twitter:image' content={image} />
					<meta name='twitter:description' content={description} />
					<meta name='twitter:image:alt' content={description} />
				</Head>
			</PlausibleProvider>
			<div className='h-full bg-gray-700'>
				<div className='h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' />
				<div className='h-full max-w-6xl mx-auto'>
					<Header />
					<main className='flex flex-col items-center min-h-content'>{children}</main>
					<Footer />
				</div>
			</div>
		</>
	);
};
