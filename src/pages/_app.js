import {useEffect} from 'react';
import {ThemeProvider, StyleSheetManager} from 'styled-components';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import rtlcss from 'stylis-rtlcss';

import {useStore, usePersist} from '@/state/store';
// import {appWithTranslation} from '@/shared/i18n';
import GlobalCss from '@/shared/style/GlobalCss';
import theme from '@/shared/style/theme';
import * as gtag from '@/shared/utils/gtag';

export function reportWebVitals({ id, name, label, value }) {
  // report prefromance to GA
  window.gtag('event', name, {
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

const handleRouteChange = url => {
  gtag.pageview(url);
};

const App = ({Component, pageProps, router}) => {
  const store = useStore(pageProps.initialReduxState);
  const persistor = usePersist(store);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const isRTL = false;

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

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  router: PropTypes.any,
};

export default App;
