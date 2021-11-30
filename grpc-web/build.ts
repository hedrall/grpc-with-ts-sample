import * as path from 'path';
// @ts-ignore
import dayjs from 'dayjs';
import { build, BuildOptions } from 'esbuild';

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEV = NODE_ENV === 'development';

console.log(`${dayjs().format('HH:mm:ss')}: ビルド開始`);

const define: BuildOptions['define'] = {
  'process.env.NODE_ENV': JSON.stringify( NODE_ENV ),
}

build({
  define,
  entryPoints: [path.resolve(__dirname, 'web-client.ts'),],
  bundle: true,
  outfile: 'bundle/web-client.js',
  minify: !IS_DEV,
  legalComments: 'none',
  sourcemap: IS_DEV,
  platform: 'browser',
  target: ['chrome58'],
  treeShaking: true,
})
  .then(result => {
    console.log('===========================================');
    console.log(`${dayjs().format('HH:mm:ss')}: ビルド完了`);
    console.error('errors', result.errors);
  })
  .catch(() => process.exit(1));
