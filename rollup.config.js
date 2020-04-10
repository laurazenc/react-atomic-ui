import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
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

// export default [
//     // UMD
//     {
//         input,
//         output: {
//             file: './dist/umd/react-layouts.js',
//             format: 'umd',
//             name: 'ReactLayouts',
//             globals: {
//                 'styled-components': 'syled-components',
//                 react: 'React',
//                 'react-dom': 'ReactDOM',
//             },
//         },
//         external: ['react', 'react-dom', 'styled-components'],
//         plugins: [
//             json(),
//             typescript({
//                 removeComments: true,
//                 module: 'es6',
//                 target: 'es5',
//                 jsx: 'react',
//                 allowSyntheticDefaultImports: true,
//                 resolveJsonModule: true,
//                 moduleResolution: 'node',
//             }),
//         ],
//     },

//     // Minified UMD
//     {
//         input,
//         output: {
//             file: './dist/umd/react-layouts.min.js',
//             format: 'umd',
//             name: 'ReactLayouts',
//             globals: {
//                 'styled-components': 'syled-components',
//                 react: 'React',
//                 'react-dom': 'ReactDOM',
//             },
//         },
//         external: ['react', 'react-dom', 'styled-components'],
//         plugins: [
//             json(),
//             typescript({
//                 removeComments: true,
//                 module: 'es6',
//                 target: 'es5',
//                 jsx: 'react',
//                 allowSyntheticDefaultImports: true,
//                 resolveJsonModule: true,
//                 moduleResolution: 'node',
//             }),
//             terser(),
//         ],
//     },

//     // CJS
//     {
//         input,
//         output: {
//             file: './dist/cjs/react-layouts.js',
//             format: 'cjs',
//         },
//         external: ['react', 'react-dom', 'styled-components'],
//         plugins: [
//             json(),
//             typescript({
//                 removeComments: true,
//                 module: 'es6',
//                 target: 'es5',
//                 jsx: 'react',
//                 allowSyntheticDefaultImports: true,
//                 resolveJsonModule: true,
//                 moduleResolution: 'node',
//             }),
//         ],
//     },

//     // Minified CJS
//     {
//         input,
//         output: {
//             file: './dist/cjs/react-layouts.min.js',
//             format: 'cjs',
//         },
//         external: ['react', 'react-dom', 'styled-components'],
//         plugins: [
//             json(),
//             typescript({
//                 removeComments: true,
//                 module: 'es6',
//                 target: 'es5',
//                 jsx: 'react',
//                 allowSyntheticDefaultImports: true,
//                 resolveJsonModule: true,
//                 moduleResolution: 'node',
//             }),
//             terser(),
//         ],
//     }
// ];