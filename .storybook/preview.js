
// .storybook/preview.js
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/shared/style/theme';
import GlobalCss from '@/shared/style/GlobalCss';
import {isDev} from '@/shared/config';
// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalCss />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {}