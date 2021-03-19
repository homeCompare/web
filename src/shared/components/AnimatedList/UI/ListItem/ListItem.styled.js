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
 width: 4rem;
  height: 4rem;
  border-radius: 100px;
  background-color: grey;
  margin-right: 2rem;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > div {
    background-color: grey;
  width: 14rem;
  border-radius: 6px;
  height: 0.5rem;
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
