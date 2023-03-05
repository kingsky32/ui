import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
import image from '@rollup/plugin-image';

export function createRollupConfig(options, callback) {
  const name = options.name;
  // A file with the extension ".mjs" will always be treated as ESM, even when pkg.type is "commonjs" (the default)
  // https://nodejs.org/docs/latest/api/packages.html#packages_determining_module_system
  const extName = options.format === 'esm' ? 'mjs' : 'js';
  const outputName = 'dist/' + [name, options.format, extName].join('.');

  const config = {
    input: options.input,
    output: {
      file: outputName,
      format: options.format,
      name: 'UI',
      sourcemap: true,
      globals: { react: 'React' },
      exports: 'named',
    },
    plugins: [
      external(),
      postcss({
        includePaths: ['src/components'],
        extensions: ['.css', '.scss', '.sass'],
        plugins: [url({ url: 'inline', maxSize: 50, fallback: 'copy' })],
      }),
      typescript({
        tsconfig: options.tsconfig,
        clean: true,
        exclude: ['**/__tests__', '**/*.test.ts'],
      }),
      image(),
      options.format === 'umd' &&
        commonjs({
          include: /\/node_modules\//,
        }),
      sourcemaps(),
      options.format !== 'esm' &&
        terser({
          output: { comments: false },
          compress: {
            drop_console: true,
          },
        }),
    ].filter(Boolean),
  };

  return callback ? callback(config) : config;
}
