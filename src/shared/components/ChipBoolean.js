import {memo} from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import CheckedIcon from '@material-ui/icons/Done';
import CrossIcon from '@material-ui/icons/Close';

const HomeAttribute = styled.div`
  text-align: center;
`;

const Label = styled.label`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const ChipBoolean = ({className, label, value}) => {
  return (
    <HomeAttribute className={className}>
      {value ? <CheckedIcon /> : <CrossIcon />}
      <Label>{label}</Label>
    </HomeAttribute>
  );
};

ChipBoolean.propTypes = {
  /**
   * title of chip.
	*/
  label: PropTypes.string.isRequired,
  /**
   * Number of cards to split them evenly.
	*/
  value: PropTypes.bool.isRequired,
  /**
   * string of styling class names (needed for styled-components)
	*/
  className: PropTypes.string,
};

export default memo(ChipBoolean);
