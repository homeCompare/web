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
  background-color: whitesmoke;
  padding-bottom: 2rem;
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
  width: 12rem;
  height: 12rem;
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
  border-radius: 5%;
  background-color: ${({theme}) => theme.colors.lightGrey};
  height: 5rem;
  animation: ${FadeInAnim} 0.4s forwards;
  }
  & > div:nth-of-type(2) {
    animation-delay: 0.15s;
    border-radius: 25px;
    overflow: hidden;
    h4 {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  & > div:nth-of-type(3) {
    animation-delay: 0.3s;
  }
  & > div + div {
    margin-top: 1rem;
  }
`;

export const StyledCardImage = styled.div`
  


  .image-gallery-left-nav {
    padding-left: 10px;
  }
  .image-gallery-right-nav {
    padding-right: 25px;
  }
  .image-gallery-image {
    object-fit: cover;
    width: 100%;
    height: 800px;
    max-height: 800px;
  }
  .image-gallery-slide .image-gallery-image {
    object-fit: cover;
  }
  .image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg {
    width: 48px;
    height: 70px;
    opacity: 0.5;
  }
  .image-gallery-slides {
    max-height: 800px;
    margin-bottom: 5px;
    border-radius: 2.5%;
  }
`;

export const StyledImageContainer = styled.div`
&& {
  width: 90%;
height: 100%;
margin-left: 5%;
  }
`;

export const StyledFreeTextArea = styled.div`
&& {
  width: 90%;
  height: 200px;
  margin-left: 5%;
}
`;
