import React, {memo} from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import {toPairs, omit, isEmpty} from 'lodash';
import ImageGallery from 'react-image-gallery';

import BrokenImageIcon from '@material-ui/icons/BrokenImage';

export const HomeCompareCard = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  text-align: left;
  padding: 0;
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
`;

const CompareCard = (home) => {
  const nonTextFieldToExclude = ['images'];

  const galleryImages = home?.images?.map((image) => {
    return { original: image, thumbnail: image };
  });

  const pairsModifyedHome = toPairs(omit(home, nonTextFieldToExclude));
  return (
    <HomeCompareCard>
      <HomeCompareImage>
        {!isEmpty(galleryImages) ? (
          <ImageGallery
            items={galleryImages}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
          />
        ) : (
          <StyledBrokenImageIcon />
        )}
      </HomeCompareImage>
      {pairsModifyedHome.map(([key, value]) => (
        <HomeCompareItem key={key}>{value}</HomeCompareItem>
      ))}
    </HomeCompareCard>
  );
};

export default memo(CompareCard);
