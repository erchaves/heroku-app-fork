import app from './app';
import http from 'http';

const server = http.createServer(app);

server.on('listening', function () {
  app.set('port', server.address().port);
});

export default server;
