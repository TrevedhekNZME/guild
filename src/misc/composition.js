// Runs in Node
console.clear();
console.log(Date.now());

// chain(10).add(-4).multiply(7).result()
// chain(12).multiply(10).add(3).result()

// const add = a => n => n + a;
const add = a => n => n + a;
const multiply = m => n => m * n;

console.log(
  multiply(7)(add(-4)(10))
);

// ------------------------------- //

function compose(...fns) {
  return x => fns.reduceRight((y, f) => f(y), x);
}

// console.log("compose");

console.log(
  compose(multiply(7), add(-4))(10)
);
// console.log(
//   compose(add(3), multiply(10))(12)
// );
