const gulp = require("gulp");
const jade = require("gulp-jade");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const historyApiFallback = require("connect-history-api-fallback");
// Compile index.jade
gulp.task("index", () => {
  return gulp
    .src("index.jade")
    .pipe(jade())
    .pipe(rename("index.html"))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

// Compile views
gulp.task("views", () => {
  return gulp
    .src("app/views/*.jade")
    .pipe(jade())
    .pipe(gulp.dest("dist/app/views"))
    .pipe(browserSync.stream());
});

// Copy scripts
gulp.task("scripts", () => {
  return gulp
    .src("app/**/*.js")
    .pipe(gulp.dest("dist/app"))
    .pipe(browserSync.stream());
});

// Copy CSS
gulp.task("css", () => {
  return gulp
    .src("assets/css/**/*.css")
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(browserSync.stream());
});

// Watch and serve
gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: "dist",
      middleware: [historyApiFallback()],
    },
    port: 4000,
  });

  gulp.watch("index.jade", gulp.series("index"));
  gulp.watch("app/views/*.jade", gulp.series("views"));
  gulp.watch("app/**/*.js", gulp.series("scripts"));
  gulp.watch("assets/css/**/*.css", gulp.series("css"));
});

gulp.task("default", gulp.series("index", "views", "scripts", "css", "serve"));
