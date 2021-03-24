import React from 'react';

import Auth from '@/shared/components/Login';
import Drawer, {Menu} from '@/shared/components/Drawer/Drawer';
import useViewport from '@/shared/hooks/useViewport';
import {ShowOnMedium, HideOnMedium} from '@/shared/components/styled';

const HeaderMenu = () => {
  const {width} = useViewport();
  const vp = 640;

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
            <Drawer />
          </HideOnMedium>
        )}
    </>

  );
};

export default HeaderMenu;
