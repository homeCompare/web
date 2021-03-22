import styled from 'styled-components';

export const StyledListItem = styled.div`
${({theme}) => theme.media('xs', `
    width: 430px;
    transform: scale(0.54);
  `)}
${({theme}) => theme.media('md', `
     width: 100%;
     transform: scale(1);
  `)}

  cursor: pointer;
  background-color: whitesmoke;
  overflow: hidden;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledTag = styled.h3`
&& {
  ${({theme}) => theme.media('xs', `
    font-size: 16px;
  `)}
  ${({theme}) => theme.media('md', `
    font-size: 20px;
  `)}
  margin-bottom: 0;
  margin-right: 20px;
}`;

export const ListItemContent = styled.div`
 display: flex;
  flex-direction: row;
 
  align-items: center;
  padding: 1rem;
`;

export const StyledImage = styled.img`
height: 100%; 
width: 100%; 
display: block; 
border-radius: 100px;

`;

export const Avatar = styled.div`

 width: 7rem;
  height: 6rem;
  border-radius: 100px;
  background-color: grey;
  ${StyledImage} {
    background-size: cover;
  }

`;
export const Description = styled.div`
  margin-left: 15px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
 
  & > div {
    display: flex;
    flex-direction: row;
  }

  & > div:nth-of-type(2) {
    width: 11rem;
  }

  & > div:nth-of-type(3) {
    width: 8rem;
  }
  & > div + div {
    margin-top: 1rem;
  }
  

  


`;

export const ExtendedDescription = styled(Description)`
 width: 80%
`;

export const StyledCardContainer = styled.div`
width: 90%; 
height: 100%; 
margin-left: 5%;
`;

export const StyledFreeTextArea = styled.div`
width: 90%;
 height: 200px;
 margin-left: 5%;
`;
