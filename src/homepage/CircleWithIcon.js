import React, {memo} from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import CompareIcon from '@material-ui/icons/Compare';
import EuroIcon from '@material-ui/icons/Euro';

const iconSize = 4;
const IconWrapper = styled.div`
  width: ${({theme}) => theme.size(iconSize)};
  height: ${({theme}) => theme.size(iconSize)};
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.darkGrey};
  align-items: center;
  display: flex;
  justify-content: center;
  color: #fff;
`;

const Icons = {
  CompareIcon,
  EuroIcon,
};

const CircleWithIcon = ({className, icon}) => {
  const Component = Icons[icon];
  return (
    <IconWrapper className={className}><Component /></IconWrapper>
  );
};

CircleWithIcon.propTypes = {
  /**
   * Url of icon.
	*/
  icon: PropTypes.oneOf(Object.keys(Icons)),
  /**
   * string of styling class names (needed for styled-components)
	*/
  className: PropTypes.string,
};

export default memo(CircleWithIcon);
