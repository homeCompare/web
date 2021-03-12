import React from 'react';
import styled from 'styled-components';

import PublicIcon from '@material-ui/icons/Public';

import Button, {IconButton} from '@/shared/components/Button';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
  subcomponents: { IconButton },
  decorators: [withKnobs],
};

const StyledIconButton = styled(IconButton)`
  width: 50px;
  height: 50px;
  font-size: 14px;
`;

const Template = ({label, ...args}) => <Button {...args} onClick={action('click')}>{label}</Button>;
const TemplateForIcocns = () => (
  <StyledIconButton
    onClick={action('click')}
    disabled={boolean('disabled', false)}
  >
    <PublicIcon/>
  </StyledIconButton>
);

export const Primary = Template.bind({});
Primary.args = {
  label: text('button label', 'Button'),
  disabled: boolean('disabled', false),
};

export const ForIcons = TemplateForIcocns.bind({});
