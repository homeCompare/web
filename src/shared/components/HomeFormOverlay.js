import React from 'react';

import {useDispatch} from 'react-redux';

import * as actions from '@/state/actions';
import Switch from '@/shared/components/Switch';

const HomeFormOverlay = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Switch onChange={() => dispatch(actions.setFormType())} />
    </>
  );
};

export default HomeFormOverlay;
