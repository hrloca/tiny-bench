const { test, run } = require('./../lib/index')

const arr = [
  'まぐろ',
  'かんぱち',
  'サーモン',
  'いくら',
  'うに',
  'しめさば',
  'はまち',
]

// test code --------------------------------------------------
test['map'] = () => {
  arr.join('')
}

test['for'] = () => {
  let str
  for (let i = 0; i < arr.length; ++i) {
    str += arr[i]
  }
}

test['reduce'] = () => {
  arr.reduce((a,c) => a + c)
}

test['Recursive function'] = () => {
  (function fn(str, arr, i) {
    if (i >= arr.length) return str
    const newstr = str + arr[i]
    return fn(newstr, arr, i + 1)
  })([], arr, 0)
}

run()
