// compilers
var cover = process.env.running_under_istanbul;
require('babel-core/register')({
  'only': cover ? ['**/__tests__/*.jsx'] : void 0,
  'stage': 0
});
require('require-noop')({
  extensions: ['.css', '.less', '.sass']
});

// assertions
require('chai').should();

// fake DOM
require('node-jsdom').env({
  html: '<body></body>',
  done: function (errors, window) {
    global.document = window.document;
    global.window = window;
    global.navigator = window.navigator;
  }
});
