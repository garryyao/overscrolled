# overscrolled
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Description

Help you to escape from e.g. Chrome's built-in "pull-to-refresh" feature an potentially any other fancy features provided by browser's 
when page is over-scrolled at the top, where in certain scenario you simply don't want the page to be disturbed by those.
   
Google Chrome [reference](https://docs.google.com/document/d/12Ay4s3NWake8Qd6xQeGiYimGJ_gCe0UMDZKwP9Ni4m8/) for how this works.

## Installation

```
$ npm install --save overscrolled
```

## Usage
```js
var overscrolled = require('overscrolled');
```

## API

### `overscrolled(window, [options])`
Description

#### Parameters
- **Window** `window`: The viewport's window object.
- **Object** `options`: Accepts following configurations 
- **Boolean** `options.prevent_pullToRefresh`: Prevent the "pull-to-refresh" behaviour 
- **Boolean** `options.prevent_overscrollGlow`: Prevent the elastic bouncing/glow effect when page is over-scrolled 

#### Return
- **Object** `handler` The handler object of this per overscrolled instance.  
- **Function** `handler.destroy` To tear down and cleanup event listeners.  

## Development
- `npm run build` - Build task that generates both minified and non-minified scripts;
- `npm run test-server` - Run Mocha tests once;
- `npm run test-browser` - Run Mocha tests in the browser using Karma once;
- `npm run test` - Shortcut for `npm run test-server && npm run test-browser`;
- `npm run tdd` - Run Mocha tests & watch files for changes;
- `npm run tdd-browser` - Run Karma (w/ Mocha) tests & watch files for changes;
- `npm run coverage` - Run Isparta, a code coverage tool;

## License
MIT © [Garry Yao](http://github.com/garryyao)

[travis-url]: https://travis-ci.org/garryyao/overscrolled
[travis-image]: https://img.shields.io/travis/garryyao/overscrolled.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/garryyao/overscrolled
[coveralls-image]: https://img.shields.io/coveralls/garryyao/overscrolled.svg?style=flat-square

[depstat-url]: https://david-dm.org/garryyao/overscrolled
[depstat-image]: https://david-dm.org/garryyao/overscrolled.svg?style=flat-square
