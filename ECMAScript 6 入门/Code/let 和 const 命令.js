'use strict';

/**
 * let 命令
 *
 * 基本用法
 */
/*{
	let a = 1;
	var b = 2;
}

console.log('a: ' + a);
console.log('b: ' + b);

for (var i = 0; i < 10; i++) {}

console.log(i);

var a = [];
for(var i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	};
}

a[6]();

var a = [];
for(let i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	};
}

a[6]()*/

// 不存在变量提升
/*console.log(bar);
console.log(foo);

var bar = 2;
let foo = 2;*/

// 暂时性死区
/*var tmp = 123;

if (true) {
	tmp = 'abc';
	let tmp;
}*/

// 不允许重复声明
/*function test() {
	let a = 10;
	var a = 1;
}

test();*/

// 不能在函数内部重新声明参数
/*function func(arg) {
	let arg;
}

func(1);*/

// 块级作用域
// 内层变量可能覆盖外层变量
/*var tmp = new Date();

function f() {
	console.log(tmp);
	if (false) {
		var tmp = 'Hello world';
	}
}

f();*/

// 用来计数的循环变量泄漏为全局变量
/*var s = "hello";
for (var i = 0; i < s.length; i++) {
	console.log(s[i]);
}

console.log(i);*/

// ES6 的块级作用域
/*function f1() {
	let n = 5;
	if (true) {
		let n = 10;
	}

	console.log(n);    
}

f1();*/

// 外层作用域无法读取内层作用域的变量
/*{
	{
		{
			{
				{
					let instance = 'Hello World !'
				}
				console.log(instance);
			}
		}
	}
}*/

// 内层作用域可以定义外层作用域的同名变量
/*{
	{
		{
			{
				let insane = 'Hello World';
				{ let insane = 'Hello World '}
			}
		}
	}
}*/

// 立即执行匿名函数（IIFE）
// IIFE 写法
/*(function () {
	var tmp = 2
}());*/

// 块级作用域写法
/*{
	let tmp = 2;
}*/

// 块级作用域与函数声明
if (true) {
	function f1() {}
}

/*function f() {
	console.log('I am outside!');
}

(function () {
	if (false) {
		// 重复声明一次函数 f
		function f() {
			console.log('I am inside!');
		}
	}

	f();
}());*/