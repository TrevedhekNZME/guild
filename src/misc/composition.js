// Runs in Node
console.clear();
console.log(Date.now());

const sum = (a, b=0, c=0) => a + b + c;
const increment = x => x + 1;
const double = x => x + x;
const square = x => x * x; // or x => x**2

function basic(...x) {
  const result = square(double(increment(sum(...x))));
  console.log(x, result);
}

console.log("basic");
basic(1,2,3);
basic(2);
basic(3);

function pipe(...fns) {
  return (...x) => {
    const result = fns.reduce((y, f) => [f(...y)], x);
    console.log(x, result);
  }
}

console.log("pipe");
const doPipe = pipe(sum, increment, double, square);
doPipe(1,2,3);
doPipe(2);
doPipe(3);



function compose(...fns) {
  return x => {
    const result = fns.reduceRight((y, f) => f(y), x);
    console.log(x, result);
  }
}

console.log("compose");
const composed = compose(square, double, increment);
composed(1);
composed(2);
composed(3);



// function resolve(x) {
//   return Promise.resolve(x)
//   .then(increment)
//   .then(double)
//   .then(square)
//   .then(result => {
//     console.log(x, result);
//   })
// }

// console.log("resolve");
// resolve(1);
// resolve(2);
// resolve(3);