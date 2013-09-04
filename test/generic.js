var listen = require('../');

var EventEmitter = require('events').EventEmitter;

describe('listener', function () {
    var port;
        app = new EventEmitter();

    app.listen = function (port_, callback) {
        if (port === port_) {
            app.emit('listening');
            return callback();
        }

        app.emit('error', new Error());
    };

    it('fails before listening on 1026', function (done) {
        port = 1026;
        app.once('listening', done);
        listen(app, function (err, port) {});
    });

    it('fails before listening on 25 with start set to 22', function (done) {
        port = 25;
        app.once('listening', done);
        listen(app, { start: 22 }, function (err, port) {});
    });
});
