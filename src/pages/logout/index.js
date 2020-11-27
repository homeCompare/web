/* eslint-disable linebreak-style */
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useTranslation } from '@/shared/i18n';
import Layout from '@/shared/components/Layout';
import Meta from '@/shared/components/Meta';
import * as actions from '@/state/actions';

const Logout = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div>
      <Meta title={t('login_page_title')} />
      <Layout hideSide>
        <Button variant="contained" color="primary" onClick={() => dispatch(actions.logout())}>
          Logout
        </Button>
      </Layout>
    </div>
  );
};

export default Logout;
