'use strict'

import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';

//Used in the app but not in production
const external = ['jquery']

const globals = {
  jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
}

module.exports = {
  input: path.resolve(__dirname, 'src/assets/js/index.js'),
  output: {
    file: path.resolve(__dirname, `_site/assets/js/bundle.js`),
    format: 'umd',
    globals,
    name: 'sleek'
  },
  plugins: [
    resolve(),
    commonjs()
  ],
  external
}
