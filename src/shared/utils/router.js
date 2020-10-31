/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import {Link as I18nLink, Router as I18nRoute} from '@/shared/i18n';

const StyledLink = styled.a``;

export const pushRoute = newPath => I18nRoute.push(newPath);

export const Link = ({children, href, ...props}) => {
  return (
    <I18nLink href={href}>
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </I18nLink>
  );
};
