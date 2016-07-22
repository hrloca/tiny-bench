# tiny-bench
Minimum benchmark tool.

## installation

```sh
npm i -D tiny-bench
```

## usage

```js
const tb = require('tiny-bench')

tb.test['join'] = () => {
  ['a', 'b', 'c'].join('')
}

tb.test['reduce'] = () => {
  ['a', 'b', 'c'].reduce((a, c) => a + c)
}

tb.run()
```

```
--------------------------------------------------
join x 2,333,476 ops/sec ±1.75% (83 runs sampled)
reduce x 10,681,067 ops/sec ±1.20% (84 runs sampled)
--------------------------------------------------
👑 reduce
🃏 join
```
