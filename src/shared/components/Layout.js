import React, { memo } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '@/shared/components/Header';
import Side from '@/shared/components/Side';
import Footer from '@/shared/components/Footer';
import GlobalCss from '@/shared/style/GlobalCss';
import theme from '@/shared/style/theme';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
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

export const OpenLayout = ({ className, children, hideSide }) => (
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
    <GlobalCss />
  </Container>
);

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
