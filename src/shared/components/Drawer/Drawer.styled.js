import styled, {css} from 'styled-components';

import {Link} from '@/shared/utils/router';

export const MenuUL = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: ${({theme}) => theme.base.header.height + 10}px;
  width: 180px;
  margin: 0;
  list-style-type: none;
  background: white;
  margin-bottom: ${({theme}) => theme.size(1)};
  padding: 0;
  ${({theme}) => theme.media('md', `
    width: inherit;
    position: inherit;
    flex-direction: row;
    flex: 1;
    height: 100%;
    margin: 0;
    padding: 0;
  `)}
`;

export const MenuLI = styled.li``;

const menuLinkHoverCss = css`
  background-color: ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.white};
`;
export const MenuLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: ${({theme}) => theme.size(1)};
  padding: ${({theme}) => theme.size(1)};
  color: ${({theme}) => theme.colors.lightGrey};

  ${({theme}) => theme.media('md', `
    padding: 0 ${theme.size(1)};
  `)}

  ${({active}) => active && menuLinkHoverCss}

  transition: all 0.5s ease;
  &:hover {
    ${menuLinkHoverCss}
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
