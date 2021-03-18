import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  direction: ltr;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  ${({theme}) => theme.defaultSizer};
`;
