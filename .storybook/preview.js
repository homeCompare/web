
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {withNextRouter } from 'storybook-addon-next-router';
import {Provider} from 'react-redux';

import theme from '@/shared/style/theme';
import GlobalCss from '@/shared/style/GlobalCss';
import {useStore} from '@/state/store';
import '@/shared/i18n'; // catching the translations for storybook.

// init sb with redux-store and theme provider, next-router.
export const decorators = [
  Story => {
    const store = useStore({});
    return (
      <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalCss />
          <Story />
        </ThemeProvider>
        </Provider>
      </>
    );
  },
  withNextRouter({
    locale: 'en',
  }),
];

export const parameters = {};