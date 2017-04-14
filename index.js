const fs = require('fs');

function CompileLockPlugin(path) {
  if (!path) {
    throw 'Lock file path must be specified';
  }

  this.path = path;
}

CompileLockPlugin.prototype.apply = function(compiler) {
  var path = this.path;

  compiler.plugin('compile', function(params) {
    fs.closeSync(fs.openSync(path, 'w'));
  });

  compiler.plugin('after-emit', function(compilation, callback) {
    fs.unlinkSync(path);
    callback();
  });
};

module.exports = CompileLockPlugin;
