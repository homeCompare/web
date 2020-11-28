/* eslint-disable no-undef */
import React, { memo } from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Image from 'next/image';

import GithubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import { IconButton } from '@material-ui/core';

import { isDev } from '@/shared/config';
import { Link } from '@/shared/utils/router';
import { gitLink, hostLink } from '@/shared/consts';
import HeaderMenu from '@/shared/components/HeaderMenu';

import CoverImageCatched from '@/shared/images/cover4.jpg';
import Cover2ImageCatched from '@/shared/images/cover5.jpg';
import HomeCompareLogoImage from '@/shared/images/homeCompare.png';

const HeaderRoot = styled.header`
  height: ${({ theme }) => theme.base.header.height}px;
  min-height: ${({ theme }) => theme.base.header.height}px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 10px solid ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.size(1.5)};
  z-index: ${({ theme }) => theme.zIndex.header};
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
`;

const InnerWrapper = styled.div`
  flex-direction: row;
  display: flex;
  ${({ theme }) => theme.defaultSizer}
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  align-items: center;
`;
const StyledName = styled.span`
display: flex;
justify-content: center;
align-items: center;
 text-align: center;
 font-size: 20px;
 

`;

const StyledHomeIcon = styled.img`
  width: 35px;
  height: 35px;
  display: flex;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.size(3)};
`;

const StyledLogoLink = styled(Link)`
  &&& {
    text-decoration: none;
    text-transform: inherit;
  }
`;

const CoverImage = styled(Image).attrs({
  unsized: true,
})`
width: 100%;
  height: 300px;
  object-fit: cover;
  box-shadow: 0px 7px 10px 5px rgba(0,0,0, 0.12);
`;
const CoverImageWrapper = styled.div`
display: flex;
`;

const Logo = () => (
  <LogoWrapper>
    <StyledHomeIcon src={HomeCompareLogoImage} alt="homeCompare.io" />
    Compare.io
  </LogoWrapper>
);

const Header = () => {
  const userData = useSelector((state) => state.user.data);
  return (
  <>
    <HeaderRoot>
      <InnerWrapper>
        <StyledLogoLink href="/">
          <Logo />
        </StyledLogoLink>
        <HeaderMenu />
        {isDev && (
          <>
            <IconButton onClick={() => window.open(gitLink)}>
              <GithubIcon />
            </IconButton>

            <IconButton onClick={() => window.open(hostLink)}>
              <PublicIcon />
            </IconButton>
          </>
        )}
        {userData != undefined ? <StyledName>Hello,{userData.name}</StyledName> : null}
      </InnerWrapper>
    </HeaderRoot>
    <CoverImageWrapper>
      <CoverImage src={CoverImageCatched} alt="" />
      <CoverImage src={Cover2ImageCatched} alt="" />
    </CoverImageWrapper>
  </>
  );
};

export default memo(Header);
