import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DataProvider } from '@components/DataProvider';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<DataProvider>
					<Component {...pageProps} />
				</DataProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
