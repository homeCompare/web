import React from 'react';

import _ from 'lodash';
import {Flipped} from 'react-flip-toolkit';
import PropTypes from 'prop-types';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import AddBoxIcon from '@material-ui/icons/AddBox';

import ImageGallery from '@/shared/components/ImageGallery';

import Sections from '../Section/Section';
import {StyledImage, ExtendedDescription} from '../ListItem/ListItem.styled';

import {StyledExpandedListItem, ExpandedListItemContent, ExpandedAvatar, AdditionalContent, AnimatedInFlipped, StyledCardImage, StyledImageContainer, StyledFreeTextArea, SectionsWrapper} from './ExpandedListItem.styled';

const ExpandedListItem = ({index, onClick, createCardFlipId, listData}) => {
  const propArray = [{
    sectionIcon: <LocationCityIcon />,
    startProp: 0,
    endProp: 6,
    sectionName: 'Location',
  },
  {
    sectionIcon: <MonetizationOnIcon />,
    startProp: 6,
    endProp: 9,
    sectionName: 'Pricing',
  }, {
    sectionIcon: <AddBoxIcon />,
    startProp: 9,
    endProp: 18,
    sectionName: 'Features',
  }];
  const RenderSections = () => {
    return _.times(3, (i) => {
      return (
        <Sections
          sectionIcon={propArray[i].sectionIcon}
          object={listData}
          index={index}
          startProp={propArray[i].startProp}
          endProp={propArray[i].endProp}
          createCardFlipId={createCardFlipId}
          sectionName={propArray[i].sectionName}
        />
      );
    });
  };
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
            </ExpandedListItemContent>
            <ExtendedDescription>
              <SectionsWrapper>
                <RenderSections />
              </SectionsWrapper>
            </ExtendedDescription>

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
                      <h4>{listData.freeText}</h4>
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
  createCardFlipId: PropTypes.func,
  listData: PropTypes.object,
  onClick: PropTypes.func,

};

export default ExpandedListItem;
