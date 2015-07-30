# random-hex
Simple utility that generates random hexadecimal colors.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Code Status][coverage-image]][coverage-url]

[npm-image]: https://img.shields.io/badge/npm-v1.0.2-blue.svg
[npm-url]: https://www.npmjs.com/package/random-hex
[travis-image]: https://travis-ci.org/danillouz/random-hex.svg?branch=master
[travis-url]: https://travis-ci.org/danillouz/random-hex
[coverage-image]: https://coveralls.io/repos/danillouz/random-hex/badge.svg?branch=master&service=github
[coverage-url]: https://coveralls.io/github/danillouz/random-hex?branch=master

# install
`npm i -S random-hex`

# usage
```
var randomHex = require('random-hex');

randomHex.generate(); // #f92672
randomHex.generate(); // #f060ff
```

*The `generate` method can be called multiple times and will generate a random hex
color each time.*

# testing
`npm test`

# code coverage
`npm run cover`

[istanbul](https://github.com/gotwarlost/istanbul) and [coveralls](https://github.com/nickmerwin/node-coveralls) are used to generate a code coverage report.

# linting
[jshint](http://jshint.com/) is used to lint the code.

The code will be linted when running `npm test` by means of the 'pretest' hook.
