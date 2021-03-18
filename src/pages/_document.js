/* eslint-disable react/no-danger */
import Document, {Html, Head, Main, NextScript} from 'next/document';

import {
  // defaultLanguage,
  GA_TRACKING_ID,
} from '@/shared/config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

          <style dangerouslySetInnerHTML={{__html: 'body { display: block !important }'}} />
          {/* ^ this might fix FCP https://github.com/vercel/next.js/issues/10285#issuecomment-613627425 */}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
