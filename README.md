# @jacobbubu/rngmt

[![Build Status](https://github.com/jacobbubu/rngmt/workflows/Build%20and%20Release/badge.svg)](https://github.com/jacobbubu/rngmt/actions?query=workflow%3A%22Build+and+Release%22)
[![Coverage Status](https://coveralls.io/repos/github/jacobbubu/rngmt/badge.svg)](https://coveralls.io/github/jacobbubu/rngmt)
[![npm](https://img.shields.io/npm/v/@jacobbubu/rngmt.svg)](https://www.npmjs.com/package/@jacobbubu/rngmt/)

> Implementation of mersenne-twister random number generation algorithm with TypeScript

## Intro.

This module was modified from [rng](https://github.com/jhermsmeier/rng.js) for two reasons:

  - Comes with TypeScript type declaration
  - Help my colleagues migrate to other programming languages with minimal effort

## Usage

``` ts
import { RNG } from '@jacobbubu/rngmt'

const rng = new RNG() // or send a seed number as parameter
rng.random() // returns a tempered pseudorandom number between 0 and 1
rng.range(0, 100) // returns a number between 0 and 100
```

## License
MIT
