#!/usr/bin/env node
var server = require('../build/server').default;
var PORT = parseInt(process.env.PORT, 10) || 3000;

server.listen(PORT, function (err) {
  if (err) throw err;
  console.log('listening at localhost:' + PORT);
});
