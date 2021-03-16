import React, {useState} from 'react';

import {storiesOf} from '@storybook/react';

import CustomButton from './CustomButton';

export default {
  title: 'CustomButton',
  component: CustomButton,
};

const CustomButtonStateful = () => {
  const [checked, setChecked] = useState(false);
  return <CustomButton checked={checked} onClick={() => setChecked(!checked)}>Submit</CustomButton>;
};

storiesOf('CustomButton', module).add('stateful', () => {
  return <CustomButtonStateful />;
});
