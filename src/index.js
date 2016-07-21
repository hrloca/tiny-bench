import Benchmark from 'benchmark'
import keys from 'object-keys'

const suite = new Benchmark.Suite

suite
  .on('start', v => {
    console.log('--------------------------------------------------')
  })
  .on('cycle', e => {
    console.log(String(e.target))
  })
  .on('complete', () => {
    console.log('--------------------------------------------------')
    const successful = suite.filter('successful')
    const isSingle = keys(test).length <= 1
    if (!isSingle) {
      console.log('👑 ' + suite.filter('fastest').map('name'))
      console.log('🃏 ' + suite.filter('slowest').map('name'))
    }
  })

export const test = {}

export const run = v => {
  keys(test).forEach(v => {
    suite.add(v, test[v])
  })
  suite.run({ 'async': true })
}
