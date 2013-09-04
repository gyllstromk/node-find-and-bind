# Find and bind

Find a free port to which to bind your restify/express/http server.

    $ npm install findandbind

Usage:

```js

var app = restify.createServer(); // or app = express(), etc

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
