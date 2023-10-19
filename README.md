# webpack-loader-guide



## Getting Started

To begin, you'll need to install `webpack-loader-guide`:

```console
$ npm install webpack-loader-guide --save-dev
```

<!-- isLoader ? use(this) : delete(isPlugin) -->

Then add the loader to your `webpack` config. For example:

<!-- isPlugin ? use(this) : delete(isLoader) -->

Then add the plugin to your `webpack` config. For example:

**file.ext**

```js
import file from 'file.ext';
```

<!-- isLoader ? use(this) : delete(isPlugin) -->

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /.ext$/,
        use: [
          {
            loader: `webpackloaderguide-loader`,
            options: { ...options },
          },
        ],
      },
    ],
  },
};
```

<!-- isPlugin ? use(this) : delete(isLoader) -->

**webpack.config.js**

```js
module.exports = {
  plugins: [
    new `WebpackLoaderGuide`Plugin(options)
  ]
}
```

And run `webpack` via your preferred method.

## Options

### `[option]`

Type: `[type|other-type]`
Default: `[type|null]`

[ option description ]

<!-- isLoader ? use(this) : delete(isPlugin) -->

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        loader: `webpackloaderguide-loader`,
        options: {
          [option]: '',
        },
      },
    ],
  },
};
```

<!-- isPlugin ? use(this) : delete(isLoader) -->

**webpack.config.js**

```js
module.exports = {
  plugins: [
    new `WebpackLoaderGuide`Plugin({
      [option]: ''
    })
  ]
};
```

## Examples

[ example outline text ]

**webpack.config.js**

```js
// Example setup here..
```

**file.ext**

```js
// Source code here...
```

**bundle.js**

```js
// Bundle code here...
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/webpack-loader-guide.svg
[npm-url]: https://npmjs.com/package/webpack-loader-guide
[node]: https://img.shields.io/node/v/webpack-loader-guide.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/webpack-loader-guide.svg
[deps-url]: https://david-dm.org/webpack-contrib/webpack-loader-guide
[tests]: https://dev.azure.com/webpack-contrib/webpack-loader-guide/_apis/build/status/webpack-contrib.webpack-loader-guide?branchName=master
[tests-url]: https://dev.azure.com/webpack-contrib/webpack-loader-guide/_build/latest?definitionId=2&branchName=master
[cover]: https://codecov.io/gh/webpack-contrib/webpack-loader-guide/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/webpack-loader-guide
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=webpack-loader-guide
[size-url]: https://packagephobia.now.sh/result?p=webpack-loader-guide
