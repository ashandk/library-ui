if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureLibrary.prod');
} else {
  module.exports = require('./configureLibrary.dev');
}
