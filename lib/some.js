'use strict';

let some = function (/* array, callback */) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }

  return false;
};

module.exports = some;
