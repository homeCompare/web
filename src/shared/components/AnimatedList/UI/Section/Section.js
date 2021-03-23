import {useState} from 'react';

import {Flipped} from 'react-flip-toolkit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import {SectionCard, InnerSection, Section, StyledHomeField} from '../ExpandedListItem/ExpandedListItem.styled';

const Sections = ({sectionIcon, object, index, startProp, endProp, createCardFlipId, sectionName, features}) => {
  const [showSection, setShowSection] = useState(false);
  return (
    <Section>
      <div style={{display: 'flex', marginBottom: '20px'}}>
        <button type="button" onClick={() => setShowSection(!showSection)}>{sectionName}</button>{sectionIcon}
      </div>
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
                    features ? ((object[i]) === true)
                      ? <div style={{display: 'flex', marginTop: '5px', justifyContent: 'flex-start'}}><CheckIcon /></div> : (object[i] === false)
                        ? <div style={{display: 'flex', marginTop: '5px', justifyContent: 'flex-start'}}><CloseIcon /></div> : <StyledHomeField>{object[i]}</StyledHomeField>
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

export default Sections;
