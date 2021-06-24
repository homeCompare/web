import styled from 'styled-components';

import Button from '@/shared/components/Button';

export const SubmitButton = styled(Button)`
  margin-top: ${({theme}) => theme.size(1)};
`;

export const Container = styled.div`
  ${({theme}) => theme.media('sm', `
    border: 1px solid ${theme.colors.coolBlack};
    padding: ${theme.size(1)} ${theme.size(2)};
  `)}
`;

export const Form = styled.form``;
