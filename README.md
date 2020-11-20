# next-json2base64
> Json and base64 encode/decode.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-json2base64
```

## apis
| api    | params   | description                          |
| ------ | -------- | ------------------------------------ |
| decode | (string) | Transform base64 string to js object |
| encode | (object) | Transform object to base64 string    |

## usage
```js
import NxJson2base64 from '@jswork/next-json2base64';

// code goes here:
NxJson2base64.decode('eyJuYW1lIjoiYWZlaSIsImFnZSI6MTA4fQ==');
// { name: 'afei', age: 108 }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-json2base64/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-json2base64
[version-url]: https://npmjs.org/package/@jswork/next-json2base64

[license-image]: https://img.shields.io/npm/l/@jswork/next-json2base64
[license-url]: https://github.com/afeiship/next-json2base64/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-json2base64
[size-url]: https://github.com/afeiship/next-json2base64/blob/master/dist/next-json2base64.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-json2base64
[download-url]: https://www.npmjs.com/package/@jswork/next-json2base64
