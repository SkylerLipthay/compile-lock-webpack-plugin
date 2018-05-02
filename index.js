const fs = require('fs-extra');
const path = require('path');

function CompileLockPlugin(filePath) {
  if (!filePath) {
    throw 'Lock file path must be specified';
  }

  this.filePath = filePath;
}

CompileLockPlugin.prototype.apply = function(compiler) {
  var filePath = this.filePath;

  compiler.plugin('compile', function(params) {
    fs.ensureDirSync(path.dirname(filePath));
    fs.closeSync(fs.openSync(filePath, 'w'));
  });

  compiler.plugin('after-emit', function(compilation, callback) {
    fs.unlinkSync(filePath);
    callback();
  });
};

module.exports = CompileLockPlugin;
