import React, {memo} from 'react';

import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeaderBone from '@/shared/components/Header';
import Side from '@/shared/components/Side';
import Footer from '@/shared/components/Footer';
import GlobalCss from '@/shared/style/GlobalCss';
import theme from '@/shared/style/theme';

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  direction: ltr;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${theme.media('md', `
    flex-direction: row;
  `)}
  ${theme.defaultSizer};
`;

const ContentInnerWrapper = styled.section`
  width: 100%;
  flex: 1;
  margin-top: -200px;
  background-color: ${theme.base.backgroundColor};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.size(2)};
  flex: 1;
`;

const Aside = styled.aside`
  width: 100%;
  ${theme.media('md', `
    width: 320px;
  `)}
`;

const Header = props => {
  const userData = useSelector(state => state.user.data);
  return (<HeaderBone {...props} userData={userData} />);
};

export const OpenLayout = ({className, children, hideSide}) => (
  <Container>
    <Header />
    <Content className={className}>
      {children}
      {!hideSide && (
        <Aside>
          <Side />
        </Aside>
      )}
    </Content>
    <Footer />
  </Container>
);

OpenLayout.propTypes = {
  /**
   * React component
	*/
  children: PropTypes.node,
  /**
   * should hide sidebar
	*/
  hideSide: PropTypes.bool,
  /**
   * string of styling class names (needed for styled-components)
	*/
  className: PropTypes.string,
};

Header.propTypes = {
  /**
   * user data object.
	*/
  userData: PropTypes.node,
};

const Layout = ({children, hideSide}) => (
  <Container>
    <Header />
    <Content>
      <ContentInnerWrapper>
        <ColumnWrapper>
          {children}
        </ColumnWrapper>
      </ContentInnerWrapper>
      {!hideSide && (
        <Aside>
          <Side />
        </Aside>
      )}
    </Content>
    <Footer />
    <GlobalCss />
  </Container>
);

Layout.defaultProps = {
  hideSide: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideSide: PropTypes.bool,
};

export default memo(Layout);
