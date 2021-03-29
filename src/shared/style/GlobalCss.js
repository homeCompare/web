import {createGlobalStyle} from 'styled-components';
import ReactImageGalleryCss from 'react-image-gallery/styles/css/image-gallery.css';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    text-size-adjust: 100%;
  }

  body {
    background-color: ${theme.base.backgroundColor};
  }

  body,
  button,
  input,
  textarea {
    font-size: ${theme.size(1)};
    font-family: 'Roboto', "Helvetica Neue", Helvetica, sans-serif;
    color: ${theme.base.textColor};
  }

  h1,
  h2,
  h3,
  h4,
  button,
  body {
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: ${theme.size(1)};
  }

  p {
    line-height: 21px;
  }

  button,
  a {
    cursor: pointer;
    color: inherit;
    text-transform: capitalize;
  }

  a {
    text-decoration: underline;
  }

  * {
    outline: none;
  }

  .MuiSlider-root {
    &&& {
      color: ${theme.colors.darkGrey};
    }
  }

  .MuiFormLabel-root {
    &&& {
      color: ${theme.colors.darkGrey};
    }
  }

  ${ReactImageGalleryCss}
`;

export default GlobalStyle;
