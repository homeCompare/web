import React, {memo} from 'react';

import PropTypes from 'prop-types';
import ImageGalleryBone from 'react-image-gallery';

const ImageGallery = ({images, ...imageGalleryRelatedProps}) => {
  if (!images?.length) {
    console.warn('ImageGallery was called with empty images');
    return null;
  }
  const arrangedItems = images.map(item => ({original: item, thumbnail: item}));

  return (
    <ImageGalleryBone
      items={arrangedItems}
      {...imageGalleryRelatedProps}
    />
  );
};

ImageGallery.propTypes = {
  /**
   * array of images urls
	*/
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * show play button
	*/
  showPlayButton: PropTypes.bool,
  /**
   * show full screen button
	*/
  showFullscreenButton: PropTypes.bool,
  /**
   * show thumbnail
	*/
  showThumbnails: PropTypes.bool,
};

ImageGallery.defaultProps = {
  showPlayButton: false,
  showFullscreenButton: false,
  showThumbnails: false,
};

export default memo(ImageGallery);
