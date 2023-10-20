import {
  compile,
  getCompiler,
  execute,
  readAsset,
  getWarnings,
  getErrors
} from './helpers';

describe('loader', () => {
  it('should work', async () => {
    const compiler = getCompiler('example.txt', { name: 'javaswing' });
    const stats = await compile(compiler);

    expect(
      execute(readAsset("main.bundle.js", compiler, stats))
    ).toMatchSnapshot("result");
    expect(getWarnings(stats)).toMatchSnapshot("warnings");
    expect(getErrors(stats)).toMatchSnapshot("errors");
  });
});
