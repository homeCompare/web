import React from 'react';

import {Flipped} from 'react-flip-toolkit';
import PropTypes from 'prop-types';

import ImageGallery from '@/shared/components/ImageGallery';

import {StyledImage, ExtendedDescription} from '../ListItem/ListItem.styled';

import {StyledExpandedListItem, ExpandedListItemContent, ExpandedAvatar, AdditionalContent, AnimatedInFlipped, StyledCardImage, StyledImageContainer, StyledFreeTextArea} from './ExpandedListItem.styled';

const ExpandedListItem = ({index, onClick, createCardFlipId, listData}) => {
  return (
    <AnimatedInFlipped
      flipId={createCardFlipId(index)}
      stagger="card"
    >
      <StyledExpandedListItem>

        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div>

            <ExpandedListItemContent onClick={() => onClick(index)}>

              <Flipped
                flipId={`avatar-${index}`}
                stagger="card-content"
                delayUntil={createCardFlipId(index)}
              >
                <ExpandedAvatar>
                  {listData.images?.length && (
                    <StyledImage alt="home" src={listData.images[0]} />
                  )}
                </ExpandedAvatar>
              </Flipped>

              <ExtendedDescription>
                { Object.keys(listData).slice(0, 18).map(i => {
                  if (i !== 'freeText' && i !== 'entryDate' && i !== 'personalRate') {
                    return (
                      <Flipped
                        flipId={`description-${index}-${i}`}
                        stagger="card-content"
                        delayUntil={createCardFlipId(index)}
                      >

                        <h3 style={{flex: '1 0 30%'}}>{`${i} : ${listData[i]}`}</h3>

                      </Flipped>
                    );
                  } return null;
                })}
              </ExtendedDescription>
            </ExpandedListItemContent>
            <AdditionalContent>

              {listData.images?.length && (
                <>
                  <StyledImageContainer>
                    <StyledCardImage>
                      <ImageGallery images={listData.images} />
                    </StyledCardImage>
                  </StyledImageContainer>
                  {listData.freeText ? (
                    <StyledFreeTextArea>
                      <h3>{listData.freeText}</h3>
                    </StyledFreeTextArea>
                  ) : null }
                </>

              )}
            </AdditionalContent>
          </div>
        </Flipped>

      </StyledExpandedListItem>
    </AnimatedInFlipped>

  );
};

ExpandedListItem.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  createCardFlipId: PropTypes.func,
  listData: PropTypes.array,

};

export default ExpandedListItem;
