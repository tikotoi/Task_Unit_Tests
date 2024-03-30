import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe("getEventNumbersFromArray", () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });
  
  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.true;
  });

  it('should return false when provided with an odd number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.false;
  });

  it('should throw an error when passed value is not typeof number', () => {
    expect(validator.isNumberEven).to.throw()});

  it("Should return an array of even numbers", () => {
    const arr = [3, 4, 8, 11, 24, 20];
    const evenNumbersfromArray = validator.getEvenNumbersFromArray(arr);
    expect(evenNumbersfromArray).to.be.deep.eq([4, 8, 24, 20]);
  });

  it("should return true when provided an array of all numbers", () => {
    const arrayOfNumbers = [3, 4, 8, 11, 24, 20];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.be.true;
  });

  it("Should throw an error when passed value is not array of numbers", () => {
    const arr = ["3", "4", 8, 11, 24, 20];
    const result = validator.getEvenNumbersFromArray.bind(this, arr);
    expect(result).to.throw(`[${arr}] is not an array of "Numbers"`);
  });

  it("Should throw an error when passed value is not an array", () => {
    const i = {name: 'tiko'};
    expect(() => validator.isAllNumbers(i)).to.throw(`[${i}] is not an array`);
  });

  it("Should return true when passed value is integer", () => {
    const i = 9;
    expect(validator.isInteger(i)).to.be.true;
  })

  it("Should throw an error when passed value is not integer", () => {
    const i = "A";
    expect(()=> validator.isInteger(i)).to.throw(`[${i}] is not a number`)
  })
});
