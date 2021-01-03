import gulp from "gulp";
import browserify from "browserify";
import tsify from "tsify";
import source from "vinyl-source-stream";
import ts from "gulp-typescript";
import imagemin from "gulp-imagemin";
import changed from "gulp-changed";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import bs from "browser-sync";
import config from "../config";
import { clean } from "./clean";

const browserSync = bs.create();
const reload = browserSync.reload;

// const tsProject = ts.createProject("./tsconfig.json", config.ts.options);

// export const tsc = gulp.task("tsc", function () {
//   return gulp
//     .src(config.ts.src)
//     .pipe(tsProject())
//     .js.pipe(gulp.dest(config.ts.dest))
//     .pipe(reload({ stream: true }));
// });

export const tsc = gulp.task("tsc", function () {
  return browserify(config.browserify.entry)
    .plugin(tsify)
    .bundle()
    .pipe(source(config.browserify.output.filename))
    .pipe(gulp.dest(config.browserify.dest))
    .pipe(reload({ stream: true }));
});

function watch(task: string, watchFiles: string[]) {
  const watcher = gulp.watch(watchFiles, { ignoreInitial: true }, gulp.parallel(task));
  watcher.on("change", function (path, stats) {
    console.log(`File ${path} was changed`);
  });

  watcher.on("add", function (path, stats) {
    console.log(`File ${path} was added`);
  });

  watcher.on("unlink", function (path, stats) {
    console.log(`File ${path} was removed`);
  });
}

gulp.task("watch-tsc", () => watch("tsc", config.ts.watchFiles));

export const brows = gulp.task("browserify", function () {
  return browserify(config.browserify.entry)
    .bundle()
    .pipe(source(config.browserify.output.filename))
    .pipe(gulp.dest(config.browserify.dest));
});

gulp.task("imagemin", function () {
  return gulp
    .src(config.assets.src)
    .pipe(changed(config.assets.dest))
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 75, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ],
        { verbose: true },
      ),
    )
    .pipe(gulp.dest(config.assets.dest));
});
gulp.task("html", function () {
  return gulp
    .src(config.html.src)
    .pipe(gulp.dest(config.html.dest))
    .pipe(reload({ stream: true }));
});

gulp.task("css", function () {
  return gulp
    .src(config.css.src)
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest(config.css.dest))
    .pipe(reload({ stream: true }));
});

gulp.task("default", function () {
  // Serve files from the dist of this project
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
  watch("tsc", config.ts.watchFiles);
  watch("html", config.html.watchFiles);
  watch("css", config.css.watchFiles);
  watch("imagemin", config.assets.watchFiles);
});

export const dev = gulp.series("tsc", "imagemin", "html", "css", "default");
