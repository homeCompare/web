import SignIn from '@/shared/components/SignIn';
import {useTranslation} from '@/shared/i18n';
import Layout from '@/shared/components/Layout';
import Meta from '@/shared/components/Meta';

const Login = () => {
    const {t} = useTranslation();
    return (
        <>
          <Meta title={t('login_page_title')} />
          <Layout hideSide>
            <h1>{t('login_page_title')}</h1>
            <SignIn />
          </Layout>
        </>
      );
};

export default Login;