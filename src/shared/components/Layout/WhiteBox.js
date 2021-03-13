import React, {memo} from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentInnerWrapper = styled.section`
  width: 100%;
  flex: 1;
  margin-top: -200px;
  background-color: ${({theme}) => theme.base.backgroundColor};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({theme}) => theme.size(2)};
  flex: 1;
`;

const WhiteBox = memo(({children}) => (
  <ContentInnerWrapper>
    <ColumnWrapper>
      {children}
    </ColumnWrapper>
  </ContentInnerWrapper>
));

WhiteBox.propTypes = {
  /**
   * string / react component to be rendered inside the box.
   * this box is the wrapper of layout child components.
   */
  children: PropTypes.node,
};

export default memo(WhiteBox);
