import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

export const StyledListItem = styled.div`
  ${({theme}) => theme.media(
    'xs',
    `
    width: 300px;
    height: 400px;
    transform: scale(0.9);
  `,
  )}
  ${({theme}) => theme.media(
    'md',
    `
     width: 100%;
     height: 130px;
     transform: scale(1);
  `,
  )}

  cursor: pointer;
  background-color: ${({theme}) => theme.colors.coolWhite};
  overflow: hidden;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledTag = styled.h3`
  && {
    ${({theme}) => theme.media(
    'xs',
    `
    font-size: 16px;
  `,
  )}
    ${({theme}) => theme.media(
    'md',
    `
    font-size: 20px;
  `,
  )}

    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  ${({theme}) => theme.media('xs', `
    flex-direction: column;
  `)}
  ${({theme}) => theme.media('md', `
    flex-direction: row;
  `)}
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  border-radius: 100px;
`;

export const Avatar = styled.div`

  border-radius: 100px;
  background-color: ${({theme}) => theme.colors.lightGrey};
  ${StyledImage} {
    background-size: cover;
  }
  ${({theme}) => theme.media('xs', `
      width: 100px;
      height: 100px;
    `)}
  ${({theme}) => theme.media('md', `
         width: 112px;
  height: 96px;
    `)}
`;
export const Description = styled.div`
  ${({theme}) => theme.media('xs', `
      margin: 0;
    `)}
  ${({theme}) => theme.media('md', `
        margin-left: 15px;
    `)}

  flex-wrap: wrap;
  display: flex;
  align-items: center;
  ${({theme}) => theme.media('xs', `
      flex-direction: column;
    `)}
  ${({theme}) => theme.media('md', `
      flex-direction: row;
    `)}

  justify-content: space-between;
  width: 100%;

  & > div {
    display: flex;
    ${({theme}) => theme.media('xs', `
      flex-direction: column;
    `)}
    ${({theme}) => theme.media('md', `
      flex-direction: row;
    `)}
  }

  & > div + div {
    margin-top: 16px;
  }

  & > div:nth-of-type(2) {
    ${({theme}) => theme.media('xs', `
      display: flex;
      align-items: center;
      flex-direction: row;
    `)}
    ${({theme}) => theme.media('md', `
     width: 176px;
    `)}
  }

  & > div:nth-of-type(3) {
    width: 128px;
  }

`;

export const ExtendedDescription = styled.div`
  width: 100%;
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

export const StyledChip = styled(Chip)`
  && {
    ${({theme}) => theme.media('xs', `
      margin-left: 0px;
      margin-top: 10px;
    `)}
    ${({theme}) => theme.media('md', `
      margin-left: 20px;
      margin-top: 0px;
    `)}
  }
`;

export const IconsWrapper = styled.div`
margin-bottom: 15px;
display: flex;
justify-content: flex-end;
`;

export const TagsWrapper = styled.div`
`;
