'use strict';

let reduce = function (/* array, callback, init */) {
  let previous = array[0];
  array.slice(1).forEach(function(e, i) {
    previous = callback(previous, e, i + 1, array);
  });

  return previous;
};

module.exports = reduce;
