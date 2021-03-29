import React from 'react';

import PropTypes from 'prop-types';
import styled, {keyframes, css} from 'styled-components';

const LoaderAnimPink = keyframes`
0% { transform: scale(0.2) rotate(0deg) translate(220px, 0); }
100% { transform: scale(0.2) rotate(1100deg) translate(300px, 0); }

`;
const LoaderAnimYellow = keyframes`
0% { transform: scale(0.2) rotate(0deg) translate(300px, 0); }
100% { transform: scale(0.2) rotate(1100deg) translate(220px, 0); }

`;

const LoaderAnimOrange = keyframes`
  0%,
  70% { transform: scale(0.2) rotate(30deg) translate(0); }
  85% { transform: scale(0.2) rotate(30deg) translate(-300px); }
  100% { transform: scale(0.2) rotate(30deg) translate(0); }
`;

const WrapperLoaderAnim = keyframes`
0% { transform: scale(0) translateY(0); }
10% { transform: scale(1) translateY(20px); }
50%, { transform: scale(1.2) translateY(10px); }
90% { transform: scale(1) translateY(-10px); }
100% { transform: scale(0) translateY(0); }
`;

const SubmitAfterAnim = keyframes`
  0% { transform: scale(1); opacity: 0.3; }
  100% { transform: scale(2); opacity: 0; }
`;

const submitAnim = keyframes`
  0% { transform: scale(1); }

  5%,
  95% { transform: scale(0.7); }
  100% { transform: scale(1); }
`;

const checkAnim = keyframes`
from {
  stroke-dashoffset: 1000;
}

to {
  stroke-dashoffset: 0;
}
`;

const ButtonWrapper = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 21px;
margin-top: 30px;
color: white;
width: 200px;
height: 100px;
padding: 0;
overflow: visible;
filter: url("#goo");

&::selection {
  background: transparent;
}

`;
const SpecialButton = styled.button`
text-transform: uppercase;
letter-spacing: 3px;
position: absolute;
font-size: 22px;
left: 0;
right: 0;
margin: 0 auto;
border: none;
z-index: 2;
width: ${props => (props.checked ? '95px' : '325px')};
height: ${props => (props.checked ? '95px' : '95px')};
background: ${props => (props.disabled ? '' : props.checked ? 'linear-gradient(to right, #ff7b6e 0%,#ff7b6e 100%)' : 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)')};
display: block;
border-radius: 200px;
text-align: center;
color: ${props => (props.checked ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)')};
text-decoration: none;
transition: all 0.7s ease, line-height 0s ease, color 0.4s ease, filter 0.2s ease;
animation: ${props => ((props.checked) ? css`${submitAnim} 4s  cubic-bezier(0.39, 0.575, 0.565, 1) ` : '')};

&::selection {
  background: transparent;
}

&::after {
  content: "";
  z-index: -4;
  width: 100%;
  height: 100%;
  background: ${props => (props.disabled ? '' : 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)')};
  display: block;
  border-radius: 200px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transform: scale(1);
  animation: ${props => (props.checked ? css`${SubmitAfterAnim} 0.5s 4.4s cubic-bezier(0.39, 0.575, 0.565, 1) ` : '')};
}

&::before {
  content: "";
  z-index: -2;
  width: 100%;
  height: 100%;
  background: ${props => (props.disabled ? '' : 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)')};
  display: block;
  border-radius: 200px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.8;
  filter: blur(20px);
  transition: all 0.2s ease;
}

&:active {
  line-height: 460%;
  filter: brightness(0.95);
  transition: all 0s;
}

`;
const LoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: ${props => (props.checked ? css`${WrapperLoaderAnim} 4.2s linear` : '')};
  width: ${props => (props.checked ? '95px' : '')};
  height: ${props => (props.checked ? '95px' : '')};
  transform: ${props => (props.checked ? 'scale(0)' : '')};
`;

const YellowLoader = styled.span`
width: 95px;
height: 95px;
border-radius: 50%;
opacity: ${props => (props.checked ? '1' : '0')};
z-index: 1;
position: absolute;
left: 0;
right: 0;
margin: 0 auto;
background-color: #ffb369;
animation: ${props => (props.checked ? css`${LoaderAnimYellow} 4s 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) ` : '')};
`;

const PinkLoader = styled.span`
width: 95px;
height: 95px;
border-radius: 50%;
opacity: ${props => (props.checked ? '1' : '0')};
z-index: 1;
position: absolute;
left: 0;
right: 0;
margin: 0 auto;
background-color: #ff4272;
animation: ${props => (props.checked ? css`${LoaderAnimPink} 4s cubic-bezier(0.645, 0.045, 0.355, 1) ` : '')};
`;
const OrangeLoader = styled.span`
width: 95px;
height: 95px;
border-radius: 50%;
opacity: ${props => (props.checked ? '1' : '0')};
z-index: 1;
position: absolute;
left: 0;
right: 0;
margin: 0 auto;
background-color: #ff7b6e;
animation: ${props => (props.checked ? css`${LoaderAnimOrange} 4s 0.7s cubic-bezier(0.645, 0.045, 0.355, 1) ` : '')};
transform: scale(0.2) rotate(30deg) translate(0);
`;

const CheckWrapper = styled.div`
position: absolute;
left: 0;
right: 0;
margin: 0 auto;
width: 95px;
height: 95px;
z-index: ${props => (props.checked ? '3' : '-1')};
opacity: 1;

&:svg {
  margin-top: 31px;
  margin-left: 16px;
}
`;

const Polyline = styled.polyline`
fill: none;
stroke: #fff;
stroke-width: 10;
stroke-linecap: round;
stroke-linejoin: round;
stroke-miterlimit: 10;
stroke-dasharray: 1000;
stroke-dashoffset: 1000;
z-index: -1;
animation: ${props => ((props.checked) ? css`${checkAnim} 4s 4.4s ease forwards` : '')};
`;

const CustomButton = (props) => {
  const {children, checked, onClick, disabled} = props;
  return (

    <ButtonWrapper checked={checked} onClick={onClick}>
      <SpecialButton type="submit" checked={checked} disabled={disabled}>
        {children}
      </SpecialButton>
      <LoaderWrapper checked={checked}>
        <YellowLoader checked={checked} />
        <PinkLoader checked={checked} />
      </LoaderWrapper>
      <OrangeLoader checked={checked} />
      <CheckWrapper checked={checked}>
        <svg version="1.1" width="65px" height="38px" viewBox="0 0 64.5 37.4">
          <Polyline points="5,13 21.8,32.4 59.5,5" />
        </svg>
      </CheckWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{pointerEvents: 'none'}}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </ButtonWrapper>

  );
};
CustomButton.propTypes = {
  children: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,

};

export default CustomButton;
