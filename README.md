# next-json2base64
> Json and base64 parse/stringify

## install
```bash
npm install -S afeiship/next-json2base64 --registry=https://registry.npm.taobao.org
```

## apis
| api       | params   | description                          |
| --------- | -------- | ------------------------------------ |
| parse     | (string) | Transform base64 string to js object |
| stringify | (object) | Transform object to base64 string    |

## usage
```js
import NxJson2base64 from 'next-json2base64';

// code goes here:
NxJson2base64.parse('eyJuYW1lIjoiYWZlaSIsImFnZSI6MTA4fQ==');

// { name: 'afei', age: 108 }

```
