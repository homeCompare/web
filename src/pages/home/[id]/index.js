import {useRouter} from 'next/router';

import Home from '@/home/index';
import Layout from '@/shared/components/Layout';
import Meta from '@/shared/components/Meta';
import {useTranslation} from '@/shared/i18n';

const HomeItem = () => {
  const router = useRouter();
  const {id: homeId} = router.query;

  const {t} = useTranslation();

  return (
    <>
      <Meta title={t('single_home_item')} />
      <Layout>
        <Home homeId={homeId} />
      </Layout>
    </>
  );
};

export default HomeItem;
