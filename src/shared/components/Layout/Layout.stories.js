import React from 'react';

import Button from '@/shared/components/Button';
import Layout, {OpenLayout} from './';
import WhiteBox from './WhiteBox';

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

const HeaderMessageBox = args => (
  <div style={{marginTop: args.marginTop}}>
    <WhiteBox>{args.content}</WhiteBox>
  </div>
);
export const Box = HeaderMessageBox.bind({});
Box.args = {
  marginTop: 250,
  content: (
    <div>
      <h2>Content inside box'</h2>
      <Button>test</Button>
    </div>
  ),
};
