var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var annotate = require('gulp-ng-annotate');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');

var paths = {
    jsSource: ['./public/js/**/*.js'],
    sassSource: ['./public/styles/**/*.scss'],
    indexSource: ['./public/index.html'],
    viewsSource: ['./public/views/**/*.html']
    // querySource: ['./queries/**/*.sql']
};

gulp.task('sass', function() {
    return gulp.src(paths.sassSource)
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(cssmin())
        .pipe(rename({extname: ".min.css"}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
    return gulp.src(paths.jsSource)
        .pipe(concat('bundle.js'))
        .pipe(annotate())
        .pipe(uglify())
        .pipe(rename({extname: ".min.js"}))
        .pipe(gulp.dest('./dist'))
});

// gulp.task('queries', function() {
//     gulp.src(paths.querySource)
//         .pipe(gulp.dest("./server/db"))
//         .pipe(gulp.dest("./db"))
// })

gulp.task('views', function() {
    gulp.src(paths.viewsSource)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest("./dist/views"))
})

gulp.task('index', function() {
    gulp.src(paths.indexSource)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest("./dist"))
})

gulp.task('watch', function() {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.sassSource, ['sass']);
    gulp.watch(paths.indexSource, ['index']);
    gulp.watch(paths.viewsSource, ['views']);
    // gulp.watch(paths.querySource, ['queries']);
});

gulp.task('default', ['js', 'sass', 'index', 'views', /*'queries',*/
    'watch'
]);
