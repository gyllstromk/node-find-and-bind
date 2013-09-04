var listen  = require('../../');

var restify = require('restify');

var assert  = require('assert');

describe('restify', function () {
    var server1 = restify.createServer(),
        server2 = restify.createServer(),
        port    = 10004;

    before(function (done) {
        server1.listen(port, done);
    });

    it('server fails when binding to held port; uses next', function (done) {
        listen(server2, { start: port }, function (err, port_) {
            assert(port_ > port);
            done();
        });
    });
});

