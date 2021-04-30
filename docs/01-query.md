# url query

1. 特别注意: 在 url 中使用的时候，一定要提前 encodeURIComponent(DATA_ENCODE_JSON)
2. BUG(浏览器默认行为): O+8iSIsI==  -> O%208iSIsI%3D%3D
3. 实际我们的数据为: O+8iSIsI==  -> O%2B8iSIsI%3D%3D
- https://url?token=xxx&data=DATA_ENCODE_JSON

> DATA_ENCODE_JSON 传放参数会用 base64加码
```js
data = encodeURIComponent(
  base64.decode(
    JSON.stringify({ q1: xx, q2: yy, q3: zz }
  )
);
```

> 接收到的 data，用base64解码
```js
// !!! 这里特别提醒：如果在一些库中，取 queryString 的时候，有可能已经自带了 `decodeURIComponent`
// 所以这一步并不是必须的
JSON.parse(
  base64.decode(decodeURIComponent(data))
);
```

> 注意 `window.atob/btoa` 对中文处理有可能有兼容问题，所以这里建议使用 `js-base64` 这个库
