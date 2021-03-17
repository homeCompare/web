import React, {memo} from 'react';

import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import ImageGallery from 'react-image-gallery';

import {StyledCard, CardImage, StyledCardContent, CardTitle, CardSecondTitle} from './Home.styles';

const Home = ({homeId}) => {
	// todo: move to page getInitialProps.
  const homeItem = useSelector((state) => state.homes.find((home) => home.id === homeId));
  const {city, street, images, price, squareMeter, numberOfRooms} = homeItem || {};

	// const homeKey = [city, street, houseNumber].join(', ');

  const galleryImages =		images
		&& images.map((image) => {
		  return {original: image, thumbnail: image};
		});
  return (
    <StyledCard>
      {!isEmpty(galleryImages) ? (
        <CardImage>
          <ImageGallery items={galleryImages} showPlayButton={false} showFullscreenButton={false} />
        </CardImage>
      ) : null}

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
