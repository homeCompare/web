import React from 'react';

import {Flipped} from 'react-flip-toolkit';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch} from 'react-redux';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import {useRouter} from 'next/router';

import * as actions from '@/state/actions';

import {StyledListItem, ListItemContent, Avatar, Description, StyledImage} from './ListItem.styled';

const StyledChip = styled(Chip)`
  && {
    margin-left: 20px;
  }
`;

const shouldFlip = index => (prev, current) => index === prev || index === current;

const ListItem = ({index, onClick, createCardFlipId, listData}) => {
  const router = useRouter();
  console.log(listData);
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
                  ['city', 'street', 'price', 'monthlyPayment', 'entryDate'].map(i => (
                    <Flipped
                      flipId={`description-${index}-${i}`}
                      stagger="card-content"
                      shouldFlip={shouldFlip(index)}
                      delayUntil={createCardFlipId(index)}
                      key={i}
                    >
                      {
                        listData[i] ? <StyledChip label={listData[i]} color="secondary" /> : null
                      }

                    </Flipped>
                  ))
                }
              </div>
              <div style={{marginBottom: '15px', display: 'flex', justifyContent: 'flex-end'}}>
                <EditIcon onClick={() => router.push(`/edit/${listData.id}`)} />
                <CloseIcon onClick={() => onConfirmedRemoveButtonClick(listData.id)} style={{marginLeft: '20px'}} />

              </div>
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
