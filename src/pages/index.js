import { memo } from 'react';
import styled from 'styled-components';

import { useTranslation } from '@/shared/i18n';
import Meta from '@/shared/components/Meta';
import Button from '@/shared/components/Button';
import Layout from '@/shared/components/Layout';

const RootHomePage = styled(Layout)``;

const IndexPage = () => {
  const {t, changeLanguage} = useTranslation();

  return (
    <>
      <Meta title={t('title')} />
      <RootHomePage>
        index - {t('title')}
        <Button onClick={() => changeLanguage('en')}>en</Button>
        <Button onClick={() => changeLanguage('he')}>he</Button>
        <Button onClick={() => changeLanguage('ro')}>ro</Button>
        <Button onClick={() => changeLanguage('es')}>es</Button>
      </RootHomePage>
    </>
  );
};

export default memo(IndexPage);
