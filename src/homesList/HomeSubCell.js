import {memo} from 'react';

import styled from 'styled-components';
import {snakeCase} from 'lodash';

import ImageGallery from '@/shared/components/ImageGallery';
import NumberAsScale from '@/shared/components/NumberAsScale';
import ChipBoolean from '@/shared/components/ChipBoolean';
import {getPriceWithCurrency} from '@/shared/utils/general';

const HomeSubRoot = styled.div`
	padding: 0 ${({theme}) => theme.size(1)};
	display: flex;
	flex: 1;
`;

const ScaleWrapper = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
`;

const ScaleLabel = styled.label`
	font-weight: bold;
`;

const StyledScale = styled(NumberAsScale)`
	margin: ${({theme}) => theme.size(1)} 0;
`;

const BooleanFieldsWrapper = styled.div`
	display: flex;
	text-align: center;
	justify-content: space-between;
	width: 95%;
`;

const StyledChipBoolean = styled(ChipBoolean)`
`;

const FreeText = styled.p`
	background: rgba(0,0,0,0.2);
	padding: 5px;
`;

const ChipWrapper = styled.div`
	display: flex;
`;

const Chip = styled.div`
	background-color: #77777754;
	padding: 5px;
	border-radius: 2.5px;
	flex-grow: 0;
	height: 40px;
	margin: 5px;
	display: flex;
	flex-direction: column;
`;

const UpperWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-items: center;
`;

const ChipLabel = styled.label`
	font-weight: ${({bold}) => (bold ? 'bold' : 'normal')};
`;

const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 1;
`;

const HomeSubCell = ({home, t}) => {
  return (
    <>
      <HomeSubRoot>
        <FlexWrapper>
          <ScaleWrapper>
            <ScaleLabel>{t(snakeCase('personalRate'))}</ScaleLabel>
            <StyledScale number={home.personalRate} />

            <ScaleLabel>{t(snakeCase('areaRate'))}</ScaleLabel>
            <StyledScale number={home.areaRate} />
          </ScaleWrapper>

          <UpperWrapper>
            <BooleanFieldsWrapper>
              <StyledChipBoolean label={t(snakeCase('hasAirConditioner'))} value={home.hasAirConditioner} />
              <StyledChipBoolean label={t(snakeCase('hasBlacony'))} value={home.hasBlacony} />
              <StyledChipBoolean label={t(snakeCase('hasGarage'))} value={home.hasGarage} />
              <StyledChipBoolean label={t(snakeCase('isRenovated'))} value={home.isRenovated} />
            </BooleanFieldsWrapper>

            <ChipWrapper>
              <Chip><ChipLabel bold>{t(snakeCase('propertyTax'))}</ChipLabel> {getPriceWithCurrency(home.propertyTax)}</Chip>
              <Chip><ChipLabel bold>{t(snakeCase('buildingTax'))}</ChipLabel> {getPriceWithCurrency(home.buildingTax)}</Chip>
              <Chip><ChipLabel>{t(snakeCase('floor'))}</ChipLabel> {home.floor}</Chip>
              <Chip><ChipLabel>{t(snakeCase('squarMeter'))}</ChipLabel> {home.squarMeter}</Chip>
            </ChipWrapper>
          </UpperWrapper>
        </FlexWrapper>
      </HomeSubRoot>
      {home.freeText && (<FreeText>{home.freeText}</FreeText>)}

      {home?.images?.length && (
        <ImageGallery images={home.images} />
      )}
    </>
  );
};

export default memo(HomeSubCell);
