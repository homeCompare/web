import React, {memo} from 'react';

import PropTypes from 'prop-types';
import Head from 'next/head';
import {useTheme} from 'styled-components';

import faviconIco from '@/shared/images/favicon.ico';
import logoPng from '@/shared/images/homeCompare.png';
// import {useRouter} from 'next/router';

// import {siteUrl, supportedLanguages} from '../config';
// import {useTranslation} from '../i18n';

const Meta = ({title}) => {
  const theme = useTheme();
  // const {i18n} = useTranslation();
  // const router = useRouter();
  // console.log('router', router, i18n);

  return (
    <Head>
      <title>homeCompare.io - {title}</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="description" content="Description of the page less than 150 characters" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      {/* <link rel="alternate" href={siteUrl} hrefLang="x-default" />
      {supportedLanguages.filter(sl => sl !== i18n.language).map(lang => (
        <link rel="alternate" href="http://example.com/en-au" hrefLang={lang} key={lang} />
      ))} */}
      <link rel="icon" type="image/x-icon" href={faviconIco} />
      <link rel="apple-touch-icon" href={logoPng} />
      <link rel="icon" type="image/png" href={logoPng} />

      <meta name="theme-color" content={theme.colors.darkGrey} />
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
};
Meta.whyDidYouRender = false;
export default memo(Meta);
