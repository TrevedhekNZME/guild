let lastId = 0;

const movieMap = {};

function getNextId() {
  const id = lastId++;
  return `0000000${id}`.slice(-8);
}
const PRICE_CODES = [
  "regular", "childrens", "new-release"
];

function checkPriceCode(code) {
  code = code.toLowerCase();
  if(!PRICE_CODES.includes(code)) {
    throw new TypeError(`Invalid priceCode: "${code}"`);
  }
  return code;
}

export default function createMovie(title, priceCode) {
  priceCode = checkPriceCode(priceCode);
  const id = `M${getNextId()}`;

  const theMovie = Object.freeze({
    id,
    title,
    get priceCode() { return priceCode; }, 
    set priceCode(arg) { priceCode = checkPriceCode(arg); } 
  });
  // const theMovie = {
  //   get id() { return id; },
  //   get title() { return title; },
  //   get priceCode() { return priceCode; }, 
  //   set priceCode(arg) { priceCode = checkPriceCode(arg); } 
  // };

  movieMap[id] = theMovie;
  return theMovie;
}

export function getMovieById(movieId) {
  return movieMap[movieId];
}
