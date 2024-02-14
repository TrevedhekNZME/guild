// Runs in Node
console.clear();
console.log(Date.now());

// class Singleton {
//   static #instance;
//   static #okToCreate = false;

//   constructor() {
//     if (!Singleton.#okToCreate) {
//       throw new TypeError("Singleton is not constructable");
//     }
//     // Otherwise, okay to create an instance
//   }
//   static getInstance() {
//     if (!Singleton.#instance) {
//       Singleton.#okToCreate = true;
//       Singleton.#instance = new Singleton();
//       Singleton.#okToCreate = false;
//     }
//     return Singleton.#instance;
//   }

//   runMe() {
//     console.log("Doing my thing here...");
//   }
// }

const ONLY_ME = {
  runMe() {
    console.log("Doing my thing here...");
  }
}
// const Singleton = {
//   getInstance() {
//     return ONLY_ME;
//   }
// }

// ----------------------------------------- //
function test() {
  const s1 = ONLY_ME;
  const s2 = ONLY_ME;

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }

  s1.runMe();
}

test();





/*

const SINGLE_ME = {
  runMe() {
    console.log("Doing my thing here...");
  }
}

const Singleton = {
  getInstance() {
    return SINGLE_ME;
  }
}

*/