import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'


export default [
  {
    input: 'src/index.ts',
    output: [
      { file: `dist/${ pkg.name }.cjs.js`, format: 'cjs' }, // cjs
      { file: `dist/${ pkg.name }.es.js`, format: 'es' }, // es
      { file: `dist/${ pkg.name }.umd.js`, format: 'umd', name: pkg.name }, // umd
    ],
    plugins: [
      typescript({ useTsconfigDeclarationDir: true }),
      terser(),
    ],
    watch: {
      include: 'src/**',
    },
  },
]