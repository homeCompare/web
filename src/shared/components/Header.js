/* eslint-disable no-undef */
import React, {memo} from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import Image from 'next/image';

import {Link} from '@/shared/utils/router';
import HeaderMenu from '@/shared/components/HeaderMenu';
import cover from '@/shared/images/cover.jpg';
import HomeCompareLogoImage from '@/shared/images/HomeCompare_Logo.png';
import {selectUserData} from '@/state/selectors';

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
  ${({theme}) => theme.media('xs', `
    font-size: 10px;
  `)}
  ${({theme}) => theme.media('md', `
    font-size: 20px;
  `)}
`;

const StyledHomeIcon = styled(Image)`
  width: 50px;
  height: 50px;
  display: flex;
`;

const LogoWrapper = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  ${({theme}) => theme.media('xs', `
    margin-right: 0px;
  `)}
  ${({theme}) => theme.media('md', `
    margin-right: 40px;
  `)}
`;

const StyledLogoLink = styled(Link)`
  &&& {
    text-decoration: none;
    text-transform: inherit;
  }
`;

const CoverImage = styled(Image)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  box-shadow: 0 7px 10px 5px rgba(0, 0, 0, 0.12);
`;

const CoverImageWrapper = styled.div`
  display: flex;
  overflow: hidden;

  ${({theme}) => theme.media('xs', `
    z-index: -1;
    height: 100px;
  `)}
  ${({theme}) => theme.media('md', `
    height: 200px;
  `)}

`;

export const Logo = ({className}) => (
  <LogoWrapper className={className}>
    <StyledHomeIcon src={HomeCompareLogoImage} alt="homeCompare.io" width={50} height={50} />
    HOMECOMPARE
  </LogoWrapper>
);

Logo.propTypes = {
  /**
   * string of styling class names (needed for styled-components)
	*/
  className: PropTypes.string,
};

const CoverImg = memo(() => (
  <CoverImageWrapper>
    <CoverImage src={cover} key="cover" alt="" width={2800} height={300} />
  </CoverImageWrapper>
));

const Header = ({withCoverImage}) => {
  const userData = useSelector(selectUserData);
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
      {withCoverImage && <CoverImg />}
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
