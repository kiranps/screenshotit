# Screenshotit

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Screenshotit is a javascript library for taking screenshot of current state of webpage. It uses [screenshotit-server](https://github.com/kiranps/screenshotit-server) for taking screenshot which is build on top of [puppeteer](https://github.com/GoogleChrome/puppeteer)

[build-badge]: https://img.shields.io/travis/kiranps/screenshotit/master.png?style=flat-square
[build]: https://travis-ci.org/kiranps/screenshotit

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/screenshotit

[coveralls-badge]: https://img.shields.io/coveralls/kiranps/screenshotit/master.png?style=flat-square
[coveralls]: https://coveralls.io/gh/kiranps/screenshotit


### Installing

```
npm install screenshotit
```

### Usage

```js
screenshotit(props).then(function(image) {
  // handle image
});

```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [puppeteer](https://github.com/GoogleChrome/puppeteer)
