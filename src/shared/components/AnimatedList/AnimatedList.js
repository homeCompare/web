import React, {useState} from 'react';

import _ from 'lodash';
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
  const propArray = [{
    list: rentList,
    listName: 'Rent Homes',
  }, {
    list: buyList,
    listName: 'Buy Homes',
  }];

  const RenderLists = () => {
    return _.times(2, (i) => {
      return propArray[i].list.length ? (
        <>
          <h3>{propArray[i].listName}</h3>
          <ListType
            list={propArray[i].list}
            clicked={clicked}
            createCardFlipId={createCardFlipId}
            focused={focused}
          />
        </>
      ) : null;
    });
  };

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

      <RenderLists />

    </StyledFlipper>
  );
};

export default AnimatedList;
