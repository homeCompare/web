import React, {useState} from 'react';

import {action} from '@storybook/addon-actions';

import Slider from './Slider';

export default {
  title: 'Input/Slider',
  component: Slider,
};

const Template = args => (
  <div style={{margin: 20, marginTop: 40}}><Slider value={5} {...args} /></div>
);
export const Main = Template.bind({});
Main.args = {
  value: 5,
  onChange: action('Slider changed'),
};

const TemplateWithState = () => {
  const [val, setVal] = useState(0);
  return (
    <Template
      value={val}
      onChange={(changeEvent, newValue) => setVal(newValue)}
    />
  );
};
export const WithState = TemplateWithState.bind({});
