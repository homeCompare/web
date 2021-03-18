import React from 'react';

import SplashScreen from './SplashScreen';

export default {
  title: 'SplashScreen',
  component: SplashScreen,
};

const Template = args => (
  <SplashScreen {...args} />
);

export const Main = Template.bind({});
