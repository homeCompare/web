import React from 'react';

import {action} from '@storybook/addon-actions';

import CustomControlsButton from './CustomControlsButton';

export default {
  title: 'ControlButton',
  component: CustomControlsButton,
};

const Template = ({children, ...args}) => <CustomControlsButton {...args} onClick={action('click')}>{children}</CustomControlsButton>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Next',
};
