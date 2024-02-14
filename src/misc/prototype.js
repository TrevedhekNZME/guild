// Runs in Node
console.clear();
console.log(Date.now());

const math1 = {
  value: 0,
  multiply(m) {
    this.value *= m;
  }
}

math1.value = 10;
math1.multiply(3);
math1.multiply(3);
console.log(math1.value);

const math2 = Object.create(math1);
math2.add = function(n) {
  this.value += n;
}

math2.value = 12;
math2.multiply(10);
math2.add(3);
console.log(math2.value); //123
math1.value = 999;
console.log(math2.value); //123














// const math2 = Object.create(math1);
// math2.add = function(n) {
//   this.value += n;
// }

// math2.value = 12;
// math2.multiply(10);
// math2.add(3);
// console.log(math2.value);
// console.log(math1.value);
