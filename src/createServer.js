import http from 'http';
import _debug from 'debug';

const debug = _debug('app:server');

/**
 * @param {Object} opts
 * @param {Object} opts.app
 * @param {Number} opts.port
 */
function createServer(opts) {
  const { app, port } = opts;
  const server = http.createServer(app);

  server.listen(port, function (err) {
    if (err) throw err;
    debug(`listening at localhost:${port}`);
  });

  return server;
}

export default createServer;
