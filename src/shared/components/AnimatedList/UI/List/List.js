import React from 'react';

import styled from 'styled-components';

import ExpandedListItem from '../ExpandedListItem/ExpandedListItem';
import ListItem from '../ListItem/ListItem';

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 50vh;
  padding: 0;
  width: 100%;

  li {
    width: 100%;
  }
  li + li {
    margin-top: 16px;
  }
`;

const ListType = ({list, createCardFlipId, focused, clicked}) => {
  return (
    <List>
      {list.map((listObj) => {
        return (
          <li key={listObj.id}>
            {listObj.id === focused ? (
              <ExpandedListItem
                index={focused}
                onClick={clicked}
                createCardFlipId={createCardFlipId}
                listData={listObj}
                key={listObj.id}
              />
            ) : (
              <ListItem
                index={listObj.id}
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
  );
};

export default ListType;
