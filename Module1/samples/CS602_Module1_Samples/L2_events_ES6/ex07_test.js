const EventEmitter = require('events').EventEmitter;
var Foo = require('./ex07_customclass');

// Usage
const foo = new Foo(100);

foo.on('event1', function (args) {
    console.log('Event raised!', 
    	args, foo.data);
});

foo.test();
foo.test2(500);