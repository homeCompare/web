import styled from 'styled-components';

export const HideOnMedium = styled.div`
  display: flex;
  flex: 1;
  height: inherit;
  justify-content: flex-end;
  ${({ theme }) => theme.media('md', `
    display: none;
  `)}
`;

export const ShowOnMedium = styled.div`
  display: none;
  height: inherit;
  ${({ theme }) => theme.media('md', `
    display: flex;
    flex: 1;
  `)}
`;
