'use strict';

const webPage = require('..');
const assert = require('assert').strict;

assert.strictEqual(webPage(), 'Hello from webPage');
console.info('webPage tests passed');
