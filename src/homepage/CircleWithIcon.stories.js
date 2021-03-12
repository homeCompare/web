import React from 'react';

import styled from 'styled-components';
import {action} from '@storybook/addon-actions';

import CircleWithIcon from './CircleWithIcon';

export default {
  title: 'Circle With Icon',
  component: CircleWithIcon,
};

const Template = args => <CircleWithIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: 'CompareIcon',
};
