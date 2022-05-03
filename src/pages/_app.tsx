import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DataProvider } from '@components/DataProvider';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<DataProvider>
				<Component {...pageProps} />
			</DataProvider>
		</ThemeProvider>
	);
}

export default MyApp;
