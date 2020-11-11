import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import * as actions from '@/state/actions';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SignIn = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <StyledContainer>
      <Button variant="contained" color="primary" onClick={() => dispatch(actions.facebookLogin())}>
        Login With Facebook
      </Button>
      <Button variant="contained" color="secondary" onClick={() => dispatch(actions.googleLogin())}>
        Login With Google
      </Button>
      <Button variant="contained" color="primary" onClick={() => dispatch(actions.logout())}>
        Logout
      </Button>
    </StyledContainer>
  );
};

export default memo(SignIn);
