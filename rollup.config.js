import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete'

import pkg from './package.json'


export default {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs"
      },
      {
        file: pkg.module,
        format: "esm"
      },
      {
        file: 'site/src/react-atomic/index.js',
        format: 'esm',
        banner: '/* eslint-disable */'
      }
    ],
    plugins: [
      del({ targets: ['dist/*', 'site/src/react-atomic'] }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
    ]
  }
