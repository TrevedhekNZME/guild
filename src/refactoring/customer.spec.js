import createCustomer from "./customer";
import createRental from "./rental";
import createMovie from "./movie";

const testMovies = [
  createMovie("KID", "childrens"),
  createMovie("REG", "regular"),
  createMovie("NEW", "new-release")
];
const testRentals = [
  createRental(testMovies[0].id, 5),
  createRental(testMovies[1].id, 2),
  createRental(testMovies[2].id, 3)
]

describe("Customer", () => {

  it("should produce empty statement", () => {
    const customer = createCustomer("Willie Whyte");
    const actual = customer.statement();
    const expected = [
      `Rental Record for Willie Whyte\n`,
      `Amount owed is 0\n`,
      `You earned 0 frequent renter points\n`
    ].join("");
    expect(actual).toEqual(expected);
  });

  it("should produce expected statement", () => {
    const customer = createCustomer("Bill Brown");
    testRentals.forEach(rental => customer.addRental(rental));
    const actual = customer.statement();
    console.log([actual]);
    const expected = [
      `Rental Record for Bill Brown\n`,
      `\tKID\t4.5\n`,
      `\tREG\t2\n`,
      `\tNEW\t9\n`,
      `Amount owed is 15.5\n`,
      `You earned 3 frequent renter points\n`
    ].join("");
    expect(actual).toEqual(expected);
  })
});