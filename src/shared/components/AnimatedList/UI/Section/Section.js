import styled from 'styled-components';
import PropTypes from 'prop-types';
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
justify-content: center;
margin-bottom: 20px;
padding-top: 10px;
 span {
   color: #111;
 
 }
`;

const Sections = ({sectionIcon,
  object, startProp, endProp, sectionName, features}) => {
  return (
    <Section>

      <SectionCard>
        <ButtonWrapper>
          <span type="button">{sectionName}</span>{sectionIcon}
        </ButtonWrapper>
        { Object.keys(object).slice(startProp, endProp).map(i => {
          if (i !== 'freeText' && i !== 'entryDate') {
            return (
              <>
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

              </>
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
  startProp: PropTypes.number,
  endProp: PropTypes.number,
  sectionName: PropTypes.string,
  features: PropTypes.bool,
};

export default Sections;
