import React from 'react';

import styled from 'styled-components';
import propTypes from 'prop-types';
import ButtonBone from '@material-ui/core/Button';

const StyledControlButton = styled(ButtonBone)`
  && {
    text-transform: uppercase;
    color: #E6EAEF;
    background-color: #3F4351;
    background-image: linear-gradient(0deg, #3F4351, #484c5c);
    border-color: #292b34;
    display: inline-block;
    margin: 6px;
    margin-top: 30px;
    font-size: inherit;
    line-height: 1.42;
    padding: 0.35em 1.1em;
    font-weight: normal;
    border-width: 1px;
    border-style: solid;
    border-radius: 1.01em;
    cursor: pointer;
    font-family: "Booster Next FY", "Avenir Next", Avenir, sans-serif;
    user-select: none;
    vertical-align: bottom;
    box-shadow: 0 1px 1px 0 rgb(255 255 255 / 20%) inset;
    &:hover {
      background-color: #1c1e24;
      background-image: linear-gradient(0deg, #1c1e24, #252730);
    }
  }
`;

const CustomControlsButton = (props) => {
  const {children, onClick} = props;
  return (
    <StyledControlButton onClick={onClick}>
      {children}
    </StyledControlButton>
  );
};

CustomControlsButton.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func,
};

export default CustomControlsButton;
