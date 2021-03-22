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

export const StyledHomeField = styled.h3`
 margin-left: 20px;
 flex: 1 0 50%;
 ${({theme}) => theme.media('xs', `
    font-size: 10px;
     `)}
 ${({theme}) => theme.media('md', `
    font-size: 10px;
     `)}
 ${({theme}) => theme.media('lg', `
    font-size: 13px;
     `)}
`;

export const StyledExpandedListItem = styled.div`
  cursor: pointer;
  background-color: whitesmoke;
  padding-bottom: 2rem;
  border-radius: 25px;
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
  border-radius: 25px;
  background-color: whitesmoke;
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
   border-radius: 25px;



  .image-gallery-image {
    object-fit: cover;
    width: 100%;
    ${({theme}) => theme.media('xs', `
    height: 400px;
     `)}
    ${({theme}) => theme.media('md', `
    height: 800px;
     `)}
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
    border-radius: 25px;
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

export const SectionsWrapper = styled.div`

&& {
  margin-left: 5%;
 display: flex;
 justify-content: center;
 ${({theme}) => theme.media('xs', `
    flex-direction: column;
    align-items: center;
     `)}
 ${({theme}) => theme.media('md', `
    flex-direction: row;
    align-items: flex-start;
     `)}
 button {
   border: none;
   background-color: whitesmoke;
   font-weight: 700;
   font-size: 20px;
   margin-right: 5px;
   &:hover {
     color: grey;
   }
 }
}
 
`;

export const Section = styled.div`

  margin-top: 50px;
  margin-bottom: 50px;
  & > div:nth-of-type(1) {
    margin-left: 25%;
  }
  & > div:nth-of-type(2) {
    margin-left: 0%;
  }
`;

export const InnerSection = styled.div`
${({theme}) => theme.media('md', `
     width: 100px;
     `)}
       ${({theme}) => theme.media('lg', `
       width: 250px;
     `)}
  display: flex;

`;

export const SectionCard = styled.div`

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: whitesmoke;
  border-radius: 25px;
  ${({theme}) => theme.media('xs', `
    width: 200px;
     `)}
  ${({theme}) => theme.media('md', `
     width: 140px;
     margin-right: 25px;
     `)}
  ${({theme}) => theme.media('lg', `
       width: 250px;
     `)}

  h3 {
    margin-left: 10px;
  }


`;
export const InnerGridLeft = styled.div`
display: flex;
border-right: 3px solid black;
width: 50%;
padding-top: 20px;
`;

export const InnerGridRight = styled.div`
display: flex;
width: 50%;
padding-top: 20px;
`;
