/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import {Link as I18nLink, Router as I18nRoute} from '@/shared/i18n';
import NextLink from 'next/link';

const StyledLink = styled.a``;

export const Link = ({children, href, ...props}) => {
  return (
    <NextLink href={href} {...props}>
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
};
