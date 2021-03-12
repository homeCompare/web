import React from 'react';

import {action} from '@storybook/addon-actions';

import Switch from './Switch';

export default {
  title: 'Input/Switch',
  component: Switch,
};

const Template = args => (
  <div style={{margin: 20, marginTop: 40}}><Switch {...args} /></div>
);
export const Main = Template.bind({});
Main.args = {
  checked: true,
  onChange: action('Switch changed'),
  label: 'Label',
  initialValue: true,
};
