var cdefine = require('../');
var assert = require('assert');

assert.equal(
    "#define foo 1\n" +
    "#define bar moose\n",
    cdefine({foo: 1, bar: "moose"})
);

assert.equal(
    "#define a b\n" +
    "#define c d\n" +
    "\n" +
    "#define e f\n" +
    "#define g h\n",
    cdefine([
        {a: 'b', c: 'd'},
        {e: 'f', g: 'h'}
    ])
);