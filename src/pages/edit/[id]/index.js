import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';

import EditHome from '@/editHome/index';
import Layout from '@/shared/components/Layout';
import Meta from '@/shared/components/Meta';
import {useTranslation} from '@/shared/i18n';
import {selectHomes} from '@/state/selectors';

const HomeItem = () => {
  const router = useRouter();
  const {id: homeId} = router.query;

  const homes = useSelector(selectHomes);

  const {t} = useTranslation();

  const homeItem = homes.find(({id}) => id === homeId);

  return (
    <>
      <Meta title={t('edit_home_page_title')} />
      <Layout>
        <h1>{t('edit_home_page_title')}</h1>
        <EditHome home={homeItem} />
      </Layout>
    </>
  );
};

export default HomeItem;
