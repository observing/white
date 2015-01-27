'use strict';

var whitespace = require('css-whitespace');

/**
 * Optionally transform a file that might contain signficant whitespace.
 *
 * @param {Mixed} data Either a string of CSS or an object with a CSS property.
 * @returns {Mixed} CSS.
 * @api public
 */
module.exports = function transform(data) {
  var css;

  if ('string' === typeof data) css = data;
  else css = data.css;

  //
  // Check if we need to transform the given CSS file as it might contain
  // significant whitespace.
  //
  if (!~css.indexOf(';')) css = whitespace(css);

  if ('string' === typeof data) return css;
  else data.css = css;
};
