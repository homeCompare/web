import React from 'react';

import HomePageComponent from './index';

export default {
  title: 'Pages/Homepage',
  component: HomePageComponent,
};

const Template = () => <HomePageComponent />;

export const HomePage = Template.bind({});
