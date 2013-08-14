var async  = require('async');

var listen = module.exports = function (app, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    }

    var port = options.start || 22;

    async.forever(function (callback) {
        var d = require('domain').create();
        d.on('error', function (err) {
            port += 1;
            callback();
        });

        d.add(app);

        d.run(function () {
            app.listen(port, function () {
                callback(port);
            });
        });
    }, function (ignoredError) {
        if (callback) {
            callback(null, port);
            callback = null; // avoid multi callbacks as happens in restify
        }
    });
};
