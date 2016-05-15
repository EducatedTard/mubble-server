var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mubble-express'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mubble-express-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mubble-express'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mubble-express-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mubble-express'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mubble-express-production'
  }
};

module.exports = config[env];
