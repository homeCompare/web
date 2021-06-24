import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import * as actions from '@/state/actions';
import {selectUserData} from '@/state/selectors';

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-top: 2px;
`;

const Auth = ({mobile}) => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  let LoginComp = null;

  const Login = () => {
    dispatch(actions.login());
  };

  const Logout = () => {
    dispatch(actions.logout());
  };

  // TODO: refactor this.
  if (mobile && !userData) {
    LoginComp = <div onClick={Login}>Login</div>;
  } else if (mobile && userData) {
    LoginComp = <div onClick={Logout}>Logout</div>;
  } else if (!mobile && !userData) {
    LoginComp = (
      <PersonOutlineIcon
        style={{cursor: 'pointer'}}
        fontSize="large"
        onClick={Login}
      />
    );
  } else if (!mobile && userData) {
    LoginComp = (
      <ExitToAppIcon
        style={{cursor: 'pointer'}}
        fontSize="large"
        onClick={Logout}
      />
    );
  }

  return <LoginWrapper>{LoginComp}</LoginWrapper>;
};

Auth.propTypes = {
  mobile: PropTypes.bool,
};

export default Auth;
