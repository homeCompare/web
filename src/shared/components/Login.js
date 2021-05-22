import React from 'react';

import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import * as actions from '@/state/actions';

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-top: 2px;
`;

const Auth = ({ mobile }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user?.data);
  let LoginComp = null;

  const Login = async () => {
    router.push('/checkout');
  };
  const Logout = () => {
    dispatch(actions.logout());
  };
  if (mobile && !userData) {
    LoginComp = <div onClick={Login}>Login</div>;
  } else if (mobile && userData) {
    LoginComp = <div onClick={Logout}>Logout</div>;
  } else if (!mobile && !userData) {
    LoginComp = (
      <PersonOutlineIcon
        style={{ cursor: 'pointer' }}
        fontSize="large"
        onClick={Login}
      />
    );
  } else if (!mobile && userData) {
    LoginComp = (
      <ExitToAppIcon
        style={{ cursor: 'pointer' }}
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
