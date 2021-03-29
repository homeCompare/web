/* eslint-disable no-unused-vars */
import React, {memo} from 'react';

import PropTypes from 'prop-types';
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
    box-shadow: 0 0 0 14px rgba(0, 0, 0, 0.16);
  }

  .MuiSlider-thumb:hover {
    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.16);
  }
`;

// see possible properties
// https://material-ui.com/components/text-fields/
const Slider = React.forwardRef((props, ref) => (
  <StyledSlider ref={ref} {...props} />
));

Slider.propTypes = {
  /**
   * value of the slider
   */
  value: PropTypes.number.isRequired,
  /**
   * event fn.
   */
  onChange: PropTypes.func,
  /**
   * Show should label above value.
   */
  valueLabelDisplay: PropTypes.oneOf(['on', 'off']),
};

export default memo(Slider);
