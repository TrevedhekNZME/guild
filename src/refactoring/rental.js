export default function createRental(movieId, daysRented) {

  // return Object.freeze({
  //   days: daysRented, movieID: movieId, TYPE: "RENTAL"
  // });

  return {
    get days() { return daysRented; },
    get movieID() { return movieId; },
    get TYPE () { return "RENTAL"; }
  }
}