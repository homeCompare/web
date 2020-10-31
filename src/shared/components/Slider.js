/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import SliderBone from '@material-ui/core/Slider';
import styled from 'styled-components';

// base design only!
// if you need to add something just override it in your own component
// const CustomStyledInput = styled(Input)``;
const StyledSlider = styled(SliderBone)`
  p {
    margin-bottom: 30px;
  }

  .MuiSlider-thumb.MuiSlider-active {
    box-shadow: 0px 0px 0px 14px rgba(0, 0, 0, 0.16)
  }
  .MuiSlider-thumb:hover {
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.16);
  }
`;

// see possible properties
// https://material-ui.com/components/text-fields/
const Slider = React.forwardRef(({ initialValue, ...props }, ref) => (
  <StyledSlider ref={ref} {...props} />
));

export default memo(Slider);
