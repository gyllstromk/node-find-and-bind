var listen  = require('../../');

var http    = require('http'),
    assert  = require('assert');

describe('http', function () {
    var server1 = http.createServer(),
        server2 = http.createServer(),
        port    = 10002;

    before(function (done) {
        server1.listen(port, done);
    });

    after(function (done) {
        server1.close(function () {
            server2.close(done);
        });
    });

    it('server fails when binding to held port; uses next', function (done) {
        listen(server2, { start: port }, function (err, port_) {
            assert(port_ > port);
            done();
        });
    });
});



