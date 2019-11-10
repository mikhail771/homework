const { src, dest, watch, series } = require('gulp');
const concat = require('gulp-concat');
const inject = require('gulp-inject');
const sass = require('gulp-sass');

function devCopyTask() {
    watch('src/**/*',{}, function (cb) {
    src("src/*.html")
        .pipe(dest('dist/'));
    cb();
    })
}
function copyTask(cb) {
        src("src/*.html")
            .pipe(dest('dist/'));
        cb();
}

function concatJS(cb) {
    src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(dest('dist/js/'));
    cb();
}

function makeCSS(cb) {
    src('./src/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/'));
    cb();
}

function injectJs(cb) {
    const target = src('./src/index.html');
    const sources = src(['./dist/js/all.js'], {read: false});

    target.pipe(inject(sources));
    cb();
}
 function injectCSS(cb) {
     const target = src('./src/index.html');
     const sources = src('./dist/sass/style.css', {read: false});

     target.pipe(inject(sources));
     cb();
 }

module.exports.dev = series(concatJS, injectJs,makeCSS,injectCSS,copyTask,devCopyTask);
module.exports.build = series(concatJS, injectJs,makeCSS,injectCSS,copyTask);
