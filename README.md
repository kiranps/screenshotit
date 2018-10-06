# Screenshotit

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Screenshotit is a javascript library for taking screenshot of current state of webpage. It uses [screenshotit-server](https://github.com/kiranps/screenshotit-server) for taking screenshot which is build on top of [puppeteer](https://github.com/GoogleChrome/puppeteer)

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

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

# Running the tests

Explain how to run the automated tests for this system

## Deployment

Add additional notes about how to deploy this on a live system

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [puppeteer](https://github.com/GoogleChrome/puppeteer)
