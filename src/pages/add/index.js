import AddHome from '@/addHome/index';
import Layout from '@/shared/components/Layout';
import Meta from '@/shared/components/Meta';
import {useTranslation} from '@/shared/i18n';

const AddPage = () => {
  const {t} = useTranslation();

  return (
    <>
      <Meta title={t('add_home_page_title')} />
      <Layout>
        <h1>{t('add_home_page_title')}</h1>
        <AddHome />
      </Layout>
    </>
  );
};

export default AddPage;
