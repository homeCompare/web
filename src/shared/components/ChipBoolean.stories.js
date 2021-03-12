import React from 'react';

import styled from 'styled-components';

import ChipBoolean from './ChipBoolean';

export default {
  title: 'Chip boolean',
  component: ChipBoolean,
};

const StyledChipBoolean = styled(ChipBoolean)``;

const Template = args => <StyledChipBoolean {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
  value: true,
};
