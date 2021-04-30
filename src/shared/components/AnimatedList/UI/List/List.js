import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import ExpandedListItem from '../ExpandedListItem/ExpandedListItem';
import ListItem from '../ListItem/ListItem';

const List = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
padding: 20px;
width: 100%;
${({theme}) => theme.media('xs', `
padding: 0;
overflow: visible;
height: 100%;
`)}
${({theme}) => theme.media('md', `
padding: 20px;
overflow: auto;
height: 100vh;
`)}
li {
  width: 100%;
  ${({theme}) => theme.media('xs', `
  display: flex;
    margin-left: 20px;
  `)}
  ${({theme}) => theme.media('sm', `
  display: flex;
    margin-left: 100px;
  `)}
  ${({theme}) => theme.media('md', `
   width: 100%;
   margin-left: 0;

  `)}
}

li + li {
  ${({theme}) => theme.media('xs', `
    margin-top: 60px;

  `)}
  ${({theme}) => theme.media('md', `
    margin-top: 16px;

  `)}
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

ListType.propTypes = {
  list: PropTypes.array,
  createCardFlipId: PropTypes.func,
  focused: PropTypes.bool,
  clicked: PropTypes.func,
};

export default ListType;
