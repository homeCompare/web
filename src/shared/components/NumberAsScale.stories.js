import React from 'react';

import NumberAsScale from './NumberAsScale';

export default {
  title: 'NumberAsScale',
  component: NumberAsScale,
};

const Template = args => <NumberAsScale {...args} />;
export const Main = Template.bind({});
Main.args = {
  number: 3,
};
