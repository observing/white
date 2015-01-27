# white

[![Version npm][version]](http://browsenpm.org/package/white)[![Build Status][build]](https://travis-ci.org/observing/white)[![Dependencies][david]](https://david-dm.org/observing/white)[![Coverage Status][cover]](https://coveralls.io/r/observing/white?branch=master)

[version]: http://img.shields.io/npm/v/white.svg?style=flat-square
[build]: http://img.shields.io/travis/observing/white/master.svg?style=flat-square
[david]: https://img.shields.io/david/observing/white.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/observing/white/master.svg?style=flat-square

White is a small conditional significant whitespace processor for [finn] and
rework. It performs a really basic check to see if a given file already
processed for significant whitespace. 

## Install

The module is released in npm and can be installed using:

```
npm install --save white
```

It's advised to use [finn] as processing engine as that's what we're using our
tests.

## Usage

As white is a plugin for `finn` we need to setup a `finn` instance first.
I assume you've already got it required an setup like:

```js
'use strict';

var finn = require('finn')()
  , whitespace = require('white');
```

Now that we have a `finn` instance we can assign `white` as pre filter:

```js
finn.pre.use(whitespace);
```

If you are using modules that process `@import` statements you might also want
to pre-process those files, usually you can just supply the `white` function
direction as transform method:

```js
finn.use('import', require('rework-import')({ transform: whitespace }));
```

And that's all you need to know about this module!

## License

MIT

[finn]: https://github.com/observing/finn
