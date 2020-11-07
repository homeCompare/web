import styled from 'styled-components';

import {useTranslation} from '@/shared/i18n';
import Meta from '@/shared/components/Meta';
import Button from '@/shared/components/Button';
import Layout from '@/shared/components/Layout';

const RootHomePage = styled(Layout)``;

const IndexPage = () => {
  const {t, i18n} = useTranslation();

  return (
    <>
      <Meta title={t('title')} />
      <RootHomePage>
        index - {t('title')}
        <Button onClick={() => i18n.changeLanguage('en')}>en</Button>
        <Button onClick={() => i18n.changeLanguage('he')}>he</Button>
        <Button onClick={() => i18n.changeLanguage('ro')}>ro</Button>
        <Button onClick={() => i18n.changeLanguage('es')}>es</Button>
      </RootHomePage>
    </>
  );
};

export default IndexPage;
