import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StyledTitle = styled.h4`
  font-size: 16px;
  color: grey;
`;

const StyledLabel = styled.label`
`;

const StyledInput = styled.input`
  display: none;

  &,
  &::after,
  &::before,
  & *,
  & *::after,
  & *::before,
  & + ${StyledLabel} {
    box-sizing: border-box;

    &::selection {
      background: none;
    }
  }

  & + ${StyledLabel} {
    outline: 0;
    display: block;
    width: 114px;
    height: 45px;
    position: relative;
    cursor: pointer;
    user-select: none;

    &::after,
    &::before {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
    }

    &::after {
      left: 0;
    }

    &::before {
      display: none;
    }
  }

  &:checked + ${StyledLabel} {
    &::after {
      left: 50%;
    }
  }

  & + ${StyledLabel} {
    overflow: hidden;
    transform: skew(-10deg);
    backface-visibility: hidden;
    transition: all 0.2s ease;
    font-family: sans-serif;
    background: #888;

    &::after,
    &::before {
      transform: skew(10deg);
      display: inline-block;
      transition: all 0.2s ease;
      width: 100%;
      text-align: center;
      position: absolute;
      line-height: 45px;
      font-weight: bold;
      color: #fff;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
    }

    &::after {
      left: 100%;
      content: attr(data-tg-on);
    }

    &::before {
      left: 0;
      content: attr(data-tg-off);
    }

    &:active {
      background: #888;

      &::before {
        left: -10%;
      }
    }
  }

  &:checked + ${StyledLabel} {
    background: #555;

    &::before {
      left: -100%;
    }

    &::after {
      left: 0;
    }

    &:active::after {
      left: 10%;
    }
  }
`;

const SkewedSwitch = (props) => {
  const {checked, onChange} = props;
  return (
    <StyledListItem>
      <StyledInput id="cb5" type="checkbox" checked={checked} onChange={onChange} />
      <StyledLabel htmlFor="cb5" data-tg-off="HomesToBuy" data-tg-on="HomesToRent" />
    </StyledListItem>
  );
};

SkewedSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default SkewedSwitch;
