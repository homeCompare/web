import React, {useState, memo} from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import SwitchBone from '@material-ui/core/Switch';

// base design only!
// if you need to add something just override it in your own component
// const CustomStyledInput = styled(Input)``;
const StyledSwitchInput = styled(SwitchBone)`
  &&& {
    .Mui-checked {
      color: ${({theme}) => theme.colors.lightGrey};

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

    .MuiSwitch-track {
      background-color: ${({theme}) => theme.colors.thinGrey};
    }
  }
`;

// see possible properties
// https://material-ui.com/components/text-fields/
const SwitchInput = React.forwardRef((props, ref) => {
  const [checked, setChecked] = useState(Boolean(props['checked' || 'initialValue']));

  const onChange = () => {
    setChecked(!checked);
    if (props.onChange) {
      props.onChange(!checked);
    }
  };

  return (
    <>
      {props.label} <StyledSwitchInput {...props} ref={ref} checked={checked} onChange={onChange} />
    </>
  );
});

SwitchInput.propTypes = {
  /**
   * is checked
   */
  // eslint-disable-next-line react/no-unused-prop-types
  checked: PropTypes.bool,
  /**
   * on change event
   */
  onChange: PropTypes.func,
  /**
   * label related to the input
   */
  label: PropTypes.string,
  /**
   * the value the component should start as when first mounted.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  initialValue: PropTypes.bool,
};

export default memo(SwitchInput);
