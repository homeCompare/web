import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {useRouter} from 'next/router';
import MenuIcon from '@material-ui/icons/Menu';

import {useTranslation} from '@/shared/i18n';
import {Link} from '@/shared/utils/router';
import {IconButton} from '@/shared/components/Button';
import {ShowOnMedium, HideOnMedium} from '@/shared/components/styled';

const MenuUL = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: ${({theme}) => theme.base.header.height + 10}px;
  width: 100%;
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

const MenuLI = styled.li``;

const menuLinkHoverCss = css`
  background-color: ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.white};
`;
const MenuLink = styled(Link)`
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

const MenuWrapper = styled.div`
  ${({isOpen}) => !isOpen && 'display: none;'}
`;

const menu = [
  {
    to: '/',
    label: 'menu_home',
  },
  {
    to: '/list',
    label: 'menu_list',
  },
  {
    to: '/add',
    label: 'menu_add',
  },
  {
    to: '/compare',
    label: 'menu_compare',
  },
  {
    to: '/login',
    label: 'menu_login',
  },
  {
    to: '/logout',
    label: 'menu_logout',
  },
];

const Menu = ({userData}) => {
  const {pathname} = useRouter();
  // take pathame outside
  const {t} = useTranslation();

  // todo: this needs refactor too much repetitve code
  return (
    <MenuUL>
      {userData !== undefined
        ? menu.map((item) => {
          if (item.to !== '/login') {
            return (
              <MenuLI key={item.label}>
                <MenuLink href={item.to} active={pathname === item.to}>{t(item.label)}</MenuLink>
              </MenuLI>

            );
          }
          return null;
        })
        : menu.map((item) => {
          if (item.to !== '/logout') {
            return (
              <MenuLI key={item.label}>
                <MenuLink href={item.to} active={pathname === item.to}>{t(item.label)}</MenuLink>
              </MenuLI>
            );
          }
          return null;
        })}
    </MenuUL>
  );
};

Menu.propTypes = {
  /**
   * user data object.
	*/
  userData: PropTypes.node,
};

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsOpen(false);
    };

    // eslint-disable-next-line no-undef
    document.addEventListener('scroll', onScroll, true);
    return () => {
      // eslint-disable-next-line no-undef
      document.removeEventListener('scroll', onScroll, true);
    };
  }, []);

  return (
    <>
      <HideOnMedium>
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
          <MenuWrapper isOpen={isOpen}>
            <Menu />
          </MenuWrapper>
        </IconButton>
      </HideOnMedium>
      <ShowOnMedium>
        <Menu />
      </ShowOnMedium>
    </>
  );
};

export default HeaderMenu;
