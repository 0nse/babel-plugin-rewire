# Minimal example for [#193](https://github.com/speedskater/babel-plugin-rewire/issues/193)
This repository serves to illustrate an issue when trying to use Rewire together with Karma and Jasmine.
As soon as `__Rewire__` is called, Jasmine's `this` becomes undefined.

Please refer to [the issue](https://github.com/speedskater/babel-plugin-rewire/issues/193) for more information.

## How to reproduce
1. Install dependencies (e.g. using `yarn`)
2. Launch `grunt` from the directory root
3. Optionally, the [Karma Debug Runner](http://localhost:9876/debug.html) can be used
