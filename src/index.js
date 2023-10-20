import mime from 'mime';

import schema from './options.json';

import normalizeFallback from './util/index';

// @see https://github.com/babel/babel-loader/blob/b89dfbd3bca9154ebee6d8ea10f99b7722a0125c/src/index.js#L57
// @see https://webpack.docschina.org/migrate/5/#getoptions-method-for-loaders
const validateOptions = require('schema-utils').validate;

export const raw = true;

export default function loader(source) {
  // eslint-disable-next-line no-unused-vars
  const { version, webpack } = this;

  const options = this.getOptions();

  validateOptions(schema, options, {
    name: 'url Loader',
    baseDataPath: 'options'
  });

  const file = this.resourcePath;

  const { limit } = options;
  let { limitSize } = options;

  if (limit) {
    limitSize = parseInt(limitSize, 10);
  }

  // get mime
  const mimetype = options.mimetype || mime.getType(file);

  if (limit && source.length < limitSize) {

    if (typeof source === 'string') {
      // eslint-disable-next-line no-param-reassign
      source = Buffer.from(source);
    }

    return `module.exports = ${JSON.stringify(
      `data:${mimetype || ''};base64,${source.toString('base64')}`
    )}`;
  }

  // normalize fallback
  const { loader: fallbackLoader, options: fallbackOptions } =
    normalizeFallback(options.fallback, options);

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const fallback = require(fallbackLoader);

  const fallbackLoaderContext = Object.assign({}, this, {
    query: fallbackOptions,
  });

  return fallback.call(fallbackLoaderContext, source);
}
