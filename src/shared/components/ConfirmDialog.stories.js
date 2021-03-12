import React from 'react';

import {action} from '@storybook/addon-actions';

import ConfirmDialog from './ConfirmDialog';

export default {
  title: 'Confirm Dialog',
  component: ConfirmDialog,
};

const Template = args => <ConfirmDialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  handleClose: action('close modal'),
  handleConfirm: action('confirm clicked'),
  open: true,
  title: 'Confirmation modal',
  content: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
};
