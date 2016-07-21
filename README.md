# tiny-bench
Minimum benchmark tool.

## usage

```sh
npm i -D tiny-bench
```

```js
const {test, run} = require('tiny-bench')

test['test1'] = () => {
  // ...
}

test['test2'] = () => {
  // ...
}

run()
```
