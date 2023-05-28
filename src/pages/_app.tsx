import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from '../styles/base/theme';
import { DefaultSeo } from 'next-seo';
import SEO from '../../seo.config';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Suspense } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={chakraTheme}>
        <Suspense fallback={<p>loading...</p>}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Suspense>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
