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

assert.equal(
    "#define a 0xFF\n",
    cdefine({a: 255}, {hex: true})
);

assert.equal(
    "#define FOO_BAR 255\n" +
    "#define FOO_BAZ 254\n",
    cdefine({BAR: 255, BAZ: 254}, {prefix: 'FOO_'})
);