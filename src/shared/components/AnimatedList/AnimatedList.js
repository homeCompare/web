import React, {useState} from 'react';

import {Flipper} from 'react-flip-toolkit';
import styled from 'styled-components';

import ListType from './UI/List/List';

const StyledFlipper = styled(Flipper)`
  && {
    ${({theme}) => theme.media('xs', `
     width: 100%;
     margin-left: 8%;
         `)}
      ${({theme}) => theme.media('md', `
     width: 80%;
     margin: 32px auto;
    `)}
   
 
  }
`;

export const AnimatedList = (homes) => {
  const createCardFlipId = index => `listItem-${index}`;
  const listData = homes.homes || [];
  const [focused, setFocused] = useState(null);
  const clicked = index => {
    if (focused === index) setFocused(null);
    else setFocused(index);
  };
  const rentList = listData.filter(listObj => listObj.type === 'rent');
  const buyList = listData.filter(listObj => listObj.type === 'buy');

  return (
    <StyledFlipper
      flipKey={focused}
      spring={false}
      staggerConfig={{
        card: {
          reverse: focused !== null,
        },
      }}
      decisionData={focused}
    >
      <h4>Rent Homes</h4>
      <ListType
        list={rentList}
        clicked={clicked}
        createCardFlipId={createCardFlipId}
        focused={focused}
      />
      <h4>Buy Homes</h4>
      <ListType
        list={buyList}
        clicked={clicked}
        createCardFlipId={createCardFlipId}
        focused={focused}
      />

    </StyledFlipper>
  );
};

export default AnimatedList;
