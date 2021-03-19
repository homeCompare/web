import React, {useState} from 'react';

import {Flipper} from 'react-flip-toolkit';
import styled from 'styled-components';

import ExpandedListItem from './UI/ExpandedListItem/ExpandedListItem';
import ListItem from './UI/ListItem/ListItem';

const StyledFlipper = styled(Flipper)`
  && {
    width: 400px;
  margin: 2rem auto;
  }
`;

const List = styled.ul`
    list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
  li {
    width: 100%;
  }
  li + li {
    margin-top: 1rem;
  }

`;

const AnimatedList = () => {
  const listData = [...Array(7).keys()];
  const createCardFlipId = index => `listItem-${index}`;
  const [focused, setFocused] = useState(null);

  const clicked = (index) => {
    if (focused === index) setFocused(null);
    else setFocused(index);
  };
  return (
    <StyledFlipper
      flipKey={focused}
      spring="gentle"
      staggerConfig={{
        card: {
          reverse: focused !== null,
        },
      }}
      decisionData={focused}
    >
      <List>
        {listData.map(index => {
          return (
            <li key={index}>
              {index === focused ? (
                <ExpandedListItem
                  index={focused}
                  onClick={clicked}
                  createCardFlipId={createCardFlipId}
                  listData={listData}
                />
              ) : (
                <ListItem
                  index={index}
                  key={index}
                  onClick={clicked}
                  createCardFlipId={createCardFlipId}
                  listData={listData}
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
