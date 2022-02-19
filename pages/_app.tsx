import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from '../styles/base/theme';
import { Provider } from 'react-redux';
import { store } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
