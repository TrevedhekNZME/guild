export default function createRental(movieID, daysRented) {

  return Object.freeze({
    daysRented, movieID, TYPE: "RENTAL"
  });

  // return {
  //   get daysRented() { return daysRented; },
  //   get movieID() { return movieId; },
  //   get TYPE () { return "RENTAL"; }
  // }
}