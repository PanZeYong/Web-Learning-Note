/**
 * 变量的解构赋值
 */
var [a, b, c] = [1, 2, 3]
console.log('a: ' + a);
console.log('b: ' + b);
console.log('c: ' + c);

let[foo, [[bar], baz]] = [1, [[2], 3]];
console.log('foo: ' + foo);
console.log('bar: ' + bar);
console.log('baz: ' + baz);

let [, , third] = ["foo", "bar", "baz"];
console.log(third);

let [x, , y] = [1, 2, 3]
console.log('x: ' + x);
console.log('y: ' + y);

let [head, ...tail] = [1, 2, 3, 4];
console.log('head: ' + head);
console.log('tail: ' + tail);

let [x1, y1, ...z] = ['a'];
console.log('x1: ' + x1);
console.log('y1: ' + y1);
console.log('z: ' + z);

let [x2, y2] = [1, 2, 3];
console.log('x2: ' + x2);
console.log('y2: ' + y2);

// 不完全解构
let [a1, [b1], d1] = [1, [2, 3], 4]
console.log('a1: ' + a1);
console.log('b1: ' + b1);
console.log('d1: ' + d1);

// 报错
// let [foo1] = 1;
// let [foo2] = false;
// let [foo3] = NaN;
// let [foo4] = undefined;
// let [foo5] = null;
// let [foo6] = {};
