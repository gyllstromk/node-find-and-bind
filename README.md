# Find and bind

Find a free port to which to bind.

    $ npm install findandbind

```js

var app = restify.createServer();

// ... do my configuration of app

var findandbind = require('findandbind');

findandbind(app, function (err, port) {
    // starts looking at 1024 ...
    console.log('listening on', port);
});
```

By default, `findandbind` starts checking at `1024`, the first user port.
To start checking at a different port:

```js

findandbind(app, { start: 2048 }, function (err, port) {
    console.log('listening on', port);
});
```
