import React, {useState} from 'react';

import {Flipped} from 'react-flip-toolkit';
import PropTypes from 'prop-types';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import AddBoxIcon from '@material-ui/icons/AddBox';

import ImageGallery from '@/shared/components/ImageGallery';

import {StyledImage, ExtendedDescription} from '../ListItem/ListItem.styled';

import {StyledExpandedListItem, ExpandedListItemContent, ExpandedAvatar, AdditionalContent, AnimatedInFlipped, StyledCardImage, StyledImageContainer, StyledFreeTextArea, StyledHomeField, SectionsWrapper, Section, InnerSection, SectionCard} from './ExpandedListItem.styled';

const ExpandedListItem = ({index, onClick, createCardFlipId, listData}) => {
  const [showLocation, setShowLocation] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
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
                <Section>
                  <div style={{display: 'flex'}}>
                    <button type="button" onClick={() => setShowLocation(!showLocation)}>Location</button><LocationCityIcon />
                  </div>
                  <SectionCard>
                    { Object.keys(listData).slice(0, 5).map(i => {
                      if (i !== 'freeText' && i !== 'entryDate' && i !== 'personalRate' && showLocation) {
                        return (
                          <Flipped
                            flipId={`description-${index}-${i}`}
                            stagger="card-content"
                            delayUntil={createCardFlipId(index)}
                          >
                            <InnerSection>
                              <StyledHomeField>{
                                `${i[0].toUpperCase() + i.slice(1, i.length)}`
                              }
                              </StyledHomeField>
                              <StyledHomeField>{listData[i]}
                              </StyledHomeField>
                            </InnerSection>

                          </Flipped>
                        );
                      } return null;
                    })}
                  </SectionCard>
                </Section>
                <Section>
                  <div style={{display: 'flex'}}>
                    <button type="button" onClick={() => setShowPricing(!showPricing)}>Pricing</button><MonetizationOnIcon />
                  </div>
                  <SectionCard>
                    { Object.keys(listData).slice(5, 10).map(i => {
                      if (i !== 'freeText' && i !== 'entryDate' && i !== 'personalRate' && showPricing) {
                        return (
                          <Flipped
                            flipId={`description-${index}-${i}`}
                            stagger="card-content"
                            delayUntil={createCardFlipId(index)}
                          >
                            <InnerSection>
                              <StyledHomeField>{
                                `${i[0].toUpperCase() + i.slice(1, i.length)}`
                              }
                              </StyledHomeField>
                              <StyledHomeField>{listData[i]}
                              </StyledHomeField>
                            </InnerSection>

                          </Flipped>
                        );
                      } return null;
                    })}
                  </SectionCard>
                </Section>
                <Section>
                  <div style={{display: 'flex'}}>
                    <button type="button" onClick={() => setShowFeatures(!showFeatures)}>Features</button><AddBoxIcon />
                  </div>
                  <SectionCard>
                    { Object.keys(listData).slice(10, 18).map(i => {
                      if (i !== 'freeText' && i !== 'entryDate' && i !== 'personalRate' && showFeatures) {
                        return (
                          <Flipped
                            flipId={`description-${index}-${i}`}
                            stagger="card-content"
                            delayUntil={createCardFlipId(index)}
                          >
                            <InnerSection>
                              <StyledHomeField>{
                                `${i[0].toUpperCase() + i.slice(1, i.length)}`
                              }
                              </StyledHomeField>
                              <StyledHomeField>{listData[i]}
                              </StyledHomeField>
                            </InnerSection>

                          </Flipped>
                        );
                      } return null;
                    })}
                  </SectionCard>
                </Section>
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
  onClick: PropTypes.func,
  createCardFlipId: PropTypes.func,
  listData: PropTypes.array,

};

export default ExpandedListItem;
