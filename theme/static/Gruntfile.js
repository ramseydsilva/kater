var fs = require('fs'),
    async = require('async');

var deleteFolderRecursive = function(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

module.exports = function(grunt) {

    var getFileContent = function(data, env) {
        if (env == 'prod') return data.replace("/app/", "/build/")
        if (env == 'dev') return data.replace("/build/", "/app/")
        return data;
    };

    var getBuildFileContent = function(data) {
        return data.replace("/build/", "/app/")
    };

    var configureFile = function(file, env, callback, getContentFunc) {
        if (!getContentFunc) getContentFunc = getFileContent;
        fs.readFile(file, 'utf8', function(err, data) {
            if (err) {
                callback(err);
            } else {
                fs.writeFile(file, getContentFunc(data, env), 'utf8', callback);
            }
        });
    }

    var handleCmd = function(cmd, done) {
        cmd.stdout.on('data', function(data) {
            grunt.log.write(data);
        });
        cmd.stderr.on('data', function(data) {
            grunt.log.error(data);
        });
        cmd.on('exit', function(code) {
            if (code != 0) {
                grunt.fail.warn('Exited with error');
            } else {
                done();
            }
        });
    };

    // Default task(s).
    grunt.registerTask('env', 'Switch environments', function(env) {
        if (env != 'dev' && env != 'prod') {
            grunt.log.error("env can be only 'dev' or 'prod'");
        }
        var done = this.async();
        async.parallel({
            configureApp: function(callback) {
                configureFile('../templates/base.html', env, callback);
            }
        }, function(err, results) {
            if (err) {
                grunt.log.error(err);
            } else {
                grunt.log.ok();
            }
            done();
        })
    });

    grunt.registerTask('build', 'Build app files', function() {
        var done = this.async();
        configureFile('./optimizer/build.js', "", function() {
            var spawn = require('child_process').spawn;
            var cmd = spawn('node', ['optimizer/r.js', '-o', 'optimizer/build.js']);
            handleCmd(cmd, function(code, err) {
                if (code != 0 && !!code) {
                    grunt.fail.warn('Failed to make build', code, err);
                } else {
                    done();
                }
            });
        }, getBuildFileContent);
    });

    grunt.registerTask('test', 'Test app', function() {
        var done = this.async();
        var spawn = require('child_process').spawn;
        var cmd = spawn('./node_modules/.bin/mocha', ['tests', '--recursive', '--grep', 'Perf', '--invert',
            '--reporter', 'xunit-file'
        ]);
        handleCmd(cmd, done);
    });

};
