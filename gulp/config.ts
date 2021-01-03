import path from "path";

const dest = "./dist";
const src = "./src";
const assetsSrc = "./public";
const relativeSrcPath = path.relative(".", src);

export default {
  minify: {
    src: dest + "/js/*.js",
    dest: dest + "/js/min",
  },
  assets: {
    // src: path.join(assetsSrc, "**/*.+(png|jpg|gif|JPG|PNG|GIF|JPEG)"),
    src: path.join(assetsSrc, "**/*"),
    dest: path.join(dest, assetsSrc),
    watchFiles: [path.join(assetsSrc, "**/*.{png,jpg,gif,jpeg,JPG,PNG,GIF,JPEG}")],
  },
  html: {
    src: path.join(src, "**/*.html"),
    dest,
    watchFiles: [path.join(src, "**/*.html")],
  },
  css: {
    src: path.join(src, "**/*.{css,scss}"),
    dest,
    watchFiles: [path.join(src, "**/*.{css,scss")],
  },
  ts: {
    src: path.join(src, "**/*.ts"),
    dest: dest,
    watchFiles: [path.join(src, "**/*.{js,jsx,ts,tsx}"), `!${path.join(src, "**/*test.{js,jsx,ts,tsx}")}`],
    options: {
      declaration: true,
      noImplicitAny: true,
      target: "ES3",
      module: "commonjs",
    },
  },
  browserify: {
    entry: {
      entries: path.join(src, "index.ts"),
      debug: true,
    },
    // entry: {
    //   entries: dest + "/index.js",
    //   debug: true,
    // },
    dest: dest,
    output: {
      filename: "bundle.js",
    },
  },
  watch: {
    ts: relativeSrcPath + "/ts/*.ts",
  },
};
