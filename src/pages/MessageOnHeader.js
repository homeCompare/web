import React, {memo} from 'react';

import styled from 'styled-components';
import {Bounce, AttentionSeeker} from 'react-awesome-reveal';

import Button from '@/shared/components/Button';
import {useTranslation} from '@/shared/i18n';

const Root = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  width: 80%;
  padding: ${({theme}) => theme.size(1)};
  position: absolute;
  top: -280px;
  ${({theme}) => theme.media('md', 'width: 500px')};
  box-shadow: 0px 7px 10px 5px rgba(0,0,0, 0.15);
`;

const MessageOnHeader = () => {
  const {t} = useTranslation();
  return (
    <Bounce direction="down" delay={1000} triggerOnce>
      <Root>
        <h1>{t('homepage_h1_title')}</h1>
        <p>{t('homepage_description')}</p>
        <AttentionSeeker delay={2000} effect="shake">
          <Button>{t('homepage_start_for_free_button')}</Button>
        </AttentionSeeker>
      </Root>
    </Bounce>
  );
};

export default memo(MessageOnHeader);
