import React from 'react';

import {useRouter} from 'next/router';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import {useTranslation} from '@/shared/i18n';
import Auth from '@/shared/components/Login';

import {MenuContainer, MenuLI, MenuUL, MenuLink} from './Drawer.styled';

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
];

export const Menu = ({mobile}) => {
  const {pathname} = useRouter();

  // take pathame outside
  const {t} = useTranslation();

  return (
    <>
      <MenuContainer>
        <MenuUL>
          { menu.map(item => (
            <MenuLI key={item.label}>
              <MenuLink href={item.to} active={pathname === item.to}>{t(item.label)}</MenuLink>
            </MenuLI>
          ))}
          {mobile ? <MenuLI><MenuLink href="/"><Auth mobile /></MenuLink></MenuLI> : null}
        </MenuUL>

      </MenuContainer>
    </>
  );
};

const useStyles = makeStyles({
  list: {
    width: 180,
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Menu mobile />
    </div>
  );

  return (
    <div>
      {['left', 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
