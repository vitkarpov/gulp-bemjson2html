var path = require('path');
var fs = require('fs');
var bem = require('bem-xjst');
var through = require('through2');

module.exports = function(options) {
    options = options || {};

    return through.obj(function(file, encoding, done) {
        var bemhtml = path.resolve(process.cwd(), options.template);

        fs.readFile(bemhtml, 'utf8', function(err, bemhtml) {
            var bemjson = new Function('return ' + file.contents.toString())();
            var bemhtml = (err) ? '' : bemhtml;

            var html = bem.compile(bemhtml).apply(bemjson);

            file.contents = new Buffer(html);
            done(null, file);
        });
    });
};
