import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const StyledCard = styled(Card)`
  width: 1200px;
`;

const CardImage = styled.div`
  width: 50%;
  float: left;
  .image-gallery-content {
    margin-left: 20px;
    margin-top: 15px;
  }
  .image-gallery-image {
    border-radius: 1%;
    object-fit: cover;
    width: 100%;
    height: 400px;
    max-height: 400px;
  }
  .image-gallery-slide .image-gallery-image {
    object-fit: cover;
  }
  .image-gallery-thumbnail {
    border: none;
  }
  .image-gallery-thumbnails .image-gallery-thumbnails-container  {
    text-align: left;
  }
  .image-gallery-thumbnail .image-gallery-thumbnail-image {
    border-radius: 5%;
    width: 100px;
    height: 100px;
  }
  .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus {
    border: none;
  }
  .image-gallery-thumbnail:hover {
    border: 0;
  }
  .image-gallery-thumbnail-image {
    object-fit: cover
  }
  .image-gallery-thumbnail + .image-gallery-thumbnail {
    margin-left: 12px;
  }
  .image-gallery-thumbnails {
    padding-top: 12px;
    padding-bottom: 18px;
  }
  .image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg {
    width: 48px;
    height: 70px;
    opacity: 0.5;
  }
  .image-gallery-slides {
    border-radius: 1%;
      max-height: 350px;
  }
`;

const StyledCardContent = styled(CardContent)`
  margin-top: 30px;
  margin-left: 51%;
  color: #67088F;
  font-family: 'Roboto', sans-serif;
  border-bottom: 2px solid whitesmoke;
  margin-right: 20px;
  p {
    &:last-child {
      margin-bottom: 120px;
    }
  }
`;

const CardTitle = styled.h1`
 font-size: 37px;
`;

const CardSecondTitle = styled.h2`
  margin-top: 10px;
  font-size: 27px;
  opacity: 0.4;
`;

const Home = ({homeId}) => {
  // todo: move to page getInitialProps.
  const homeItem = useSelector((state) => state.homes.find((home) => home.id === homeId));
  const { city, street, images, price, squareMeter, numberOfRooms, houseNumber } = homeItem || {};

  // const homeKey = [city, street, houseNumber].join(', ');

  const galleryImages = images && images.map(image => {
    return { original: image, thumbnail: image };
  });
  return (
    <StyledCard>
      {!isEmpty(galleryImages) ? (
        <CardImage>
          <ImageGallery
            items={galleryImages}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </CardImage>
      ) : null}

      <StyledCardContent>

        <CardTitle>{city}</CardTitle>
        <CardSecondTitle>{street}</CardSecondTitle>
        <p>Price: {price}.</p>
        <p>Number of rooms: {numberOfRooms}</p>
        <p>Surface: {squareMeter}</p>

      </StyledCardContent>

    </StyledCard>
  );
};

export default memo(Home);
