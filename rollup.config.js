import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const input = './src/index.ts';


import pkg from './package.json'


export default {
    input,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        globals: {
            'styled-components': 'syled-components',
            react: 'React',
            'react-dom': 'ReactDOM',
        },
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
        globals: {
            'styled-components': 'syled-components',
            react: 'React',
            'react-dom': 'ReactDOM',
        },
      }
    ],
    external: ['react', 'react-dom', 'styled-components'],
    plugins: [
        typescript({
            removeComments: true,
            module: 'es6',
            target: 'es5',
            jsx: 'react',
            allowSyntheticDefaultImports: true,
            resolveJsonModule: true,
            moduleResolution: 'node',
        }),
        terser(),
    ]
  }
