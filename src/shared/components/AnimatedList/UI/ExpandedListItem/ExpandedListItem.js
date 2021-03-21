import React from 'react';

import {Flipped} from 'react-flip-toolkit';
import PropTypes from 'prop-types';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BuildIcon from '@material-ui/icons/Build';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import BusinessIcon from '@material-ui/icons/Business';

import ImageGallery from '@/shared/components/ImageGallery';

import {StyledImage, ExtendedDescription} from '../ListItem/ListItem.styled';

import {StyledExpandedListItem, ExpandedListItemContent, ExpandedAvatar, AdditionalContent, AnimatedInFlipped, StyledCardImage, StyledImageContainer, StyledFreeTextArea} from './ExpandedListItem.styled';

const ExpandedListItem = ({index, onClick, createCardFlipId, listData}) => {
  console.log(listData);
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
                        <>
                          <h3 style={{flex: '1 0 50%'}}>{
                            (i === 'hasAirConditioner')
                              ? (
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                  <h3 style={{marginRight: '10px'}}>Air Conditioner</h3>
                                  <AcUnitIcon />
                                </div>
                              )

                              : (i === 'isRenovated')
                                ? (
                                  <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <h3 style={{marginRight: '10px'}}>Renovated</h3>
                                    <BuildIcon />
                                  </div>
                                )

                                : (i === 'hasGarage') ? (
                                  <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <h3 style={{marginRight: '10px'}}>Garage</h3>
                                    <DriveEtaIcon />
                                  </div>
                                )
                                  : (i === 'hasBalcony') ? (
                                    <div style={{display: 'flex', flexDirection: 'row'}}>
                                      <h3 style={{marginRight: '10px'}}>Balcony</h3>
                                      <BusinessIcon />
                                    </div>
                                  )
                                    : `${i[0].toUpperCase() + i.slice(1, i.length)}`
                          }
                          </h3>
                          <h3>{listData[i]}
                          </h3>
                        </>

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
