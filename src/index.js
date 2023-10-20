import schema from './options.json';

// @see https://github.com/babel/babel-loader/blob/b89dfbd3bca9154ebee6d8ea10f99b7722a0125c/src/index.js#L57
// @see https://webpack.docschina.org/migrate/5/#getoptions-method-for-loaders
const validateOptions = require('schema-utils').validate;

// 设置此属性，source为一个buffer流
// export const raw = true;

export default function loader(source) {
  const options = this.getOptions();

  validateOptions(schema, options, {
    name: 'text parse Loader',
    baseDataPath: 'options'
  });

  // eslint-disable-next-line no-param-reassign
  source = source.replace(/\[name\]/g, options.name);

  return `module.exports = ${JSON.stringify(source)}`;

}
