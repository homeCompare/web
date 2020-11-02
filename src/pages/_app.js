import {useEffect} from 'react';
import {ThemeProvider, StyleSheetManager} from 'styled-components';
import NextApp from 'next/app';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import rtlcss from 'stylis-rtlcss';

import {useStore, usePersist} from '@/state/store';
import {appWithTranslation} from '@/shared/i18n';
import GlobalCss from '@/shared/style/GlobalCss';
import theme from '@/shared/style/theme';
import * as gtag from '@/shared/utils/gtag';

const App = ({Component, pageProps, i18nServerInstance, router}) => {
  const store = useStore(pageProps.initialReduxState);
  const persistor = usePersist(store);

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const isRTL = i18nServerInstance?.dir() === 'rtl' || router.asPath?.includes('/he');

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StyleSheetManager {...isRTL ? {stylisPlugins: [rtlcss]} : {}}>
            <>
              <Component {...pageProps} />
              <GlobalCss />
            </>
          </StyleSheetManager>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

App.getInitialProps = async (appContext) => ({
  ...await NextApp.getInitialProps(appContext),
});

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  i18nServerInstance: PropTypes.any,
  router: PropTypes.any,
};

export default appWithTranslation(App);
