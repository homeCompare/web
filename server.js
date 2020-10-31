const express = require('express');
const next = require('next');

require('./src/shared/i18n');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  // eslint-disable-next-line no-console
  console.log(`> Ready on http://localhost:${port}`);
})();
