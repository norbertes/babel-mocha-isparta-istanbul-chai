console.log('------ init.js ------');
global.use = (function () {
  var path = require('path');
  var srcDir = path.resolve(__dirname, 'src');
  return function (modulePath) {
    return require(path.resolve(srcDir, modulePath));
  };
})();
