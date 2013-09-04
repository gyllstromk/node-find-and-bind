# Find and bind

Find a free port to which to bind your restify/express/http server.

    $ npm install findandbind

`findandbind` is ideal for test scenarios in which hard coded ports are not desirable.

## Usage

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

In tests:

```js

describe('testing my server', function () {
    var myUrl;

    before(function(done) {
        findandbind(app, function (err, port) {
            myUrl = 'http://localhost:' + port;
            done(err);
        });
    });
});
```
