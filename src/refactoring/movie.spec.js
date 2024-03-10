import { describe } from "vitest";
import createMovie from "./movie";

describe("Movie happy path", () => {
  const movie = createMovie("Some Title", "childrens");
  console.log(movie);
  const { id, title, priceCode } = movie;
  console.log({ id, title, priceCode });

  it("should create immutable ID", () => {
    expect(movie.id).toBeDefined();
    expect(
      () => { movie.id = "XXX"; }
    ).toThrow()
  })

  it("should create immutable Title", () => {
    expect(movie.title).toBe("Some Title");
    expect(
      () => { movie.title = "XXX"; }
    ).toThrow()
  })

  it("should allow valid priceCode change", () => {
    expect(movie.priceCode).toBe("childrens");
    movie.priceCode = "NEW-rEleaSe";
    expect(movie.priceCode).toBe("new-release");
  })

  it("should prevent invalid priceCodes", () => {
    expect(
      () => { movie.priceCode = "OverCharged"; }
    ).toThrow('Invalid priceCode: "overcharged"');
  })
  it("should increment ids", () => {
    const movie2 = createMovie("abc", "regular");
    expect(movie2.id).not.toEqual(movie.id);
  })
})