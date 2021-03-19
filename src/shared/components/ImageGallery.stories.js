import React from 'react';

import ImageGallery from './ImageGallery';

export default {
  title: 'ImageGallery',
  component: ImageGallery,
};

const images = [
  'https://www.mail-signatures.com/wp-content/uploads/2019/02/Direct-image-link-in-Google-Drive-02.png',
  'https://www.mail-signatures.com/wp-content/uploads/2019/02/Direct-image-link-in-Google-Drive-03-3.png',
];

const Template = args => <ImageGallery {...args} />;
export const Main = Template.bind({});
Main.args = {
  images,
  showPlayButton: true,
  showFullscreenButton: true,
  showThumbnails: true,
};
