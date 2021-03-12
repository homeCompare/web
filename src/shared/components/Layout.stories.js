import React from 'react';

import Layout, {OpenLayout} from './Layout';

export default {
  title: 'Layout',
  component: Layout,
};

const OpenTemplate = args => <OpenLayout {...args}>{args.children}</OpenLayout>;
export const Open = OpenTemplate.bind({});
Open.args = {
  children: (<div style={{flex: 1}}>Open</div>),
};

const MainTemplate = args => <Layout {...args}>{args.children}</Layout>;
export const Main = MainTemplate.bind({});
Main.args = {
  children: (<div style={{flex: 1}}>Main</div>),
};
