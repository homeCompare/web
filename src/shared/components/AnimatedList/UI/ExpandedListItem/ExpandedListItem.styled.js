import styled, {keyframes, css} from 'styled-components';

export const FadeInAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
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
  width: 8rem;
  height: 8rem;
  margin-right: 0;
  margin-bottom: 1rem;
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
