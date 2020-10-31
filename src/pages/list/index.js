import HomesList from '@/homesList/index';
import Layout from '@/shared/components/Layout';
import Meta from '@/shared/components/Meta';
import {useTranslation} from '@/shared/i18n';

const ListPage = () => {
  const {t} = useTranslation();

  return (
    <>
      <Meta title={t('homes_list_page_title')} />
      <Layout>
        <h1>{t('homes_list_page_title')}</h1>
        <HomesList />
      </Layout>
    </>
  );
};

ListPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ListPage;
