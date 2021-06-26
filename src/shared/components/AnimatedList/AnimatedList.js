import React, {useState} from 'react';

import PropTypes from 'prop-types';
import {Flipper} from 'react-flip-toolkit';
import styled from 'styled-components';

import ListType from './UI/List/List';

const StyledFlipper = styled(Flipper)`
  &&& {
    ${({theme}) => theme.media('xs', `
     width: 100%;
         `)}
    ${({theme}) => theme.media('md', `
     width: 80%;
     margin: 32px auto;
    `)}
  }
`;

const EMPTY_ARRAY = [];

export const AnimatedList = ({homes}) => {
  const [focused, setFocused] = useState(null);

  const createCardFlipId = index => `listItem-${index}`;
  const listData = homes.listData || EMPTY_ARRAY;
  const listType = homes.type;

  const clicked = index => {
    setFocused(focused === index ? null : index);
  };

  return (
    <StyledFlipper
      applyTransformOrigin
      flipKey={focused}
      spring={false}
      staggerConfig={{
        card: {
          reverse: focused !== null,
        },
      }}
      decisionData={focused}
    >

      <h3>{listType === 'rent' ? 'Rent Homes' : 'Buy Homes'}</h3>
      <ListType
        list={listData}
        clicked={clicked}
        createCardFlipId={createCardFlipId}
        focused={Boolean(focused)}
      />

    </StyledFlipper>
  );
};

AnimatedList.propTypes = {
  homes: PropTypes.object,
};

export default AnimatedList;
