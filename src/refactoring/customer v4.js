import { getMovieById } from "./movie";

const calcTotalAmount = rentals => rentals.reduce((sum, r) => sum + r.getMovieCharge(), 0);

const getFrequentRentalPoints = rentals => rentals.reduce((sum, r) => sum + r.getFrequentRentalPoints(), 0);

function makeTextStatement(customer) {
  const result = [`Rental Record for ${customer.name}\n`];

  result.push(
    ...customer.rentals.map(r => `\t${getMovieById(r.movieID).title}\t${r.getMovieCharge()}\n`)
  );

  // add footer lines
  result.push(`Amount owed is ${calcTotalAmount(customer.rentals)}\n`);
  result.push(`You earned ${getFrequentRentalPoints(customer.rentals)} frequent renter points\n`);

  return result.join("");
}
// ************************

export default function createCustomer(name) {
  const rentals = [];

  const theCustomer = {
    get name() { return name; },
    addRental: (rental) => {
      if (rental.TYPE === "RENTAL") {
        rentals.push(rental);
      } // TODO: handle typeerror
    },
    statement: (type = "text") => {
      if(type==="text")
        return makeTextStatement({ name, rentals });
      if (type==="html")
        return "<h1>Pending</h1>";
      return "???";
    }
  }

  return theCustomer;
}
