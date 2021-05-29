import React, {useState, useEffect} from 'react';

import {useSelector} from 'react-redux';
import styled, {css} from 'styled-components';
import {useRouter} from 'next/router';
import MenuIcon from '@material-ui/icons/Menu';

import useViewport from '@/shared/hooks/useViewport';
import Auth from '@/shared/components/Login';
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

const MenuLI = styled.li`
`;

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

const MenuContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
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
    to: '/register',
    label: 'Become A Member',
  },
];

const Menu = ({children}) => {
  const user = useSelector(state => state.user.data);
  const {pathname} = useRouter();

  // take pathame outside
  const {t} = useTranslation();

  return (
    <>
      <MenuContainer>
        <MenuUL>
          { menu.map(item => {
            if (user && item.to === '/register') {
              return null;
            }
            return (
              <MenuLI key={item.label}>
                <MenuLink href={item.to} active={pathname === item.to}>{t(item.label)}</MenuLink>
              </MenuLI>
            );
          })}
          {children ? <MenuLI><MenuLink href="/">{children}</MenuLink></MenuLI> : null}
        </MenuUL>

      </MenuContainer>
    </>
  );
};

const HeaderMenu = () => {
  const {width} = useViewport();
  const [isOpen, setIsOpen] = useState(false);
  const vp = 800;
  console.log(width);

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
      {(width > vp) ? (
        <>
          <ShowOnMedium>
            <Menu />
          </ShowOnMedium>
          <Auth />
        </>
      )
        : (
          <HideOnMedium>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon />
              <MenuWrapper isOpen={isOpen}>
                <Menu>
                  <Auth mobile />
                </Menu>
              </MenuWrapper>
            </IconButton>

          </HideOnMedium>
        )}
    </>

  );
};

export default HeaderMenu;
