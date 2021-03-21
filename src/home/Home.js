import React, {memo} from 'react';

import {useSelector} from 'react-redux';

import ImageGallery from '@/shared/components/ImageGallery';

import {StyledCard, CardImage, StyledCardContent, CardTitle, CardSecondTitle} from './Home.styles';

const Home = ({homeId}) => {
	// todo: move to page getInitialProps.
  const homeItem = useSelector((state) => state.homes.find((home) => home.id === homeId));
  const {city, street, images, price, squareMeter, numberOfRooms} = homeItem || {};

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

export default memo(Home);
