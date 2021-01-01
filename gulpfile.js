const gulp = require("gulp");
const ts = require("gulp-typescript");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const del = require("del");

const tsProject = ts.createProject("./tsconfig.json");

function clean() {
  return del(["build"]);
}

gulp.task("build", () =>
  gulp
    .src("./src/**/*.ts")
    .pipe(tsProject())
    // .js.pipe(babel())
    // .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest("build")),
);
gulp.task("css", () => gulp.src("./src/css/*").pipe(gulp.dest("./build/css")));
gulp.task("html", () => gulp.src("./src/**/*.html").pipe(gulp.dest("./build")));
gulp.task("public/JPG", () => gulp.src("./public/**/*.jpg").pipe(gulp.dest("./build/public")));
gulp.task("public/PNG", () => gulp.src("./public/**/*.PNG").pipe(gulp.dest("./build/public")));
module.exports = {
  dev: gulp.series([clean, "build", "css", "html"]),
};
