import React from 'react';

import {Flipped} from 'react-flip-toolkit';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

import * as actions from '@/state/actions';

import {StyledListItem, ListItemContent, Avatar, Description, StyledImage, StyledTag} from './ListItem.styled';

const shouldFlip = index => (prev, current) => index === prev || index === current;

const ListItem = ({index, onClick, createCardFlipId, listData}) => {
  const dispatch = useDispatch();

  const onConfirmedRemoveButtonClick = (homeId) => {
    dispatch(actions.removeHomeById(homeId));
  };
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
                  <StyledImage src={listData.images[0]} alt="home" />
                )}
              </Avatar>
            </Flipped>
            <Description>
              <div>
                {
                  ['city', 'street', 'price'].map(i => (
                    <Flipped
                      flipId={`description-${index}-${i}`}
                      stagger="card-content"
                      shouldFlip={shouldFlip(index)}
                      delayUntil={createCardFlipId(index)}
                      key={i}
                    >
                      <StyledTag>{listData[i]}</StyledTag>

                    </Flipped>
                  ))
                }
              </div>
              <CloseIcon onClick={() => onConfirmedRemoveButtonClick(listData.id)} />

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
  listData: PropTypes.object,

};

export default ListItem;
