import React, {memo} from 'react';

import styled from 'styled-components';

const Root = styled.div`
  margin-left: 0;
  ${({theme}) => theme.media('md', `
    margin-left: ${theme.size(1)};
  `)}
  text-align: center;
`;

const Wrapper = styled.aside`
  width: 100%;
  ${({theme}) => theme.media('md', `
    width: 320px;
  `)}
`;

const Side = () => (
  <Wrapper>
    <Root>
      side part
    </Root>
  </Wrapper>
);

export default memo(Side);
