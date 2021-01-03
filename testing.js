(function (modulesMap, entry) {
  // internal runtime
})(
  {
    "index.js": function (require, module, exports) {
      var { Foo } = require("./thing.js");
      var obj = new Foo();
      obj.run();
    },
    "thing.js": function (require, module, exports) {
      module.exports.Foo = class Foo {
        run() {
          console.log("Hello!");
        }
      };
      module.exports.Bar = class Bar {
        run() {
          console.log("Unused!");
        }
      };
    },
  },
  "index.js",
);
