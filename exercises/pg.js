// ## playground
/* 
// #1 lexical scope
try {
    let z = foo(z * 2);
} catch (err) {
    console.log(err.message);
}
*/

/*
// #2 more scope
if (0 == 0) {
    {
        let v = 3;
        console.log(v);
    }
}
*/

/*
// #3 dumping
var [a, b, c, d] = [1, 2, 3, 4];
console.log(a, b, c, d);
*/

/*
// 4 destructuring and restructuring
function foo() {
    return { a: 1, b: 2, c: 3 };
}

var obj;

var { a, b: X = 22, c, d } = obj = foo() || {};

console.log(obj);
console.log(a, X, c, d);
*/

/*
// 5 object concise properties
var a = 1;
var c = "hello";

var obj = {
  a,
  b() {},
  [c]: 42,
  [c+"fn"]() {}
};

console.log(obj);

*/

/*
// 6 middleware for string interpolation

function hello(arr, ...values) {
  console.log('hellosdfsdf');
  console.log (arr, values);
}

function foo(strings, ...values) {
  console.log(strings);
  console.log(values);
  var str = "";
  for (var i =0; i< strings.length; i++) {
    if ( i > 0 ) {
      if (typeof values[i-1] == "number") {
        str += values[i-1].toFixed(2);
      } else {
        str += values[i-1];  
      }
    }
    str += strings[i];
  }
  return str;
}

var name = "Adrian";
var orderNumber = "123";
var total = 319.7;

var msg = foo`Hello, ${name}, your order (#${orderNumber}) was $${total}`;

console.log(hello`${msg}`);

*/