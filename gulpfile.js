'use strict';

var gulp = require("gulp"),
    sass = require('gulp-sass'), 
    paths = {
        scss: './SRC/scss/',       
        css: './DIST/css/'      
    };

/*
 * @task: sass
 * Compile all SCSS files to CSS, put in DIST/CSS folder.
 */
gulp.task('sass', function () {
    var scssArr = [
        paths.scss + 'main.scss'
    ];
    console.log(scssArr)
    return gulp.src(scssArr)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.css));
});

/*
 * @task: serve
 */
gulp.task('serve', ['sass'], function() {
    gulp.watch(['scss/**/*.scss'], ['sass']);   
});
