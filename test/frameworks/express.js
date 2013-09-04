var listen  = require('../../');

var express = require('express');

var assert  = require('assert');

describe('express', function () {
    var server1 = express(),
        server2 = express(),
        port    = 10000;

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


