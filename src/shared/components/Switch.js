import React, { useState, memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SwitchBone from '@material-ui/core/Switch';

// base design only!
// if you need to add something just override it in your own component
// const CustomStyledInput = styled(Input)``;
const StyledSwitchInput = styled(SwitchBone)`
  &&& {
    .Mui-checked {
      color: ${({ theme }) => theme.colors.lightGrey};
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

    .MuiSwitch-track {
      background-color: ${({ theme }) => theme.colors.thinGrey};
    }
  }
`;

// see possible properties
// https://material-ui.com/components/text-fields/
const SwitchInput = React.forwardRef((props, ref) => {
  const [checked, setChecked] = useState(Boolean(props.['value' || 'initialValue']));

  const onChange = () => {
    setChecked(!checked);
    if (props.onChange) {
      props.onChange(!checked);
    }
  };

  return (
    <>
      {props.label} <StyledSwitchInput ref={ref} checked={checked} onChange={onChange} />
    </>
  );
});

SwitchInput.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  initialValue: PropTypes.bool,
};

export default memo(SwitchInput);
