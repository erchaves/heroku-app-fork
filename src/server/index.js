import _auth from './auth';
import app from './app';
import http from 'http';

let server;

const authUser = process.env.AUTH_USER || '';
const authPass = process.env.AUTH_PASS || '';

if (authUser) {
  const auth = _auth(authUser, authPass);
  server = http.createServer(auth, app);
} else {
  server = http.createServer(app);
}

server.on('listening', function () {
  app.set('port', server.address().port);
});

export default server;
