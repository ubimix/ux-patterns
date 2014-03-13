var yaml = require('js-yaml');
var fs = require('fs');
var _ = require('underscore');
var fileset = require('fileset');

try {

    fileset('**/*.md', 'node_modules/**', function(err, files) {
        if (err) return console.error(err);
        // files is an array of filenames.
        // If the `nonull` option is set, and nothing
        // was found, then files is ["**/*.js"]
        // er is an error object or null.
        _.each(files, function(item) {
              var idx = item.indexOf('/');
              if (idx < 0)
                  return;
//            var data = fs.readFileSync('./arcs/index.md', 'utf8');
//            var doc = yaml.safeLoadAll(data, function(doc) {
//                console.log(doc);
//            });
//            console.log(doc);
              console.log(item);
            
        });

    });
} catch (e) {
    console.log(e);
}