import React from 'react';

import styled from 'styled-components';

import Header, {Logo as LogoBone} from './Header';
import HeaderMenu from './HeaderMenu';

const Wrapper = styled.div`
  height: ${({wrapperHeight}) => wrapperHeight || 30}px;
`;

export default {
  title: 'Header',
  component: Header,
};

const HeaderTemplate = args => <Header {...args} />;
export const Full = HeaderTemplate.bind({});

const HeaderMenuTemplate = ({wrapperHeight, ...args}) => {
  return (<Wrapper wrapperHeight={wrapperHeight}><HeaderMenu {...args} /></Wrapper>);
};
export const Menu = HeaderMenuTemplate.bind({});
Menu.args = {
  wrapperHeight: 54,
  forceShowDev: false,
};

const StyledLogo = styled(LogoBone)`
  font-size: ${({theme}) => theme.size(1.5)};
`;

const LogoTemplate = args => {
  return (<StyledLogo {...args} />);
};
export const Logo = LogoTemplate.bind({});
