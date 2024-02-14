// Runs in Node
console.clear();
console.log(Date.now());

function chain(value = 0) {
  const obj = {
    add(num) {
      value += num;
      return obj;
    },
    multiply(num) {
      value *= num;
      return obj;
    },
    result() {
      return value;
    }
  }
  return obj;
}

// ----------------------------------------- //

console.log(
  chain(10).add(-4).multiply(7).result()
);
console.log(
  chain(12).multiply(10).add(3).result()
);













/*

function calc(value = 0) {
  const functions = {
    add(num) {
      value += num;
      return functions;
    },
    multiply(num) {
      value *= num;
      return functions;
    },
    result() {
      return value;
    }
  }
  return functions;
}


*/