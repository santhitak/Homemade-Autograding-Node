const hello = require("./hello");

var numbers = [3, 4, 3, 1, 5, 32, 2];

test("outputs", () => {
  expect(hello(numbers)).toBe(13);
});
