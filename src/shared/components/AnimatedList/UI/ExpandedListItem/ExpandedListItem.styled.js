import styled, {keyframes, css} from 'styled-components';
import {Flipped} from 'react-flip-toolkit';

export const FadeInAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
  }
`;
export const AnimatedInFlipped = styled(Flipped)`

 & > div {
  animation: ${props => (props.started ? css`${FadeInAnim} 0.4s forwards` : null)};
 }
`;

export const StyledExpandedListItem = styled.div`
  cursor: pointer;
  background-color: #d0d0d0;
`;
export const ExpandedListItemContent = styled.div`
 padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExpandedAvatar = styled.div`
  border-radius: 100px;
  background-color: grey;
  width: 10rem;
  height: 10rem;
  margin-right: 0;
  margin-bottom: 1rem;
  img {
  background-size: cover;
  }
`;

export const AdditionalContent = styled.div`

  width: 100%;
  margin-top: 2rem;
  & > div {
    opacity: 0;
  border-radius: 3px;
  background-color: gray;
  height: 5rem;
  animation: ${FadeInAnim} 0.4s forwards;
  }
  & > div:nth-of-type(2) {
    animation-delay: 0.15s;
  }
  & > div:nth-of-type(3) {
    animation-delay: 0.3s;
  }
  & > div + div {
    margin-top: 1rem;
  }
`;

export const StyledCardImage = styled.div`

.image-gallery {
  padding-top: 15px;
  padding-bottom: 10px;
}

  .image-gallery-content {
    margin-left: 20px;

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
    height: 800px;
    max-height: 800px;
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
    ${({theme}) => theme.media('xl', `
      width: 100px;
      height: 100px;
    `)}
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
    padding-bottom: 18px;
  }
  .image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg {
    width: 48px;
    height: 70px;
    opacity: 0.5;
  }
  .image-gallery-slides {
    border-radius: 1%;
    max-height: 800px;
    margin-right: 20px;
    margin-bottom: 5px;
  }
  .image-gallery-thumbnail-inner {
     width: 50px;
  }
`;
