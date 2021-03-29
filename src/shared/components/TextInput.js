/* eslint-disable no-unused-vars */
import React, {memo} from 'react';

import TextInputBone from '@material-ui/core/TextField';
import styled from 'styled-components';

// base design only!
// if you need to add something just override it in your own component
// const CustomStyledInput = styled(Input)``;
const StyledTextInput = styled(TextInputBone)`
  .MuiInput-underline::after {
    border-bottom: 2px solid ${({theme}) => theme.colors.thinGrey};
  }
`;

// see possible properties
// https://material-ui.com/components/text-fields/
const TextInput = React.forwardRef((props, ref) => (
  <StyledTextInput ref={ref} {...props} />
));

export default memo(TextInput);
