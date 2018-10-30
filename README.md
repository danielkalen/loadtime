# loadtime
[![Build Status](https://travis-ci.org/danielkalen/loadtime.svg?branch=master)](https://travis-ci.org/danielkalen/loadtime)
[![NPM](https://img.shields.io/npm/v/loadtime.svg)](https://npmjs.com/package/loadtime)

> Measure how long it takes to load an npm module in node

## Install

```
$ npm install --save --global loadtime
```


## Usage
```bash
$ loadtime express
#=> 59.194509ms

$ loadtime bluebird
#=> 26.245871ms
```



## API

### loadtime(module)

Returns a `Promise` which will eventually resolve the duration it took to load the provided `module` in milliseconds.

```js
const loadtime = require('loadtime');

loadtime('axios').then((time)=> {
    console.log(time);
    //=> 25.811197
})
```

## License
MIT © [Daniel Kalen](https://github.com/danielkalen)