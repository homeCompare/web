import {ThemeProvider, StyleSheetManager} from 'styled-components';
import NextApp from 'next/app';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import stylisRTLPlugin from 'stylis-plugin-rtl';
import rtlcss from 'stylis-rtlcss';

import {useStore, usePersist} from '@/state/store';
import {appWithTranslation} from '@/shared/i18n';
import GlobalCss from '@/shared/style/GlobalCss';
import theme from '@/shared/style/theme';

const App = ({Component, pageProps, i18nServerInstance, router}) => {
  const store = useStore(pageProps.initialReduxState);
  const persistor = usePersist(store);

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
