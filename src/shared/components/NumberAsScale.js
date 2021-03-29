import {memo} from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';

const sizeByCurrentTier = currentTier => {
  if (currentTier === 0) {
    return '10%';
  }

  if (currentTier === 1) {
    return '55%';
  }

  return '100%';
};

const ScaleRoot = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-bottom: 5px dashed rgba(0, 0, 0, 0.2);
  position: relative;

  &::before {
    content: '';
    width: ${({currentTier}) => sizebycurrenttier(currentTier)};
    height: 100%;
    border-bottom: 5px dashed #333;
    position: absolute;
  }
`;

const Tier = styled.div`
  display: flex;
  position: relative;
  top: -5px;
`;

const NumberAsScale = ({number, className}) => {
  const currentTier = number <= 5 ? 0 : number <= 6 ? 1 : 2;
  return (
    <ScaleRoot currentTier={currentTier} className={className}>
      <Tier><MoodIcon /></Tier>
      <Tier><SentimentSatisfiedIcon /></Tier>
      <Tier><MoodBadIcon /></Tier>
    </ScaleRoot>
  );
};

NumberAsScale.propTypes = {
  /**
   * the value of the scale number between (0 to 10).
	*/
  number: PropTypes.number.isRequired,
  /**
   * string of styling class names (needed for styled-components)
	*/
  className: PropTypes.string,
};

export default memo(NumberAsScale);
