import React, {memo} from 'react';

// import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

import {getPriceWithCurrency} from '@/shared/utils/general';
import ImageGallery from '@/shared/components/ImageGallery';

export const HomeCompareCardUL = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  text-align: left;
  padding: 0;
`;

export const HomeCompareCardULRow = styled(HomeCompareCardUL)`
  flex-direction: row;
`;

const StyledBrokenImageIcon = styled(BrokenImageIcon)`
  &&& {
    margin: 0 auto;
    display: flex;
    height: 200px;
    width: 200px;
  }
`;

export const StlyedMainImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const HomeCompareImage = styled.li`
  width: 300px;
  height: 200px;
  border: 1px dashed #eee;
  padding: 5px;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;

  .image-gallery-left-nav .image-gallery-svg,
  .image-gallery-right-nav .image-gallery-svg {
    height: 30px;
    width: 40px;
    opacity: 0.7;
  }

  .image-gallery-slide .image-gallery-image {
    object-fit: cover;
  }

  .image-gallery-image {
    height: 200px;
    object-fit: cover;
  }
`;

export const HomeCompareItem = styled.li`
  height: 50px;
  border: 1px dashed #eee;
  padding: 5px;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  font-weight: ${({$isBold}) => ($isBold ? 'bold' : 'inherit')};

  svg {
    margin: auto;
  }
`;

const priceFields = ['price', 'propertyTax', 'buildingTax'];

const CompareCard = ({fieldsToCompare, ...home}) => (
  <HomeCompareCardUL>
    <HomeCompareImage>
      {home?.images?.length ? (
        <ImageGallery images={home.images} />
      ) : (
        <StyledBrokenImageIcon />
      )}
    </HomeCompareImage>

    {fieldsToCompare.map(key => {
      const value = home[key];
      if (key.includes('is') || key.includes('has')) {
        const BooleanIconComponent = value ? CheckCircleOutlineIcon : RadioButtonUncheckedIcon;
        return (<HomeCompareItem key={key}><BooleanIconComponent /></HomeCompareItem>);
      }
      if (priceFields.includes(key)) {
        return (<HomeCompareItem key={key}>{getPriceWithCurrency(value)}</HomeCompareItem>);
      }
      return (<HomeCompareItem key={key}>{value}</HomeCompareItem>);
    })}
  </HomeCompareCardUL>
);

export default memo(CompareCard);
