import React, {memo} from 'react';

import PropTypes from 'prop-types';

import Header from '@/shared/components/Header';
import Side from '@/shared/components/Side';
import Footer from '@/shared/components/Footer';

import {Container, Content} from './styled';

const OpenLayout = ({className, children, hideSide}) => (
  <Container>
    <Header />
    <Content className={className}>
      {children}
      {!hideSide && (<Side />)}
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

export default memo(OpenLayout);
