import React, {memo} from 'react';

import PropTypes from 'prop-types';

import Side from '@/shared/components/Side';

import WhiteBox from './WhiteBox';
import {Content} from './styled';

const Layout = ({children, hideSide}) => (
  <Content>
    <WhiteBox>
      {children}
    </WhiteBox>
    {!hideSide && (<Side />)}
  </Content>
);

Layout.defaultProps = {
  hideSide: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideSide: PropTypes.bool,
};

export default memo(Layout);
