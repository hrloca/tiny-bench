'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = exports.test = undefined;

var _benchmark = require('benchmark');

var _benchmark2 = _interopRequireDefault(_benchmark);

var _objectKeys = require('object-keys');

var _objectKeys2 = _interopRequireDefault(_objectKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var suite = new _benchmark2.default.Suite();

suite.on('start', function (v) {
  console.log('--------------------------------------------------');
}).on('cycle', function (e) {
  console.log(String(e.target));
}).on('complete', function () {
  console.log('--------------------------------------------------');
  var successful = suite.filter('successful');
  var isSingle = (0, _objectKeys2.default)(test).length <= 1;
  if (!isSingle) {
    console.log('👑 ' + suite.filter('fastest').map('name'));
    console.log('🃏 ' + suite.filter('slowest').map('name'));
  }
});

var test = exports.test = {};

var run = exports.run = function run(v) {
  (0, _objectKeys2.default)(obj).forEach(function (v) {
    suite.add(v, obj[v]);
  });
  suite.run({ 'async': true });
};