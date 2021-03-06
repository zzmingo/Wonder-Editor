var gulp = require("gulp");
var gulpSync = require("gulp-sync")(gulp);
var path = require("path");
var karma = require("karma").server;

var karmaConfPath = path.join(process.cwd(), "test/test_editor/karma.conf.js");

var ciKarmaConfPath = path.join(process.cwd(), "karma.conf.js");

gulp.task("testEditorByKarma", function (done) {
    karma.start({
        configFile: karmaConfPath
    }, done);
});

gulp.task("testEditor", gulpSync.sync(["testEditorByKarma"]));

gulp.task("testInCI", function (done) {
    karma.start({
        configFile: ciKarmaConfPath
    }, done);
});
