import React, { memo } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  margin-left: 0;
  ${({ theme }) => theme.media('md', `
    margin-left: ${theme.size(1)};
  `)}
  margin-top: ${({ theme }) => theme.size(1)};
  text-align: center;
`;

const Side = () => (
  <Root>
    side part
  </Root>
);

export default memo(Side);
