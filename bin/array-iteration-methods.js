'use strict';

// const forEach = require('.../lib/for-each.js');
const forEach = require('../lib/for-each.js');

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array = new Array(10).fill(1).map((e, i) => e * i);

forEach(array, (e, i, a) => console.log(a === array));

// const testArray = (e, i, a) => console.log(a === array);

// forEach(array, testArray);

let result = reduce(array, (previous, current) )
