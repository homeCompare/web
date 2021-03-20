import React from 'react';

import {Flipped} from 'react-flip-toolkit';
import PropTypes from 'prop-types';

import ImageGallery from '@/shared/components/ImageGallery';

import {Description} from '../ListItem/ListItem.styled';

import {StyledExpandedListItem, ExpandedListItemContent, ExpandedAvatar, AdditionalContent, AnimatedInFlipped, StyledCardImage} from './ExpandedListItem.styled';

const ExpandedListItem = ({index, onClick, createCardFlipId, listData}) => {
  console.log(Object.keys(listData).slice(0, 3));
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
                    <img src={listData.images[0]} style={{height: '100%', width: '100%', display: 'block', borderRadius: '100px'}} />
                  )}
                </ExpandedAvatar>
              </Flipped>

              <Description>
                { Object.keys(listData).slice(0, 3).map(i => (
                  <Flipped
                    flipId={`description-${index}-${i}`}
                    stagger="card-content"
                    delayUntil={createCardFlipId(index)}
                  >

                    <h1>{`${i}: ${listData[i]}`}</h1>

                  </Flipped>
                ))}
              </Description>
            </ExpandedListItemContent>
            <AdditionalContent>

              {listData.images?.length && (

                <div style={{width: '100%', height: '100%'}}>
                  <StyledCardImage>
                    <ImageGallery images={listData.images} />
                  </StyledCardImage>
                </div>

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
