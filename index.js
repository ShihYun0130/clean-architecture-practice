#!/usr/bin/env node

/**
 * Module dependencies.
 */

var App = require('./server/app');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var port = normalizePort(process.env.PORT || '3000');

App().then((app) => {
  app.set('port', port);
  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  /**
 * Listen on provided port, on all network interfaces.
 */
  server.listen(port);
});

