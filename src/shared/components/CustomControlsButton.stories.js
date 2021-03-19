import React from 'react';

import {action} from '@storybook/addon-actions';

import CustomControlsButton from './CustomControlsButton';

export default {
  title: 'ControlButton',
  component: CustomControlsButton,
};

const Template = ({args: {children, ...restOfArgs}}) => (
  <CustomControlsButton {...restOfArgs}>{children}</CustomControlsButton>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Next',
  onClick: action('click'),
};
