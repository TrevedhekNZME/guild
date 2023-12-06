const CHARS = "0123456789abcdef".split("");

function randomHex(len) {
  return new Array(len).fill(0).map(() => {
    const i = Math.random() * CHARS.length;
    return CHARS[Math.floor(i)];
  }).join("");
}

function randomData(size, len = 10) {
  return new Array(size).fill(len).map(randomHex);
}

export function mockFetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes("break")) {
        reject(new Error("Broke it!"));
      } else {
        resolve(randomData(9, 8));
      }
    }, 1500);
  })
}

export function getCats() {
  return fetch("https://catfact.ninja/facts?limit=5")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export function getCatFact() {
  return fetch("https://catfact.ninja/fact")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
