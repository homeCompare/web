import React, {useState} from 'react';

import {Flipper} from 'react-flip-toolkit';
import styled from 'styled-components';

import ExpandedListItem from './UI/ExpandedListItem/ExpandedListItem';
import ListItem from './UI/ListItem/ListItem';

const StyledFlipper = styled(Flipper)`
  && {
    ${({theme}) => theme.media('xs', `
     width: 100%;
     margin-left: 8%;
         `)}
      ${({theme}) => theme.media('md', `
     width: 80%;
     margin: 2rem auto;
    `)}
   
 
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
  width: 100%;

  li {
    width: 100%;
  }
  li + li {
    margin-top: 1rem;
  }
`;

export const AnimatedList = (homes) => {
  const listData = homes.homes || [];
  const createCardFlipId = index => `listItem-${index}`;
  const [focused, setFocused] = useState(null);

  const clicked = index => {
    if (focused === index) setFocused(null);
    else setFocused(index);
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
      <List>
        {listData.map((listObj, index) => {
          return (
            <li key={index}>
              {index === focused ? (
                <ExpandedListItem
                  index={focused}
                  onClick={clicked}
                  createCardFlipId={createCardFlipId}
                  listData={listObj}
                  key={listObj.id}
                />
              ) : (
                <ListItem
                  index={index}
                  onClick={clicked}
                  createCardFlipId={createCardFlipId}
                  listData={listObj}
                  key={listObj.id}
                />
              )}
            </li>
          );
        })}
      </List>
    </StyledFlipper>
  );
};

export default AnimatedList;
