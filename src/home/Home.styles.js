import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const StyledCard = styled(Card)`
  width: 100%;
  ${({ theme }) => theme.media('xl', `
    width: 1200px;
  `)};
`;

export const CardImage = styled.div`
  ${({ theme }) => theme.media('md', `
     width: 50%;
     float: left;
  `)};
  .image-gallery-content {
    margin-left: 20px;
    margin-top: 15px;

  }
  .image-gallery-left-nav {
    padding-left: 10px;
  }
  .image-gallery-right-nav {
    padding-right: 25px;
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
    width:  85px;
    height: 75px;
    ${({ theme }) => theme.media('xl', `
    width: 100px;
    height: 100px;
  `)};
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
      margin-right: 20px;
      margin-bottom: 15px;
  
    
  }
  .image-gallery-thumbnail-inner {
   width: 50px;
  }
 
`;

export const StyledCardContent = styled(CardContent)`
 ${({ theme }) => theme.media('md', `
      margin-left: 52%;
  `)};
 margin-left: 0;
  margin-top: 30px;
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

export const CardTitle = styled.h1`
 font-size: 37px;
`;

export const CardSecondTitle = styled.h2`
  margin-top: 10px;
  font-size: 27px;
  opacity: 0.4;
`;
