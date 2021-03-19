import React from 'react';

import {action} from '@storybook/addon-actions';

import AnimatedList from './AnimatedList';

export default {
  title: 'AnimatedList',
  component: AnimatedList,
};

const Template = () => <AnimatedList onClick={action('click')} />;

export const Primary = Template.bind({});
