import React, {memo} from 'react';

import PropTypes from 'prop-types';

import Header from '@/shared/components/Header';
import Side from '@/shared/components/Side';
import Footer from '@/shared/components/Footer';

import WhiteBox from './WhiteBox';
import {Container, Content} from './styled';

const Layout = ({children, hideSide}) => (
  <Container>
    <Header />
    <Content>
      <WhiteBox>
        {children}
      </WhiteBox>
      {!hideSide && (<Side />)}
    </Content>
    <Footer />
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
