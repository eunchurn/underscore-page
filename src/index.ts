import "./js/init";

// (function (modulesMap, entry) {
//   // internal runtime
//   console.log(modulesMap);
//   console.log(entry);
// })(
//   {
//     "index.js": function () {
//       var { Foo } = require("./js/init");
//       var obj = new Foo();
//       obj.run();
//     },
//     "thing.js": function () {
//       module.exports.Foo = class Foo {
//         run() {
//           console.log("Hello!");
//         }
//       };
//       module.exports.Bar = class Bar {
//         run() {
//           console.log("Unused!");
//         }
//       };
//     },
//   },
//   "index.js",
// );
