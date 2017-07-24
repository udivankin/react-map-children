import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  moduleName: 'react-map-children',
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'umd',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  external: ['react'],
};
