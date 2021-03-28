import React, {useState} from 'react';

import {storiesOf} from '@storybook/react';

import CustomSwitch from './CustomSwitch';

const CustomSwitchStateful = () => {
  const [checked, setChecked] = useState(false);
  return <CustomSwitch checked={checked} onChange={() => setChecked(!checked)} />;
};

storiesOf('CustomSwitch', module).add('stateful', () => {
  return <CustomSwitchStateful />;
});
