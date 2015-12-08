import http from 'http';
import _debug from 'debug';
import createBasicAuth from './createBasicAuth';

const debug = _debug('app:server');

/**
 * @param {Object} opts
 * @param {Object} opts.app
 * @param {Number} opts.port
 */
function createServer(opts) {
  const { app, port } = opts;
  let server;

  if (process.env.AUTH_USER) {
    server = http.createServer(createBasicAuth({
      realm: 'app',
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    }), app);
  } else {
    server = http.createServer(app);
  }

  server.listen(port, function (err) {
    if (err) throw err;
    debug(`listening at localhost:${port}`);
  });

  return server;
}

export default createServer;
