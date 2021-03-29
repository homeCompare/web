import React from 'react';

import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledControlButton = styled.a`
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }

  display: inline-block;
  margin-top: 40px;
  font-family: 'Heebo', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  line-height: 20px;
  color: #fff;
  position: relative;
  text-shadow: 0 0 1px #bf4c28;

  &::before {
    content: '';
    display: inline-block;
    height: 40px;
    position: absolute;
    bottom: -1px;
    left: 10px;
    right: 10px;
    z-index: -1;
    border-radius: 32px;
    filter: blur(14px) brightness(0.9);
    transform-style: preserve-3d;
    transition: all 0.3s ease-out;
  }

  span {
    background: linear-gradient(136deg, rgb(242, 113, 33) 0%, rgb(233, 64, 87) 40%, rgb(138, 35, 135) 100%);
    display: inline-block;
    padding: 16px 20px;
    border-radius: 50px;
    position: relative;
    z-index: 2;
    will-change: transform, filter;
    transform-style: preserve-3d;
    transition: all 0.3s ease-out;
    transform: scale(0.9);
  }

  &:focus {
    color: #fff;
  }

  &:hover {
    color: #fff;

    span {
      filter: brightness(0.85) contrast(1.2);
      transform: scale(0.82);
    }

    &::before {
      bottom: 3px;
      filter: blur(6px) brightness(0.8);
    }
  }

  &:active span {
    filter: brightness(0.75) contrast(1.7);
  }

  &.pop-onhover {
    span {
      border-radius: 4px;
    }

    &::before {
      opacity: 0;
      bottom: 10px;
    }

    &:hover {
      &::before {
        bottom: -7px;
        opacity: 1;
        filter: blur(16px);
      }

      span {
        // transform: scale(1.03);
        transform: scale(1);
      }

      &:active {
        span {
          filter: brightness(1) contrast(1);
          transform: scale(1);
          transition: all 0.2s ease-out;
        }

        &::before {
          bottom: 0;
          filter: blur(5px) brightness(0.85);
          transition: all 0.2s ease-out;
        }
      }
    }
  }

`;

const CustomControlsButton = (props) => {
  const {children, onClick} = props;
  return (
    <StyledControlButton onClick={onClick}>
      <span>
        {children}
      </span>
    </StyledControlButton>
  );
};

CustomControlsButton.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func,
};

export default CustomControlsButton;
