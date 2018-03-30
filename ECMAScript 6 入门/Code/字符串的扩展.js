/**
 * 字符串的扩展
 */
// JavaScript 写法
console.log("\u0061");
console.log("\uD842\uDFB7");
console.log("\u20BB7");

// ES6 写法
console.log("\u{20BB7}");
console.log("\u{41}\u{42}\u{43}");

let hello = 123;

var s = "“”";

console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));

var s = "‘a’";

console.log(s.codePointAt(0));
console.log(s.codePointAt(1));
console.log(s.codePointAt(2));

// 字符串的遍历器接口
for(let codePoint of 'foo') {
    console.log(codePoint);
}

var text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

for (let i of text) {
    console.log(i);
}

console.log('abcde'.charAt(0));
