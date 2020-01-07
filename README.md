# next-json2base64
> Json and base64 parse/stringify.

## installation
```bash
npm install -S @feizheng/next-json2base64
```

## apis
| api    | params   | description                          |
| ------ | -------- | ------------------------------------ |
| decode | (string) | Transform base64 string to js object |
| encode | (object) | Transform object to base64 string    |

## usage
```js
import NxJson2base64 from '@feizheng/next-json2base64';

// code goes here:
NxJson2base64.decode('eyJuYW1lIjoiYWZlaSIsImFnZSI6MTA4fQ==');
// { name: 'afei', age: 108 }
```
