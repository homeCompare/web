import React from 'react';

import {Flipped} from 'react-flip-toolkit';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';

import {deleteHomeFromDb} from '@/shared/utils/db';
import * as actions from '@/state/actions';

import {StyledChip, StyledListItem, ListItemContent, Avatar, Description, StyledImage, IconsWrapper, TagsWrapper} from './ListItem.styled';

const shouldFlip = index => (prev, current) => index === prev || index === current;

const ListItem = ({index, onClick, createCardFlipId, listData}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const onConfirmedRemoveButtonClick = async (homeId, userId) => {
    dispatch(actions.removeHomeById(homeId));
    if (user) await deleteHomeFromDb(homeId);
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
                {listData.images?.length
                  && listData.images[0] ? <StyledImage src={listData.images[0]} alt="home" width={500} height={500} /> : null}
              </Avatar>
            </Flipped>
            <Description>
              <TagsWrapper>
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
              </TagsWrapper>
              <IconsWrapper>
                <EditIcon onClick={() => router.push(`/edit/${listData.id}`)} />
                <CloseIcon onClick={() => onConfirmedRemoveButtonClick(listData.id, user ? user.id : null)} style={{marginLeft: '20px'}} />
              </IconsWrapper>
            </Description>
          </ListItemContent>
        </Flipped>
      </StyledListItem>
    </Flipped>
  );
};

ListItem.propTypes = {
  index: PropTypes.string,
  onClick: PropTypes.func,
  createCardFlipId: PropTypes.func,
  listData: PropTypes.object,

};

export default ListItem;
