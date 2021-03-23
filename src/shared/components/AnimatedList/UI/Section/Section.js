import {useState} from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Flipped} from 'react-flip-toolkit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import {SectionCard, InnerSection, Section, StyledHomeField} from '../ExpandedListItem/ExpandedListItem.styled';

const IconWrapper = styled.div`
display: flex;
margin-top: 5px;
justify-content: flex-start;
`;
const ButtonWrapper = styled.div`
display: flex;
margin-bottom: 20px;
`;

const Sections = ({sectionIcon,
  object, index, startProp, endProp, createCardFlipId, sectionName, features}) => {
  const [showSection, setShowSection] = useState(false);
  return (
    <Section>
      <ButtonWrapper>
        <button type="button" onClick={() => setShowSection(!showSection)}>{sectionName}</button>{sectionIcon}
      </ButtonWrapper>
      <SectionCard>
        { Object.keys(object).slice(startProp, endProp).map(i => {
          if (i !== 'freeText' && i !== 'entryDate' && showSection) {
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

                  {!features ? <StyledHomeField>{object[i]}</StyledHomeField> : null}
                  {
                    features
                      ? ((object[i]) === true)
                        ? <IconWrapper><CheckIcon /></IconWrapper>
                        : (object[i] === false)
                          ? <IconWrapper><CloseIcon /></IconWrapper>
                          : <StyledHomeField>{object[i]}</StyledHomeField>
                      : null
                  }
                </InnerSection>

              </Flipped>
            );
          } return null;
        })}
      </SectionCard>
    </Section>
  );
};

Sections.propTypes = {
  sectionIcon: PropTypes.object,
  object: PropTypes.object,
  index: PropTypes.number,
  startProp: PropTypes.number,
  endProp: PropTypes.number,
  createCardFlipId: PropTypes.func,
  sectionName: PropTypes.string,
  features: PropTypes.bool,
};

export default Sections;
