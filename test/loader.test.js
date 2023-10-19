import {
  compile,
  execute,
  getCompiler,
  readAsset,
} from './helpers';

describe('loader', () => {
  it('should work', async () => {
    const compiler = getCompiler('simple.js');
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
  });
});
