var listen = require('./index');

var EventEmitter = require('events').EventEmitter;

describe('listener', function () {
    var app = new EventEmitter();
    app.listen = function (port, callback) {
        if (port === 25) {
            app.emit('listening');
            return callback();
        }

        app.emit('error', new Error());
    };

    it('fails before listening on 22', function (done) {
        app.once('listening', done);
        listen(app, function (err, port) {});
    });

    it('fails before listening on 22 with start set', function (done) {
        app.once('listening', done);
        listen(app, { start: 22 }, function (err, port) {});
    });
});
