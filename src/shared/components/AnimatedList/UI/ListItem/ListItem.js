import React from 'react';

import {Flipped} from 'react-flip-toolkit';
import PropTypes from 'prop-types';

import {StyledListItem, ListItemContent, Avatar, Description} from './ListItem.styled';

const shouldFlip = index => (prev, current) => index === prev || index === current;

const ListItem = ({index, onClick, createCardFlipId, listData}) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <StyledListItem onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <ListItemContent>
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
              delayUntil={createCardFlipId(index)}
            >
              <Avatar>
                {listData.images?.length && (
                  <img src={listData.images[0]} style={{height: '100%', width: '100%', display: 'block', borderRadius: '100px'}} />
                )}
              </Avatar>
            </Flipped>
            <Description>
              {
                Object.keys(listData).slice(0, 3).map(i => (
                  <Flipped
                    flipId={`description-${index}-${i}`}
                    stagger="card-content"
                    shouldFlip={shouldFlip(index)}
                    delayUntil={createCardFlipId(index)}

                  >
                    <h1>{listData[i]}</h1>
                  </Flipped>
                ))
              }
            </Description>
          </ListItemContent>
        </Flipped>
      </StyledListItem>
    </Flipped>
  );
};

ListItem.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  createCardFlipId: PropTypes.func,
  listData: PropTypes.array,

};

export default ListItem;
