import React from 'react';

import {Flipped} from 'react-flip-toolkit';
import PropTypes from 'prop-types';

import {Description} from '../ListItem/ListItem.styled';

import {StyledExpandedListItem, ExpandedListItemContent, ExpandedAvatar, AdditionalContent, AnimatedInFlipped} from './ExpandedListItem.styled';

const ExpandedListItem = ({index, onClick, createCardFlipId, listData}) => {
  return (
    <AnimatedInFlipped
      flipId={createCardFlipId(index)}
      stagger="card"
    >
      <StyledExpandedListItem onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <ExpandedListItemContent>
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              delayUntil={createCardFlipId(index)}
            >
              <ExpandedAvatar />
            </Flipped>
            <Description>
              {listData.slice(0, 3).map(i => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  delayUntil={createCardFlipId(index)}
                >
                  <div />
                </Flipped>
              ))}
            </Description>
            <AdditionalContent className="additional-content">
              {listData.slice(0, 3).map(i => (
                <div />
              ))}
            </AdditionalContent>
          </ExpandedListItemContent>
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
