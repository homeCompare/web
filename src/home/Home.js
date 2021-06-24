import React, {memo} from 'react';

import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import ImageGallery from '@/shared/components/ImageGallery';
import {selectHomes} from '@/state/selectors';

import {StyledCard, CardImage, StyledCardContent, CardTitle, CardSecondTitle} from './Home.styles';

const EMPTY_OBJECT = {};

const Home = ({homeId}) => {
  const homes = useSelector(selectHomes);
  const homeItem = homes.find(({id}) => id === homeId);

  const {city, street, images, price, squareMeter, numberOfRooms} = homeItem || EMPTY_OBJECT;

  return (
    <StyledCard>
      {images?.length && (
        <CardImage>
          <ImageGallery images={images} showThumbnails />
        </CardImage>
      )}

      <StyledCardContent>
        <CardTitle>{city}</CardTitle>
        <CardSecondTitle>{street}</CardSecondTitle>
        <p>Price {price}$</p>
        <p>Number of rooms: {numberOfRooms}</p>
        <p>Surface {squareMeter}&#13217;</p>
      </StyledCardContent>
    </StyledCard>
  );
};

Home.propTypes = {
  homeId: PropTypes.string,
};

export default memo(Home);
