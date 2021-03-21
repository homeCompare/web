import styled from 'styled-components';

export const StyledListItem = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: #d0d0d0;
  overflow: hidden;
`;
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
 width: 6rem;
  height: 6rem;
  border-radius: 100px;
  background-color: grey;
  margin-right: 2rem;
  img {
    background-size: cover;
  }
`;
export const Description = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  flex-direction: row;
  h1 {
    margin-right: 20px;
  }
  & > div {
    background-color: grey;
  width: 14rem;
  border-radius: 6px;
  height: 1.2rem;
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
margin-left: 20%;
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
