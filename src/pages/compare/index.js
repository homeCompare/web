import Compare from '@/compare/index';
import Layout from '@/shared/components/Layout';
import Meta from '@/shared/components/Meta';
import {useTranslation} from '@/shared/i18n';

const ComparePage = () => {
  const {t} = useTranslation();

  return (
    <>
      <Meta title={t('compare_page_title')} />
      <Layout hideSide>
        <h1>{t('compare_page_title')}</h1>
        <Compare />
      </Layout>
    </>
  );
};

ComparePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ComparePage;
