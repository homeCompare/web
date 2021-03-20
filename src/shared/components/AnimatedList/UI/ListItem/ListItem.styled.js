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
  display: flex;
  align-items: center;
  flex-direction: column;
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
