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
import FreeTextCard from '../FreeTextCard/FreeTextCard';

import {StyledExpandedListItem, ExpandedListItemContent, ExpandedAvatar, AdditionalContent, AnimatedInFlipped, StyledCardImage, StyledImageContainer, SectionsWrapper} from './ExpandedListItem.styled';

const ExpandedListItem = ({index, onClick, createCardFlipId, listData}) => {
  const propArray = [{
    sectionIcon: <LocationCityIcon />,
    startProp: 0,
    endProp: 6,
    sectionName: 'Location',
    features: true,
  },
  {
    sectionIcon: <MonetizationOnIcon />,
    startProp: 14,
    endProp: 20,
    sectionName: 'Pricing',
    features: true,
  }, {
    sectionIcon: <AddBoxIcon />,
    startProp: 5,
    endProp: 14,
    sectionName: 'Features',
    features: true,
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
          features={propArray[i].features}
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
                  {listData.images?.length
                  && listData.images[0] ? <StyledImage src={listData.images[0]} alt="home" height={500} width={500} /> : null}
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

                </>
              )}
              {listData.freeText ? (
                <FreeTextCard
                  image={listData.images ? listData.images[0] : null}
                  text={listData.freeText}
                />
              ) : null }
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
