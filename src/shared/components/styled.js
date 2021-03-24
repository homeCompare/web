import styled from 'styled-components';

/**
 * this solution isnt good as we still render unused DOM.
 * TODO: look for a way to manage it with hooks.
 */
export const HideOnMedium = styled.div`
  display: flex;
  flex: 1;
  height: inherit;
  justify-content: flex-end;
`;

export const ShowOnMedium = styled.div`
  height: inherit;
  display: flex;
  flex: 1;
`;
