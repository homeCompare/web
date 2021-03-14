/* eslint-disable no-undef */
import React, {memo} from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import GithubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import {useSelector} from 'react-redux';

import {IconButton} from '@/shared/components/Button';
import {isDev} from '@/shared/config';
import {Link} from '@/shared/utils/router';
import {gitLink, hostLink} from '@/shared/consts';
import HeaderMenu from '@/shared/components/HeaderMenu';
import CoverImageCatched from '@/shared/images/cover4.jpg';
import Cover2ImageCatched from '@/shared/images/cover5.jpg';
import HomeCompareLogoImage from '@/shared/images/HomeCompare_Logo.png';

const HeaderRoot = styled.header`
  height: ${({theme}) => theme.base.header.height}px;
  min-height: ${({theme}) => theme.base.header.height}px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 10px solid ${({theme}) => theme.colors.darkGrey};
  font-size: ${({theme}) => theme.size(1.5)};
  z-index: ${({theme}) => theme.zIndex.header};
  color: ${({theme}) => theme.colors.darkGrey};
  background-color: ${({theme}) => theme.colors.white};
`;

const InnerWrapper = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  align-items: center;

  ${({theme}) => theme.defaultSizer}
  padding: 0 20px;
`;

const StyledName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
`;

const StyledHomeIcon = styled.img`
  width: 50px;
  height: 50px;

  display: flex;
`;

const LogoWrapper = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-right: ${({theme}) => theme.size(3)};
`;

const StyledLogoLink = styled(Link)`
  &&& {
    text-decoration: none;
    text-transform: inherit;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  box-shadow: 0px 7px 10px 5px rgba(0,0,0, 0.12);
`;

const CoverImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  min-height: 300px;
`;

export const Logo = ({className}) => (
  <LogoWrapper className={className}>
    <StyledHomeIcon src={HomeCompareLogoImage} alt="homeCompare.io" />
    HOMECOMPARE
  </LogoWrapper>
);

Logo.propTypes = {
  /**
   * string of styling class names (needed for styled-components)
	*/
  className: PropTypes.string,
};

const Header = ({withCoverImage}) => {
  const userData = useSelector(state => state.user.data);
  return (
    <>
      <HeaderRoot>
        <InnerWrapper>
          <StyledLogoLink href="/">
            <Logo />
          </StyledLogoLink>
          <HeaderMenu userData={userData} />
          {userData && <StyledName>Hello,{userData.name}</StyledName>}
        </InnerWrapper>
      </HeaderRoot>
      {withCoverImage && (
        <CoverImageWrapper>
          <CoverImage src={CoverImageCatched} key="coverImg1" alt="" />
          <CoverImage src={Cover2ImageCatched} key="coverImg2" alt="" />
        </CoverImageWrapper>
      )}
    </>
  );
};

Header.propTypes = {
  /**
   * indicate if header will render the cover image,
   */
  withCoverImage: PropTypes.bool,
};

Header.defaultProps = {
  withCoverImage: true,
};

export default memo(Header);
