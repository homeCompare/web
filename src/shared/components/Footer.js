import React, {useState, memo} from 'react';

import styled from 'styled-components';
import LanguageIcon from '@material-ui/icons/Language';
import {IconButton} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {useTranslation} from '@/shared/i18n';
import {supportedLanguages} from '@/shared/config';

const InnerWrapper = styled.div`
  ${({theme}) => theme.defaultSizer}

  display: flex;
  overflow: hidden;
`;

const Root = styled.footer`
  background-color: ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.white};
`;

const StyledLanguageIcon = styled(LanguageIcon)`
  color: ${({theme}) => theme.colors.white};
`;

const Flex = styled.div`
  display: flex;
`;

const FlexI = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const CustomMenu = styled(Menu).attrs({
  PaperProps: {
    style: {
      maxHeight: 300,
      width: '200px',
    },
  },
})``;

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = useState(false);
  const {currentLanguageKey, changeLanguage} = useTranslation();

  const onChangeLanguage = newLanguageKey => {
    if (currentLanguageKey === newLanguageKey) {
      return;
    }

    changeLanguage(newLanguageKey);
    setLanguageMenuAnchorEl(false);
  };

  return (
    <Root>
      <InnerWrapper>
        <FlexI>&copy; homeCompare.io 2020 - {CURRENT_YEAR}</FlexI>
        <Flex>
          <IconButton onClick={event => setLanguageMenuAnchorEl(event.currentTarget)}>
            <StyledLanguageIcon />
          </IconButton>
          <CustomMenu
            anchorEl={languageMenuAnchorEl}
            keepMounted
            open={Boolean(languageMenuAnchorEl)}
            onClose={() => setLanguageMenuAnchorEl(false)}
          >
            {supportedLanguages.map(languageKey => (
              <MenuItem
                key={languageKey}
                selected={languageKey === currentLanguageKey}
                onClick={() => onChangeLanguage(languageKey)}
              >
                {languageKey}
              </MenuItem>
            ))}
          </CustomMenu>
        </Flex>
      </InnerWrapper>
    </Root>
  );
};

export default memo(Footer);
