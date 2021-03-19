import React from 'react';

import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import * as actions from '@/state/actions';

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-top: 2px;
`;

const Auth = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.data);

  const Login = async () => {
    await dispatch(actions.facebookLogin());
  };
  const Logout = () => {
    dispatch(actions.logout());
  };

  return (
    <LoginWrapper>
      {!userData ? <PersonOutlineIcon fontSize="large" onClick={Login} />
        : <ExitToAppIcon fontSize="large" onClick={Logout} />}
    </LoginWrapper>
  );
};

export default Auth;
