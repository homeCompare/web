import React, { memo } from 'react';
import ButtonBone from '@material-ui/core/Button';
import IconButtonBone from '@material-ui/core/IconButton';
import styled from 'styled-components';

// base design only!
// if you need to add something just override it in your own component
// const CustomStyledButton = styled(Button)``;
const StyledButton = styled(ButtonBone)`
  &&& {
    border: 1px solid ${({ theme }) => theme.colors.thinGrey};
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const StyledIconButton = styled(IconButtonBone)``;

// see possible properties
// https://material-ui.com/components/button/
const Button = React.forwardRef((props, ref) => <StyledButton ref={ref} {...props} />);

export const IconButton = React.forwardRef((props, ref) => (
  <StyledIconButton ref={ref} {...props} />
));

export default memo(Button);
