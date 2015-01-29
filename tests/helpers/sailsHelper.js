var Sails = require('sails/lib/app');

module.exports.lift = function (func) {
  Sails().lift({
    log: {
      level: 'error'
    },
    hooks: {
      grunt: false,
    }
  }, func);
};
