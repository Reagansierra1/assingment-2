const { calculateSum, minAndMax, calculateAverage } = require("../src/numberProcessor");

test("calculate sum of numbers", () => {
    const numbers = [1, 2, 3];
    expect(calculateSum(numbers)).toBe(6);
});