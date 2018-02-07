var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("default", function() {
    gulp.src("scss/bootstrap-modern.scss")
        .pipe(sass())
        .pipe(autoprefixer({
          browsers: ['last 2 version'],
          cascade: false
        }))
        .pipe(gulp.dest("dist"))
        .pipe(gulp.dest("docs"));
});
