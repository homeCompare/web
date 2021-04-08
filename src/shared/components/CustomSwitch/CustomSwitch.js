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
    width: 74px;
    height: 32px;
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
    padding: 2px;
    transition: all 0.2s ease;
    font-family: sans-serif;
    perspective: 100px;

    &::after,
    &::before {
      display: inline-block;
      transition: all 0.4s ease;
      width: 100%;
      text-align: center;
      position: absolute;
      line-height: 32px;
      font-weight: bold;
      color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      backface-visibility: hidden;
      border-radius: 4px;
    }

    &::after {
      content: attr(data-tg-on);
      background: #444;
      transform: rotateY(-180deg);
    }

    &::before {
      background: ${({theme}) => theme.colors.coolBlack};
      content: attr(data-tg-off);
    }

    &:active::before {
      transform: rotateY(-20deg);
    }
  }

  &:checked + ${StyledLabel} {
    &::before {
      transform: rotateY(180deg);
    }

    &::after {
      transform: rotateY(0);
      left: 0;
      background: ${({theme}) => theme.colors.lightGrey};
    }

    &:active::after {
      transform: rotateY(20deg);
    }
  }
`;

const CustomSwitch = (props) => {
  const {checked, onChange, blank} = props;
  return (
    <StyledListItem>
      <StyledTitle>{blank ? '' : 'Rent or Buy'}</StyledTitle>
      <StyledInput id="cb5" type="checkbox" checked={checked} onChange={onChange} />
      <StyledLabel htmlFor="cb5" data-tg-off="Buy" data-tg-on="Rent" />
    </StyledListItem>
  );
};

CustomSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CustomSwitch;
