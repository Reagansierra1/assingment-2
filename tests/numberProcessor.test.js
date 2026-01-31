const { calculateSum, minAndMax, calculateAverage } = require("../src/numberProcessor");

test("Calculate Sum: calculate sum of numbers", () => {
    const numbers = [1, 2, 3];
    expect(calculateSum(numbers)).toBe(6);
});

test("Calculate Sum: empty array", () => {
    const numbers = [];
    expect(calculateSum(numbers)).toBe(0);
});

test("Calculate Sum: negative numbers", () => {
    const numbers = [-1, -2, -3];
    expect(calculateSum(numbers)).toBe(-6);
});

test("Min and Max: find min and max of an array of numbers", () => {
    const numbers = [1, 2, 3];
    expect(minAndMax(numbers)).toEqual([1,3]);
});

test("Min and Max: find min and max of an empty array", () => {
    const numbers = [];
    expect(minAndMax(numbers)).toEqual([0,0]);
});

test("Min and Max: find min and max of an array of negative numbers", () => {
    const numbers = [-1, -2, -3];
    expect(minAndMax(numbers)).toEqual([-3,-1]);
});

test("Calcualte Average: calcualte average of numbers", () => {
    const numbers = [1, 2, 3];
    expect(calculateAverage(numbers)).toEqual(2);
});

test("Calcualte Average: calcualte average of numbers empty array", () => {
    const numbers = [];
    expect(calculateAverage(numbers)).toEqual(0);
});

test("Calcualte Average: calcualte average of negative numbers", () => {
    const numbers = [-1, -2, -3];
    expect(calculateAverage(numbers)).toEqual(-2);
});

test("Calcualte Average: calcualte average of numbers decimal", () => {
    const numbers = [1, 2, 3, 1];
    expect(calculateAverage(numbers)).toEqual(1.75);
});