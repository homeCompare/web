import React, {memo} from 'react';

import styled from 'styled-components';
import {Bounce, AttentionSeeker} from 'react-awesome-reveal';

import Button from '@/shared/components/Button';
import {useTranslation} from '@/shared/i18n';

const Root = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  width: 80%;
  padding: ${({theme}) => theme.size(1)};
  margin-top: -100px;
  ${({theme}) => theme.media('md', 'width: 500px')};
  box-shadow: 17px 20px 11px 0px rgb(0 0 0 / 2%);
`;

const MessageOnHeader = () => {
  const {t} = useTranslation();

  return (
    <Bounce direction="down" delay={800} cascade triggerOnce>
      <Root>
        <h1>{t('homepage_h1_title')}</h1>
        <p>{t('homepage_description')}</p>
        <AttentionSeeker effect="shake">
          <Button>{t('homepage_start_for_free_button')}</Button>
        </AttentionSeeker>
      </Root>
    </Bounce>
  );
};

MessageOnHeader.whyDidYouRender = false;

export default memo(MessageOnHeader);
