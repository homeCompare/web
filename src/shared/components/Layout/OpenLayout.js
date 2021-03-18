import React, {memo} from 'react';

import PropTypes from 'prop-types';

import Side from '@/shared/components/Side';

import {Content} from './styled';

const OpenLayout = ({className, children, hideSide}) => (
  <Content className={className}>
    {children}
    {!hideSide && (<Side />)}
  </Content>
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
