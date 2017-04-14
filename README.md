# Compile Lock Webpack Plugin

This is a simple [Webpack](http://webpack.github.io/) plugin that creates a lock file (an empty file) at a specified path when compilation starts, and deletes it after the compiled files have been emitted. This is particularly useful, for example, during development when using `webpack --watch` and a server that is configured to sleep as long as the lock file exists.

## Getting started

Install the plugin:

```
npm install --save-dev compile-lock-webpack-plugin
```

## Usage

`new CompileLockWebpackPlugin(path)`

`path` is a required string that specifies the desired path at which the lock file should be maintained.

## License

MIT
